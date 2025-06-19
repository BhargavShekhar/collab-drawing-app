import { LogIn, Palette, UserPlus } from 'lucide-react'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

function Navigation() {
    const router = useRouter();

    const [session, setSession] = useState<Session | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

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

    return (
        <nav className="relative z-10 flex justify-between items-center p-6 backdrop-blur-sm bg-black/10">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <Palette className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold">SyncDraw</h1>
            </div>

            <div className="flex items-center gap-4">
                {!isSignedIn ? (
                    <>
                        <button
                            onClick={() => router.push("/signin")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50"
                        >
                            <LogIn className="w-4 h-4" />
                            Sign In
                        </button>
                        <button
                            onClick={() => router.push("/signup")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                        >
                            <UserPlus className="w-4 h-4" />
                            Sign Up
                        </button>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg shadow-green-400/25"></div>
                        <span>Welcome back! {session?.user.name}</span>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
