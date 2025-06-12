import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const createRoomRouter: Router = Router();

createRoomRouter.post("/", auth, async (req, res) => {
    const validateData = CreateRoomSchema.safeParse(req.body);

    if (!validateData.success) {
        res.status(400).json({ msg: "Did not recived a valid data", error: validateData.error });
        return;
    }

    const adminId = req.userId;

    if (!adminId) {
        res.status(400).json({ msg: "Did not receive a valid adminId" });
        return;
    }

    const { slug } = validateData.data;

    try {
        const room = await prismaClient.room.create({
            data: {
                slug,
                adminId
            }
        })

        res.json({ msg: "Room Created successfully!", roomId: room.id })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Room already exists or server not responding, please try again later!!" });
    }
});

export default createRoomRouter;