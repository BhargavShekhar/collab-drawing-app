import { LineType } from "@repo/common/types/types";
import { prismaClient } from "@repo/db/client"

export async function addLine({ userId, roomId, line }: {
    userId: string,
    roomId: number,
    line: LineType
}) {
    try {
        const { startX, startY, endX, endY } = line;
        const createShape = await prismaClient.shape.create({
            data: {
                type: "Line",
                userId,
                roomId
            }
        })

        await prismaClient.line.create({
            data: {
                shapeId: createShape.id,
                startX,
                startY,
                endX,
                endY
            }
        })
    } catch (error) {
        console.log("Error occured ar addLine");
        throw error
    }
}