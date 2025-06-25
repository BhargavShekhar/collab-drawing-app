import { CircleType } from "@repo/common/types/types";
import { prismaClient } from "@repo/db/client";

export async function addCircle({ userId, roomId, circle }: {
    userId: string,
    roomId: number,
    circle: CircleType
}) {
    try {
        const { startX, startY, radius } = circle;
        const createShape = await prismaClient.shape.create({
            data: {
                type: "Circle",
                roomId,
                userId
            }
        });

        await prismaClient.circle.create({
            data: {
                shapeId: createShape.id,
                startX,
                startY,
                radius
            }
        })
    } catch (error) {
        console.log("Error occured ar addCircle");
        throw error
    }
}