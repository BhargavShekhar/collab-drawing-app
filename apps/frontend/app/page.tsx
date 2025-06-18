"use client"

import React, { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import {
	Users,
	Palette,
	Zap,
	Globe,
	ArrowRight,
	Plus,
	LogIn,
	UserPlus,
	Sparkles,
	Infinity,
	MousePointer,
} from 'lucide-react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
	const [sesstion, setSession] = useState<Session | null>(null);
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [roomCode, setRoomCode] = useState('');
	const [showCreateRoom, setShowCreateRoom] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const fetchSession = async () => {
			const mySesstion = await getSession();
			setSession(mySesstion);
		}
		fetchSession();
	}, []);

	useEffect(() => {
		if (sesstion) setIsSignedIn(true);
		else setIsSignedIn(false);
	}, [sesstion]);

	const handleJoinRoom = () => {

	}

	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden">
			{/* Navigation */}
			<nav className="relative z-10 flex justify-between items-center p-6">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
						<Palette className="w-6 h-6" />
					</div>
					<h1 className="text-2xl font-bold">DrawSync</h1>
				</div>

				<div className="flex items-center gap-4">
					{!isSignedIn ? (
						<>
							<button
								onClick={() => router.push("/signin")}
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
							>
								<LogIn className="w-4 h-4" />
								Sign In
							</button>
							<button
								onClick={() => router.push("/signup")}
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
							>
								<UserPlus className="w-4 h-4" />
								Sign Up
							</button>
						</>
					) : (
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
							<span>Welcome back! {sesstion?.user.name}</span>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
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

					{/* Feature Icons */}
					<div className="flex justify-center gap-8 mb-16">
						<div className="flex flex-col items-center gap-2">
							<div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
								<Infinity className="w-8 h-8 text-blue-400" />
							</div>
							<span className="text-sm text-gray-400">Infinite Canvas</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
								<Users className="w-8 h-8 text-purple-400" />
							</div>
							<span className="text-sm text-gray-400">Real-time Collaboration</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
								<Zap className="w-8 h-8 text-green-400" />
							</div>
							<span className="text-sm text-gray-400">Lightning Fast</span>
						</div>
					</div>

					{/* Action Buttons */}
					{isSignedIn ? (
						<div className="flex flex-col items-center gap-6">
							<div className="flex gap-4">
								<button
									onClick={() => router.push("/create-room")}
									className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105"
								>
									<Plus className="w-5 h-5" />
									Create Room
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>

								<div className="flex">
									<input
										type="text"
										placeholder="Enter room code"
										value={roomCode}
										onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
										className="px-4 py-4 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:border-blue-500 text-lg"
										maxLength={6}
									/>
									<button
										onClick={handleJoinRoom}
										disabled={!roomCode.trim()}
										className="px-6 py-4 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 rounded-r-xl transition-colors text-lg font-semibold"
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
								className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 mx-auto"
							>
								Get Started Free
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Features Section */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
						<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
							<MousePointer className="w-6 h-6 text-blue-400" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Intuitive Tools</h3>
						<p className="text-gray-400 leading-relaxed">
							Professional drawing tools including selection, shapes, lines, and freehand drawing.
							Everything you need for creative expression.
						</p>
					</div>

					<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
						<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
							<Globe className="w-6 h-6 text-purple-400" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Global Collaboration</h3>
						<p className="text-gray-400 leading-relaxed">
							Connect with anyone, anywhere. See changes in real-time as you and your team
							create together on the same infinite canvas.
						</p>
					</div>

					<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
						<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
							<Infinity className="w-6 h-6 text-green-400" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Limitless Space</h3>
						<p className="text-gray-400 leading-relaxed">
							Never run out of space. Our infinite canvas grows with your creativity,
							perfect for mind maps, diagrams, and large-scale projects.
						</p>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="relative z-10 border-t border-gray-800 py-8">
				<div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
					<p>&copy; 2025 DrawSync. Made for creators, by creators.</p>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;