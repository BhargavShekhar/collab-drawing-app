import { WS_URL_CLIENT } from "@/config";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket | null>();
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) return;

        const ws = new WebSocket(`${WS_URL_CLIENT}?token=${session?.accessToken}`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [session]);

    return {
        loading,
        socket
    }
}