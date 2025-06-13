import { v4 as uuidv4 } from "uuid";
import { ShapeType, toolType } from "../types";

export function handleShapeDraw(
    tool: toolType,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    roomId: string
): ShapeType | null {
    const width = endX - startX;
    const height = endY - startY;

    if (tool === toolType.rectangle) {
        return {
            type: "Rectangle",
            roomId: parseInt(roomId),
            Rectangle: {
                id: uuidv4(),
                startX,
                startY,
                width,
                height,
            },
            Circle: null,
            Line: null
        };
    } else if (tool === toolType.circle) {
        return {
            type: "Circle",
            roomId: parseInt(roomId),
            Circle: {
                id: uuidv4(),
                startX,
                startY,
                radius: Math.hypot(width, height),
            },
            Rectangle: null,
            Line: null,
        };
    } else if (tool === toolType.line) {
        return {
            type: "Line",
            roomId: parseInt(roomId),
            Line: {
                id: uuidv4(),
                startX,
                startY,
                endX,
                endY,
            },
            Rectangle: null,
            Circle: null
        }
    }

    return null;
}
