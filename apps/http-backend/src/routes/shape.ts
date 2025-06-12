import { prismaClient } from "@repo/db/client";
import { Router } from "express";

const shapeRouter: Router = Router();

shapeRouter.get("/:roomId", async (req, res) => {
    const roomId = Number(req.params.roomId);

    try {
        const shape = await prismaClient.shape.findMany({
            where: { roomId },
            include: { Rectangle: true, Circle: true, Line: true }
        })

        res.json({ shape });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not get the shape, please try again later" });
    }
})

export default shapeRouter;