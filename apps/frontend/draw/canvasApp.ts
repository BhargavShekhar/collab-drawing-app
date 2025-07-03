import clearCanvas from "./canvas-methods/clear";
import { reRender } from "./canvas-methods/re-render";
import renderExistingShapes from "./canvas-methods/render-shapes";
import { getDiff } from "./methods/getDiff";
import { getShapeId } from "./methods/getShapeId";
import { getShapeMap } from "./methods/getShapeMap";
import { getWorldMouse } from "./methods/getWorldMouse";
import { handleDrawingPreview } from "./methods/handleDrawingPreview";
import { handlePanning } from "./methods/handlePanning";
import { handleShapeDraw } from "./methods/handleShapeDraw";
import { handleShapeMovement } from "./methods/handleShapeMovement";
import { handleShapeSelection } from "./methods/handleShapeSelection";
import { AppState, CircleType, LineType, RectangleType, ShapeType, toolType } from "./types";
import { DiffType } from "@repo/common/types/types"

export class CanvasApp {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private roomId: string;
    private existingShapes: ShapeType[];
    private socket: WebSocket;
    private tool: toolType;
    private cameraOffset: { x: number, y: number };
    private setCameraOffset: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>

    private isClicked = false;
    private startX = 0;
    private startY = 0;
    private dragOffsetX = 0;
    private dragOffsetY = 0;

    private panningState = {
        isPanning: false,
        startPanX: 0,
        startPanY: 0,
        initialCameraOffset: { x: 0, y: 0 }
    };

    private selectShape: RectangleType | CircleType | LineType | null = null;
    private Shape: ShapeType | null = null;

    private MAX_HISTORY = 50;
    private undoStack: AppState[] = [];
    private redoStack: AppState[] = [];

    private onHistoryChange: (canUndo: boolean, canRedo: boolean) => void;

    constructor(
        canvas: HTMLCanvasElement,
        roomId: string,
        existingShapes: ShapeType[],
        socket: WebSocket,
        tool: toolType,
        cameraOffset: { x: number, y: number },
        setCameraOffset: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>,
        onHistoryChange: (canUndo: boolean, canRedo: boolean) => void
    ) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.roomId = roomId;
        this.existingShapes = existingShapes;
        this.socket = socket;
        this.tool = tool;
        this.cameraOffset = cameraOffset;
        this.setCameraOffset = setCameraOffset;
        this.onHistoryChange = onHistoryChange;

        this.setupListeners();
        this.render();
        this.setupSocket();

