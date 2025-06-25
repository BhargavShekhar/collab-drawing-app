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
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    const drawingTools: toolsInterface[] = [
        { id: toolType.pointer, icon: <MousePointerClick className="w-5 h-5" />, label: "Select" },
        { id: toolType.rectangle, icon: <Square className="w-5 h-5" />, label: "Rectangle" },
        { id: toolType.circle, icon: <Circle className="w-5 h-5" />, label: "Circle" },
        { id: toolType.line, icon: <ScanLine className="w-5 h-5" />, label: "Line" },
        { id: toolType.select, icon: <BoxSelect className="w-5 h-5" />, label: "Box Select" }
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

            const onHistoryChange = (canUndo: boolean, canRedo: boolean) => {
                setCanUndo(canUndo);
                setCanRedo(canRedo);
            };

            if (canvasAppRef.current) {
                canvasAppRef.current.setTool(tool);
            }

            const app = new CanvasApp(
                canvas,
                roomId,
                existingShapes,
                socket,
                tool,
                cameraOffset,
                setCameraOffset,
                onHistoryChange
            );
            canvasAppRef.current = app;

            setCanUndo(app.canUndo?.() ?? false);
            setCanRedo(app.canRedo?.() ?? false);

            return () => {
                app.cleanup();
                canvasAppRef.current = null;
            }
        }
    }, [canvasRef, loading, socket, roomId, width, height, tool]);

    const handleUndo = () => {
        console.log("Before Undo", existingShapes);
        canvasAppRef.current?.undo();
        console.log("After Undo", existingShapes);
    };

    const handleRedo = () => {
        canvasAppRef.current?.redo();
    };

    if (loading || !socket) {
        return (
            <div className="bg-black w-screen h-screen text-white flex justify-center items-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    <p className="text-lg">Connecting to room...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen relative bg-black">
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="absolute inset-0 cursor-crosshair"
                style={{
                    background: 'black',
                    imageRendering: 'pixelated'
                }}
            />

            {/* Toolbar */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
                {/* Drawing Tools */}
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl p-3 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {drawingTools.map(({ id, icon, label }) => (
                            <button
                                key={id}
                                onClick={() => setTool(id)}
                                title={label}
                                className={`
                                    group relative p-3 rounded-lg transition-all duration-200 ease-out
                                    ${tool === id
                                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                                        : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white hover:scale-105"
                                    }
                                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                                `}
                            >
                                {icon}

                                {/* Tooltip */}
                                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 
                                              bg-gray-900 text-white text-sm px-2 py-1 rounded-md
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                              pointer-events-none whitespace-nowrap z-50">
                                    {label}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* History Controls */}
                <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl p-3 shadow-2xl">
                    <div className="flex gap-2">
                        <button
                            onClick={handleUndo}
                            disabled={!canUndo}
                            title="Undo"
                            className={`
                                group relative p-3 rounded-lg transition-all duration-200 ease-out
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                                ${canUndo
                                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white hover:scale-105"
                                    : "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                                }
                            `}
                        >
                            <Undo className="w-5 h-5" />

                            {/* Tooltip */}
                            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 
                                          bg-gray-900 text-white text-sm px-2 py-1 rounded-md
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                          pointer-events-none whitespace-nowrap z-50">
                                Undo
                            </div>
                        </button>

                        <button
                            onClick={handleRedo}
                            disabled={!canRedo}
                            title="Redo"
                            className={`
                                group relative p-3 rounded-lg transition-all duration-200 ease-out
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                                ${canRedo
                                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white hover:scale-105"
                                    : "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                                }
                            `}
                        >
                            <Redo className="w-5 h-5" />

                            {/* Tooltip */}
                            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 
                                          bg-gray-900 text-white text-sm px-2 py-1 rounded-md
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                          pointer-events-none whitespace-nowrap z-50">
                                Redo
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Room Info */}
            <div className="absolute top-6 right-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700 
                          rounded-xl px-4 py-2 text-white text-sm shadow-2xl">
                <span className="text-gray-400">Room:</span>
                <span className="font-mono ml-1">{roomId}</span>
            </div>

            {/* Status Bar */}
            <div className="absolute bottom-6 left-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700 
                          rounded-xl px-4 py-2 text-white text-sm shadow-2xl">
                <span className="text-gray-400">Tool:</span>
                <span className="ml-1 capitalize">{drawingTools.find(t => t.id === tool)?.label || 'Unknown'}</span>
            </div>
        </div>
    )
}