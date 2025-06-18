import { CircleType, LineType, RectangleType } from "../types";
import { reRender } from "../canvas-methods/re-render";
import { ShapeType } from "../types";

export function handleShapeMovement(
    shape: RectangleType | CircleType | LineType | null,
    isMoving: boolean,
    x: number,
    y: number,
    dragOffsetX: number,
    dragOffsetY: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    shapes: ShapeType[],
    cameraOffset: { x: number; y: number }
): void {
    if (!shape || !isMoving) return;

    const newStartX = x - dragOffsetX;
    const newStartY = y - dragOffsetY;

    if ("endX" in shape && "endY" in shape) {
        const dx = newStartX - shape.startX;
        const dy = newStartY - shape.startY;

        shape.endX += dx;
        shape.endY += dy;
    }

    shape.startX = newStartX;
    shape.startY = newStartY;


    reRender(canvas, ctx, shapes, cameraOffset);
}
