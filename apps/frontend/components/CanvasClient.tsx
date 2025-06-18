"use client"

import { useSocket } from "@/app/hooks/useSocket";
import { useEffect, useRef, useState } from "react";
import { MousePointerClick, Square, Circle, ScanLine, BoxSelect, Undo, Redo } from "lucide-react";
import { ShapeType, toolsInterface, toolType } from "@/draw/types";
import { useWindowSize } from '@react-hook/window-size'
import { CanvasApp } from "@/draw/canvasApp";

export default function CanvasClient({ roomId, existingShapes }: {
    roomId: string,
    existingShapes: ShapeType[]
}) {
    const { loading, socket } = useSocket();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [tool, setTool] = useState<toolType>(toolType.pointer);
    const [width, height] = useWindowSize();
    const [cameraOffset, setCameraOffset] = useState({ x: 0, y: 0 });

    const canvasAppRef = useRef<CanvasApp | null>(null);

    const tools: toolsInterface[] = [
        { id: toolType.pointer, icon: <MousePointerClick /> },
        { id: toolType.rectangle, icon: <Square /> },
        { id: toolType.circle, icon: <Circle /> },
        { id: toolType.line, icon: <ScanLine /> },
        { id: toolType.select, icon: <BoxSelect /> },
        { id: toolType.undo, icon: <Undo /> },
        { id: toolType.redo, icon: <Redo /> }
    ]

    useEffect(() => {
        if (!socket || loading) return;

        socket.send(JSON.stringify({
            type: "join_room",
            roomId
        }))
    }, [socket, roomId])

    useEffect(() => {
        if (canvasRef.current && socket) {
            const canvas = canvasRef.current;
            const app = new CanvasApp(canvas, roomId, existingShapes, socket, tool, cameraOffset, setCameraOffset);
            canvasAppRef.current = app;
            return () => {
                app.cleanup();
                canvasAppRef.current = null;
            }
        }
    }, [canvasRef, loading, socket, roomId, tool, width, height]);

    if (loading || !socket) {
        return (
            <div className="bg-black w-[100vw] h-[100vh] text-white flex justify-center items-center">
                Loading...
            </div>
        )
    }

    return (
        <div className="w-screen h-screen relative">
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="absolute top-0 left-0 w-full h-full"
            >
            </canvas>

            <div className="absolute top-4 left-4 flex flex-col gap-3 bg-white/90 p-2 rounded-xl shadow-xl">
                {
                    tools.map(({ id, icon }) => {
                        const handleClick = () => {
                            if (id === toolType.undo) {
                                canvasAppRef.current?.undo();
                            } else if (id === toolType.redo) {
                                canvasAppRef.current?.redo();
                            } else {
                                setTool(id);
                            }
                        };

                        return (
                            <button
                                key={id}
                                onClick={handleClick}
                                className={`
                                p-2 rounded-lg flex items-center justify-center transition-all duration-300
                                ${tool === id ?
                                        "bg-blue-500 text-white scale-110 shadow-md" :
                                        "bg-white hover:bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {icon}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}