import { ShapeType } from "@repo/common/types/types";
import { prismaClient } from "@repo/db/client";

export async function removeShape(shape: ShapeType) {
    try {
        if (shape.type === "Rectangle" && shape.Rectangle) {
            return await prismaClient.rectangle.delete({
                where: { id: shape.Rectangle.id }
            })
        } else if (shape.type === "Circle" && shape.Circle) {
            return await prismaClient.circle.delete({
                where: { id: shape.Circle.id }
            })
        } else if (shape.type === "Line" && shape.Line) {
            return await prismaClient.line.delete({
                where: { id: shape.Line.id }
            })
        }
    } catch (error) {
        console.warn("Unknown or malformed shape during deletion", shape);
        throw error
    }
}