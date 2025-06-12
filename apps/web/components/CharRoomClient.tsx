"use client"

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
    message,
    id
}: {
    message: { message: string }[];
    id: string
}) {
    const [chats, setChats] = useState(message);
    const { socket, loading } = useSocket();
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        if (socket && !loading) {
            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }))

            socket.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);
                if (parsedData.type === "chat") {
                    setChats(chat => [...chat, { message: parsedData.message }]);
                }
            }
        }
    }, [socket, loading, id]);

    return (
        <div>
            {chats.map((m, index) => (
                <div key={index}>
                    {m.message}
                </div>
            ))}
            <input type="text" value={currentMessage} onChange={e => {
                setCurrentMessage(e.target.value);
            }}></input>
            <button onClick={() => {
                socket?.send(JSON.stringify({
                    type: "chat",
                    roomId: id,
                    message: currentMessage
                }));

                setCurrentMessage("");
            }}>Submit</button>
        </div>
    )
}