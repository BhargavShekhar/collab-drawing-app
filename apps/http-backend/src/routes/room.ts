import { Router } from "express";
import { auth } from "../middlewares/auth";
import { prismaClient } from "@repo/db/client";

const RoomRouter: Router = Router();

// TODO add auth middleware after adding login to frontend
RoomRouter.get("/:slug", async (req, res) => {
    const slug = req.params.slug;

    if(!slug || typeof(slug) != "string") {
        res.status(400).json({ msg: "Did not recived a valid slug" });
        return;
    }

    try {
        const room = await prismaClient.room.findUnique({
            where: { slug }
        });

        res.json({ room });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Could not create room, please try again later" });
    }
})

export default RoomRouter;