        this.saveState();
    }

    private setupSocket() {
        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (message.type === "draw") {
                const shape = message.shape;
                this.existingShapes.push(shape);
                this.render();
            } else if (message.type === "move") {
                const shape = message.shape;

                this.existingShapes = this.existingShapes.map(shapes => {
                    if (shape.type === "Rectangle" && shapes.Rectangle?.id === shape.Rectangle.id) {
                        return { ...shapes, Rectangle: shape.Rectangle };
                    } else if (shape.type === "Circle" && shapes.Circle?.id === shape.Circle.id) {
                        return { ...shapes, Circle: shape.Circle };
                    } else if (shape.type === "Line" && shapes.Line?.id === shape.Line.id) {
                        return { ...shapes, Line: shape.Line };
                    }

                    return shapes;
                })

                this.render();
            } else if (message.type === "undo" || message.type === "redo") {
                const shapeDiff: DiffType = message.diff;
                this.applyDiff(shapeDiff);
            }
        }
    }

    private setupListeners() {
        this.canvas.addEventListener("mousedown", this.onMouseDown);
        this.canvas.addEventListener("mousemove", this.onMouseMove);
        this.canvas.addEventListener("mouseup", this.onMouseUp);

        this.cleanup = () => {
            this.canvas.removeEventListener("mousedown", this.onMouseDown);
            this.canvas.removeEventListener("mousemove", this.onMouseMove);
            this.canvas.removeEventListener("mouseup", this.onMouseUp);
        };
    }

    private saveState() {
        const clone = JSON.parse(JSON.stringify(this.existingShapes)) as ShapeType[];
        this.undoStack.push({ shapes: clone });

        if (this.undoStack.length > this.MAX_HISTORY) {
            this.undoStack.shift();
        }

        this.redoStack = [];

        this.onHistoryChange(this.canUndo(), this.canRedo());
    }

    public canUndo() {
        return this.undoStack.length > 1;
    }

    public canRedo() {
        return this.redoStack.length > 0;
    }

    public undo() {
        if (this.undoStack.length <= 1) return;

        const currentState = this.undoStack.pop();

        if (!currentState) return;

        this.redoStack.push(currentState);

        const prevState = this.undoStack[this.undoStack.length - 1];

        const diff = getDiff(currentState.shapes, prevState.shapes);

        this.existingShapes = JSON.parse(JSON.stringify(prevState.shapes));

        this.socket.send(JSON.stringify({
            type: "undo",
            roomId: this.roomId,
            diff
        }))

        this.render();
        this.onHistoryChange(this.canUndo(), this.canRedo());
    }

    public redo() {
        if (this.redoStack.length === 0) return;

        const next = this.redoStack.pop();
        if (next) {
            const currentState: AppState = {
                shapes: JSON.parse(JSON.stringify(this.existingShapes))
            };

            const diff: DiffType = getDiff(currentState.shapes, next.shapes);
            
            this.undoStack.push(JSON.parse(JSON.stringify(next)));
            this.existingShapes = JSON.parse(JSON.stringify(next.shapes));
            
            this.socket.send(JSON.stringify({
            type: "redo",
            roomId: this.roomId,
                diff
            }))

            this.render();
            this.onHistoryChange(this.canUndo(), this.canRedo());
        }
    }

    private applyDiff(shapeDiff: DiffType) {
        const shapeMap = getShapeMap(this.existingShapes);

        for (const shape of shapeDiff.added) {
            const id = getShapeId(shape);
            shapeMap.set(id, shape);
        }

        for (const shape of shapeDiff.removed) {
            const id = getShapeId(shape);
            shapeMap.delete(id);
        }

        for (const shape of shapeDiff.modified) {
            const id = getShapeId(shape);
            shapeMap.set(id, shape);
        }

        this.existingShapes = Array.from(shapeMap.values());
        this.render();
    }

    private onMouseDown = (e: MouseEvent) => {
        const tool = this.tool;

        this.isClicked = true;

        const cameraOffset = this.cameraOffset;
        const { x: worldMouseX, y: worldMouseY } = getWorldMouse(e, cameraOffset);

        this.startX = worldMouseX;
        this.startY = worldMouseY;

        if (tool === toolType.select) {
            const result = handleShapeSelection(worldMouseX, worldMouseY, this.existingShapes, this.canvas);

            this.selectShape = result.selectedShape;
            this.dragOffsetX = result.dragOffsetX;
            this.dragOffsetY = result.dragOffsetY;
            this.Shape = result.shape;

            return;
        } else if (tool === toolType.pointer) {
            this.panningState = {
                isPanning: true,
                startPanX: e.clientX,
                startPanY: e.clientY,
                initialCameraOffset: { ...this.cameraOffset },
            };
            return;
        } else if (tool === toolType.clear) {
            this.socket.send(JSON.stringify({
                type: "clear",
                roomId: this.roomId
            }))

            this.existingShapes = [];
            this.undoStack = [];
            this.redoStack = [];
        }
    };

    private onMouseMove = (e: MouseEvent) => {
        const cameraOffset = this.cameraOffset;
        const { x: worldMouseX, y: worldMouseY } = getWorldMouse(e, cameraOffset);
        const tool = this.tool;

        if (this.isClicked) {
            reRender(this.canvas, this.ctx, this.existingShapes, cameraOffset);
            handleDrawingPreview(this.ctx, this.startX, this.startY, worldMouseX, worldMouseY, tool, cameraOffset);
        }

        if (this.selectShape?.isMoving) {
            handleShapeMovement(
                this.selectShape,
                true,
                worldMouseX,
                worldMouseY,
                this.dragOffsetX,
                this.dragOffsetY,
                this.canvas,
                this.ctx,
                this.existingShapes,
                cameraOffset
            );
        }

        if (this.panningState.isPanning) {
            const newOffset = handlePanning(
                e,
                this.panningState.startPanX,
                this.panningState.startPanY,
                this.panningState.initialCameraOffset
            );

            this.setCameraOffset(newOffset);
            this.cameraOffset = newOffset;
            this.render();
        }
    };

    private onMouseUp = (e: MouseEvent) => {
        const cameraOffset = this.cameraOffset;
        const { x: worldMouseX, y: worldMouseY } = getWorldMouse(e, cameraOffset);

        this.isClicked = false;
        this.canvas.style.cursor = "default";
        this.panningState.isPanning = false;

        if (this.selectShape) {
            if (this.Shape) {
                this.socket.send(JSON.stringify({
                    type: "move",
                    roomId: this.roomId,
                    shape: this.Shape
                }));

                this.saveState();
            }

            this.selectShape.isMoving = false;
            this.selectShape = null;
        }

        const tool = this.tool;

        const newShape = handleShapeDraw(tool, this.startX, this.startY, worldMouseX, worldMouseY, this.roomId);

        if (newShape) {
            this.existingShapes.push(newShape);
            this.socket.send(JSON.stringify({
                type: "draw",
                roomId: this.roomId,
                shape: newShape
            }));
            this.saveState();
            this.render();
        }
    };

    private render() {
        clearCanvas(this.ctx, this.canvas.width, this.canvas.height);
        renderExistingShapes(this.ctx, this.existingShapes, this.cameraOffset);
    }

    public setTool(newTool: toolType) {
        this.tool = newTool;
        this.render()
    }

    public setCameraOffsetValue(newOffset: { x: number; y: number }) {
        this.cameraOffset = newOffset;
        this.render();
    }

    public cleanup: () => void = () => { };
}