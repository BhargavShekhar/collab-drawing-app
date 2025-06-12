import { prismaClient } from "@repo/db/client";
import { Router } from "express";
import { auth } from "../middlewares/auth";

const ChatRouter: Router = Router();

// TODO add auth after adding signup in frontend
ChatRouter.get("/:roomId", async (req, res) => {
    const roomId = Number(req.params.roomId);

    try {
        const messages = await prismaClient.chat.findMany({
            where: { roomId },
            take: 50,
            orderBy: { id: "asc" }
        });

        res.json({ messages }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not get the messages, please try again later" });
    }
})

export default ChatRouter;