import CanvasClient from "@/components/CanvasClient";
import { HTTP_BACKEND } from "@/config";
import getExistingShapes from "@/draw/canvas-methods/existing-shapes";
import { ShapeType } from "@/draw/types";
import axios from "axios";

async function getRoomId(slug: string) {
    try {
        const res = await axios.get(`${HTTP_BACKEND}/room/${slug}`);
        if (!res.data) {
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
    // const existingShapes: ShapeType[] = await getExistingShapes(roomId);
    const existingShapes: ShapeType[] = [];

    if (!roomId) {
        return (
            <div className="bg-black w-[100vw] h-[100vh] text-white flex justify-center items-center">
                Could not fetch the room-id !! :(
            </div>
        )
    }

    return (
        <CanvasClient roomId={roomId} existingShapes={existingShapes} />
    )
}