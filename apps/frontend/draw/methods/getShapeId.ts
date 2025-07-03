import { ShapeType } from "../types";

export function getShapeId(shape: ShapeType) {
    if (shape.Circle) return shape.Circle.id;
    if (shape.Line) return shape.Line.id;
    if (shape.Rectangle) return shape.Rectangle.id;
    return "";
}