import drawCircle from "../draw-shapes/circle";
import drawLine from "../draw-shapes/line";
import drawRectangle from "../draw-shapes/rectangle";
import { ShapeType } from "../types";

export default function renderExistingShapes(
    ctx: CanvasRenderingContext2D,
    existingShapes: ShapeType[],
    cameraOffset: { x: number, y: number }
) {
    for(const shapes of existingShapes) {
        if(shapes.type === "Rectangle" && shapes.Rectangle) {
            drawRectangle(ctx, shapes.Rectangle, cameraOffset);
        } else if(shapes.type === "Circle" && shapes.Circle) {
            drawCircle(ctx, shapes.Circle, cameraOffset);
        } else if(shapes.type === "Line" && shapes.Line) {
            drawLine(ctx, shapes.Line, cameraOffset);
        }
    }
}