import { ShapeType } from "@repo/common/types/types";
import { addRectangle } from "./addRectangle";
import { addCircle } from "./addCircle";
import { addLine } from "./addLine";

export async function addShape(shape: ShapeType, userId: string, roomId: number) {
    try {
        if (shape.type === "Rectangle" && shape.Rectangle) {
            const rectangle = shape.Rectangle;
            return await addRectangle({ userId, roomId, rectangle });
        } else if (shape.type === "Circle" && shape.Circle) {
            const circle = shape.Circle;
            return await addCircle({ userId, roomId, circle });
        } else if (shape.type === "Line" && shape.Line) {
            const line = shape.Line;
            return await addLine({ userId, roomId, line })
        }
    } catch (error) {
        console.log("Error occured at addShape");
    }
}