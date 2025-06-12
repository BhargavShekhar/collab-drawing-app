import { isInsideCircle, isInsideLine, isInsideRectangle } from "./inside";
import { CircleType, LineType, RectangleType, ShapeType } from "../types";

export function handleShapeSelection(
    x: number,
    y: number,
    shapes: ShapeType[],
    canvas: HTMLCanvasElement
): {
    selectedShape: CircleType | RectangleType | LineType | null;
    dragOffsetX: number;
    dragOffsetY: number;
} {
    for (let i = shapes.length - 1; i >= 0; i--) {
        const shape = shapes[i];
        if (shape.Rectangle) {
            const rect = shape.Rectangle;
            if (isInsideRectangle(x, y, rect)) {
                rect.isMoving = true;
                canvas.style.cursor = "move";
                return {
                    selectedShape: rect,
                    dragOffsetX: x - rect.startX,
                    dragOffsetY: y - rect.startY,
                };
            }
        } else if (shape.Circle) {
            const circle = shape.Circle;
            if (isInsideCircle(x, y, circle)) {
                circle.isMoving = true;
                canvas.style.cursor = "move";
                return {
                    selectedShape: circle,
                    dragOffsetX: x - circle.startX,
                    dragOffsetY: y - circle.startY,
                };
            }
        } else if (shape.Line) {
            const line = shape.Line;
            if (isInsideLine(x, y, line)) {
                line.isMoving = true;
                canvas.style.cursor = "move";
                return {
                    selectedShape: line,
                    dragOffsetX: x - line.startX,
                    dragOffsetY: y - line.startY
                };
            }
        } 
    }

    return {
        selectedShape: null,
        dragOffsetX: 0,
        dragOffsetY: 0,
    };
}
