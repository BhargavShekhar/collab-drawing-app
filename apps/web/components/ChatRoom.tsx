import axios from "axios"
import { BACKEND_URL } from "../app/config"
import { ChatRoomClient } from "./CharRoomClient";

async function getChats(id:string) {
    const responce = await axios.get(`${BACKEND_URL}/chats/${id}`);
    return responce.data.message
}

export async function ChatRoom({id}: {
    id: string
}) {
    const messages = await getChats(id);    
    return (
        <ChatRoomClient id={id} message={messages} />
    )
}