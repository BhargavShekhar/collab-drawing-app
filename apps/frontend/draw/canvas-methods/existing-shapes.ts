import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { ShapeType } from "../types";

export default async function getExistingShapes(roomId: string) {
    try {
        const res = await axios.get(`${HTTP_BACKEND}/shape/${roomId}`);
        const shapes: ShapeType[] = res.data.shape;
        return shapes;
    } catch (error) {
        console.log("Could not fetch the shapes", error);
        return null;
    }
}