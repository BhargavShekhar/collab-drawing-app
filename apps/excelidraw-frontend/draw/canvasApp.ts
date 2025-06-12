import clearCanvas from "./canvas-methods/clear";
import { reRender } from "./canvas-methods/re-render";
import renderExistingShapes from "./canvas-methods/render-shapes";
import { getWorldMouse } from "./methods/getWorldMouse";
import { handleDrawingPreview } from "./methods/handleDrawingPreview";
import { handlePanning } from "./methods/handlePanning";
import { handleShapeDraw } from "./methods/handleShapeDraw";
import { handleShapeMovement } from "./methods/handleShapeMovement";
import { handleShapeSelection } from "./methods/handleShapeSelection";
import { CircleType, LineType, RectangleType, ShapeType, toolType } from "./types";

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
    private prevShape: RectangleType | CircleType | LineType | null = null;

    constructor(
        canvas: HTMLCanvasElement,
        roomId: string,
        existingShapes: ShapeType[],
        socket: WebSocket,
        tool: toolType,
        cameraOffset: { x: number, y: number },
        setCameraOffset: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>
    ) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.roomId = roomId;
        this.existingShapes = existingShapes;
        this.socket = socket;
        this.tool = tool;
        this.cameraOffset = cameraOffset;
        this.setCameraOffset = setCameraOffset;

        this.setupListeners();
        this.render();
        this.setupSocket();
    }

    private setupSocket() {
        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (message.type === "draw") {
                const shape = message.shape;
                this.existingShapes.push(shape);
                this.render();
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

    private onMouseDown = (e: MouseEvent) => {
        this.isClicked = true;

        const cameraOffset = this.cameraOffset;
        const { x: worldMouseX, y: worldMouseY } = getWorldMouse(e, cameraOffset);

        this.startX = worldMouseX;
        this.startY = worldMouseY;

        const tool = this.tool;

        if (tool === toolType.select) {
            const result = handleShapeSelection(worldMouseX, worldMouseY, this.existingShapes, this.canvas);
            this.selectShape = result.selectedShape;
            this.dragOffsetX = result.dragOffsetX;
            this.dragOffsetY = result.dragOffsetY;
            this.prevShape = this.selectShape;
        }

        if (tool === toolType.pointer) {
            this.panningState = {
                isPanning: true,
                startPanX: e.clientX,
                startPanY: e.clientY,
                initialCameraOffset: { ...this.cameraOffset },
            };
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
            if (this.prevShape) {
                // this.socket.send(JSON.stringify({
                //     type: "move",
                //     roomId: this.roomId,
                //     shape: {
                //         type: this.selectShape.type,
                //         [this.selectShape.type]: {
                //             shapeId: this.selectShape.shapeId,
                //             ...this.selectShape
                //         }
                //     }
                // }));
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