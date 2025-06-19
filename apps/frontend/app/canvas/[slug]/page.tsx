import CanvasClient from "@/components/CanvasClient";
import RoomNotFoundError from "@/components/Create-Room/RoomNotFound";
import { HTTP_BACKEND } from "@/config";
import getExistingShapes from "@/draw/canvas-methods/existing-shapes";
import { ShapeType } from "@/draw/types";
import axios from "axios";

async function getRoomId(slug: string) {
    try {
        const res = await axios.get(`${HTTP_BACKEND}/room/${slug}`);
        if (res.status !== 200) {
            return;
        }
        return res.data.room.id;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default async function Canvas({ params }: {
    params: {
        slug: string
    }
}) {
    const slug = (await params).slug;
    const roomId = await getRoomId(slug);
    const existingShapes: ShapeType[] | null = await getExistingShapes(roomId);
    // const existingShapes: ShapeType[] = [];

    if (!roomId || !existingShapes) {
        console.log("could not fetch either roomId or existing shapes");
        return <RoomNotFoundError roomName={slug} />
    }

    return (
        <CanvasClient roomId={roomId} existingShapes={existingShapes} />
    )
}