import { ShapeType } from "../types";
import clearCanvas from "./clear";
import renderExistingShapes from "./render-shapes";

export function reRender(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    existingShapes: ShapeType[],
    cameraOffset: { x: number, y:number }
) {
    clearCanvas(ctx, canvas.width, canvas.height);
    renderExistingShapes(ctx, existingShapes, cameraOffset);
}