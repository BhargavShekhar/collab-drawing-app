import { WebSocket } from "ws";
import { UserType } from "..";
import { DiffType } from "@repo/common/types/types";
import { updateShape } from "../Methods/updateShape";
import { removeShape } from "../Methods/removeShape";
import { addShape } from "../Methods/addShape";

export async function handleDiff({ ws, diff, roomId, Users, userId }: {
    ws: WebSocket,
    diff: DiffType,
    roomId: number,
    Users: UserType[],
    userId: string
}) {
    const { added, removed, updated } = diff;

    Users.forEach(user => {
        if (user.rooms.includes(String(roomId)) && user.ws !== ws) {
            user.ws.send(JSON.stringify({
                type: "diff",
                roomId,
                diff
            }))
        }
    });

    try {
            // handle added shapes
            for (const shape of added) await addShape(shape, userId, roomId)
            // handle removed shapes
            for (const shape of removed) await removeShape(shape);
            // handle update shapes
            for (const shape of updated) await updateShape(shape);
    } catch (error) {
        console.error("❌ handleDiff failed for room", roomId, "with error:", error);
    }
}