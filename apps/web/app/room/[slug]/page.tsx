import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom } from "../../../components/ChatRoom";

async function getRoomId(slug: string) {
    const responce = await axios.get(`${BACKEND_URL}/room/${slug}`);
    if(!responce.data.room) return null;
    return responce.data.room.id;
}

export default async function Room({
    params
}: {
    params: {
        slug: string
    }
}) {
    const slug = (await params).slug;

    const roomId =  await getRoomId(slug);

    if(!roomId) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>No such room exist, please create one or join a valid one</h1>
            </div>
        )
    }

    return (
        <ChatRoom id={roomId} />
    )
}