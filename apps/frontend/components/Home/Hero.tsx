import { ArrowRight, Plus, Sparkles } from "lucide-react"
import FeatureIcons from "./FeatureIcons"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

function Hero() {
    const [roomName, setRoomName] = useState('');
    const [session, setSession] = useState<Session | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    const router = useRouter();

    useEffect(() => {
        const fetchSession = async () => {
            const mySesstion = await getSession();
            setSession(mySesstion);
        }
        fetchSession();
    }, []);

    useEffect(() => {
        if (session) setIsSignedIn(true);
        else setIsSignedIn(false);
    }, [session]);

    const handleJoinRoom = () => {
        const url = `${window.location.origin}/canvas/${roomName}`
        router.push(url);
    }

    return (
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm mb-6 border border-blue-500/30">
                    <Sparkles className="w-4 h-4" />
                    Infinite Canvas Collaboration
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                    Draw Together,
                    <br />
                    Create Forever
                </h1>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Experience limitless creativity with real-time collaborative drawing.
                    Connect with friends, brainstorm ideas, and bring your visions to life on an infinite canvas.
                </p>

                <FeatureIcons />

                {/* Action Buttons */}
                {isSignedIn ? (
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-4">
                            <button
                                onClick={() => router.push("/create-room")}
                                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-blue-500/25"
                            >
                                <Plus className="w-5 h-5" />
                                Create Room
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Enter Room Name"
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                    className="px-4 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-l-xl focus:outline-none focus:border-blue-500 text-lg"
                                />
                                <button
                                    onClick={handleJoinRoom}
                                    disabled={!roomName.trim()}
                                    className="px-6 py-4 bg-gray-700/80 backdrop-blur-sm hover:bg-gray-600/80 disabled:bg-gray-800/50 disabled:text-gray-500 rounded-r-xl transition-all duration-300 text-lg font-semibold border border-l-0 border-gray-700/50"
                                >
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-400 mb-6">Sign up to start creating and collaborating</p>
                        <button
                            onClick={() => router.push("/signin")}
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 mx-auto shadow-lg shadow-blue-500/25"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero
