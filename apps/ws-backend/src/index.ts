import { WebSocket, WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";
import { checkAuth } from "./auth";
import { addShape } from "./Methods/addShape";
import { DiffType, ShapeType } from "@repo/common/types/types";
import { removeShape } from "./Methods/removeShape";
import { updateShape } from "./Methods/updateShape";

// TODO improve the architecture by adding singletons or redux to it

const wss = new WebSocketServer({ port: 8080 });

export interface UserType {
    userId: string,
    rooms: string[],
    ws: WebSocket
}

const Users: UserType[] = [];

wss.on("connection", (ws, request) => {
    const url = request.url;    // ws://localhost:3000?token=123123

    if (!url) {
        ws.send("did not recived a proper url");
        ws.close();
        return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);

    if (!queryParams) {
        ws.send("Missing query string in URL");
        ws.close();
        return;
    }

    const token = queryParams.get("token");

    if (!token) {
        ws.send("did not recived a proper token in the url");
        ws.close();
        return;
    }

    const userId = checkAuth(token);

    if (!userId) {
        ws.send("Could not verify the token!!");
        ws.close();
        return;
    }

    Users.push({
        userId,
        rooms: [],
        ws
    })

    ws.on("message", async (data) => {
        const parsedData = JSON.parse(data as unknown as string);

        if (parsedData.type === "join_room") {
            const user = Users.find(user => user.ws === ws);

            // TODO add checks
            user?.rooms.push(parsedData.roomId);
        }

        if (parsedData.type === "leave_room") {
            const user = Users.find(user => user.ws === ws);

            if (!user) return;

            user.rooms = user.rooms.filter(room => room === parsedData.room);
        }

        if (parsedData.type === "draw") {
            const roomId = parsedData.roomId;
            const shape = parsedData.shape;

            try {
                Users.forEach(user => {
                    if (user.rooms.includes(roomId) && user.ws !== ws) {
                        user.ws.send(JSON.stringify({
                            type: "draw",
                            shape,
                            roomId
                        }))
                    }
                })

                addShape(shape, userId, roomId);

            } catch (error) {
                console.log(error);
            }
        }

        if (parsedData.type === "move") {
            const roomId = parsedData.roomId;
            const shape = parsedData.shape;

            try {
                Users.forEach(user => {
                    if (user.rooms.includes(roomId) && user.ws !== ws) {
                        user.ws.send(JSON.stringify({
                            type: "move",
                            shape,
                            roomId
                        }));
                    }
                })

                if (shape.type === "Rectangle") {
                    const { shapeId, startX, startY, width, height } = shape.Rectangle;
                    await prismaClient.rectangle.update({
                        where: { shapeId },
                        data: { startX, startY, width, height }
                    });
                } else if (shape.type === "Circle") {
                    const { shapeId, startX, startY, radius } = shape.Circle;
                    await prismaClient.circle.update({
                        where: { shapeId },
                        data: { startX, startY, radius }
                    });
                } else if (shape.type === "Line") {
                    const { shapeId, startX, startY, endX, endY } = shape.Line;
                    await prismaClient.line.update({
                        where: { shapeId },
                        data: { startX, startY, endX, endY }
                    });
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (parsedData.type === "undo" || parsedData.type === "redo") {
            const roomId = parsedData.roomId;
            const shapeDiff: DiffType = parsedData.diff;
            const messageType = parsedData.type === "undo" ? "undo": "redo";

            try {
                Users.forEach(user => {
                    if(user.rooms.includes(roomId) && user.ws !== ws) {
                        user.ws.send(JSON.stringify({
                            type: messageType,
                            roomId,
                            diff: shapeDiff
                        }))
                    }
                })

                if(shapeDiff.added.length > 0) {
                    const shapes: ShapeType[] = shapeDiff.added;
                    for (const shape of shapes) addShape(shape, userId, roomId);
                }
                if(shapeDiff.removed.length > 0) {
                    const shapes: ShapeType[] = shapeDiff.removed;
                    for (const shape of shapes) removeShape(shape);
                }
                if(shapeDiff.modified.length > 0) {
                    const shapes: ShapeType[] = shapeDiff.modified;
                    for (const shape of shapes) updateShape(shape);
                }
            } catch (error) {
                console.log(error);
            }
        }

    })
})