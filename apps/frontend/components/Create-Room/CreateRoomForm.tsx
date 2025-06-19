import { Room } from "@/app/create-room/page";
import { ArrowRight, Copy, Palette, Share2 } from "lucide-react";

export function CreateRoomForm({ createdRoom, setCreatedRoom }: {
    createdRoom: Room
    setCreatedRoom: (value: Room | null) => void
}) {
    const copyToClipboard = async (text: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Palette className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Room Created Successfully!</h1>
                        <p className="text-gray-600">Your collaborative drawing room is ready</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Room Name</label>
                                    <p className="text-lg font-semibold text-gray-800">{createdRoom.name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Room ID</label>
                                    <p className="text-lg font-mono font-semibold text-gray-800">{createdRoom.id}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Privacy</label>
                                    <p className="text-lg font-semibold text-gray-800 capitalize">{createdRoom.type}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Max Users</label>
                                    <p className="text-lg font-semibold text-gray-800">{createdRoom.maxUsers}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Share Room</h3>
                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={createdRoom.url}
                                    readOnly
                                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={() => copyToClipboard(createdRoom.url)}
                                    className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors flex items-center gap-2"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copy
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share Link
                                </button>
                                <button
                                    onClick={() => {
                                        window.open(createdRoom.url, '_blank');
                                    }}
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    Join Room
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setCreatedRoom(null)}
                        className="w-full mt-6 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        Create Another Room
                    </button>
                </div>
            </div>
        </div>
    )
}