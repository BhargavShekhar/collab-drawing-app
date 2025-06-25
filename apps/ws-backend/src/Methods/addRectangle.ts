import { prismaClient } from "@repo/db/client"
import { RectangleType } from "@repo/common/types/types"

export async function addRectangle({ userId, roomId, rectangle }: {
    userId: string,
    roomId: number,
    rectangle: RectangleType,
}) {
    try {
        const { startX, startY, width, height } = rectangle

        const createdShape = await prismaClient.shape.create({
            data: {
                type: "Rectangle",
                userId,
                roomId
            }
        })

        await prismaClient.rectangle.create({
            data: {
                shapeId: createdShape.id,
                startX,
                startY,
                height,
                width
            }
        })
    } catch (error) {
        console.log("Error occured ar addRectangle");
        throw error
    }
}