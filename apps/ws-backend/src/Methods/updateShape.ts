import { ShapeType } from "@repo/common/types/types";
import { prismaClient } from "@repo/db/client";

export async function updateShape(shape: ShapeType) {
    try {
        if (shape.type === "Rectangle" && shape.Rectangle) {
            return await prismaClient.rectangle.update({
                where: { id: shape.Rectangle.id },
                data: shape.Rectangle
            })
        } else if (shape.type === "Circle" && shape.Circle) {
            return await prismaClient.circle.update({
                where: { id: shape.Circle.id },
                data: shape.Circle
            })
        } else if (shape.type === "Line" && shape.Line) {
            return await prismaClient.line.update({
                where: { id: shape.Line.id },
                data: shape.Line
            })
        }
    } catch (error) {
        console.log("Error occured at updateShape");
        throw error
    }

}