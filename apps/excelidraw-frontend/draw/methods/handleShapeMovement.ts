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

    shape.startX = x - dragOffsetX;
    shape.startY = y - dragOffsetY;

    reRender(canvas, ctx, shapes, cameraOffset);
}
