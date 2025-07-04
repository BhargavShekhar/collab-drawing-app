"use client"

import React, { JSX, useEffect, useState } from 'react';
import { Users, Lock, Globe, Palette, Settings, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HTTP_BACKEND } from '@/config';
import { getSession } from 'next-auth/react';
import { Session } from "next-auth";
import { CreateRoomForm } from '@/components/Create-Room/CreateRoomForm';

export interface Room {
    id: string;
    name: string;
    type: 'public' | 'private';
    maxUsers: number;
    canvasSize: 'small' | 'medium' | 'large' | 'unlimited';
    url: string;
    createdAt: string;
}

type RoomType = 'public' | 'private';
type CanvasSize = 'small' | 'medium' | 'large' | 'unlimited';

export default function CreateRoomClient(): JSX.Element {
    const [roomName, setRoomName] = useState<string>('');
    const [roomType, setRoomType] = useState<RoomType>('public');
    const [maxUsers, setMaxUsers] = useState<number>(10);
    const [canvasSize, setCanvasSize] = useState<CanvasSize>('medium');
    const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
    const [createdRoom, setCreatedRoom] = useState<Room | null>(null);
    const [canCreateRoom, setCanCreateRoom] = useState<boolean>(true);

    const router = useRouter();

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
            const sess = await getSession();
            setSession(sess);
        }
        fetchSession();
    }, []);

    const handleCreateRoom = async () => {
        const roomId = "not generated";
        const room: Room = {
            id: roomId,
            name: roomName || `Drawing Room ${roomId}`,
            type: roomType,
            maxUsers,
            canvasSize,
            url: `${window.location.origin}/canvas/${roomName}`,
            createdAt: new Date().toISOString()
        };

        try {
            const token = session?.accessToken;

            const res = await axios.post(
                `${HTTP_BACKEND}/create-room`,
                { slug: roomName },
                { headers: { Authorization: token } }
            );

            if (res.data?.roomId) {
                room.id = res.data.roomId
                setCreatedRoom(room);
            } else {
                throw new Error('No room ID returned');
            }
        } catch (error) {
            console.error('Room creation failed:', error);
            setCreatedRoom(null);
            setCanCreateRoom(false);
        }
    };
    
    if(createdRoom) return (
        <CreateRoomForm createdRoom={createdRoom} setCreatedRoom={setCreatedRoom} />
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Palette className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Drawing Room</h1>
                        <p className="text-gray-600">Set up your collaborative drawing space</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Room Name
                            </label>
                            <input
                                type="text"
                                value={roomName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomName(e.target.value)}
                                placeholder="Enter room name"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Room Privacy
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setRoomType('public')}
                                    className={`p-4 rounded-xl border-2 transition-all ${roomType === 'public'
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <Globe className="w-6 h-6 mx-auto mb-2" />
                                    <div className="font-medium">Public</div>
                                    <div className="text-sm text-gray-500">Anyone can join</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRoomType('private')}
                                    className={`p-4 rounded-xl border-2 transition-all ${roomType === 'private'
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <Lock className="w-6 h-6 mx-auto mb-2" />
                                    <div className="font-medium">Private</div>
                                    <div className="text-sm text-gray-500">Invite only</div>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Maximum Users
                            </label>
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-gray-400" />
                                <input
                                    type="range"
                                    min="2"
                                    max="50"
                                    value={maxUsers}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxUsers(parseInt(e.target.value))}
                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="text-sm font-medium text-gray-700 min-w-8">{maxUsers}</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <Settings className="w-4 h-4" />
                            Advanced Settings
                        </button>

                        {showAdvanced && (
                            <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Canvas Size
                                    </label>
                                    <select
                                        value={canvasSize}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCanvasSize(e.target.value as CanvasSize)}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="small">Small (1920x1080)</option>
                                        <option value="medium">Medium (2560x1440)</option>
                                        <option value="large">Large (3840x2160)</option>
                                        <option value="unlimited">Unlimited</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {!canCreateRoom &&
                            <h1 className='text-red-600 text-center'>Could not create Room!! Try a different Room Name 😄</h1>
                        }

                        {session &&
                            <button
                                type="button"
                                onClick={handleCreateRoom}
                                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                            >
                                Create Room
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        }

                        {!session &&
                            <button
                                type="button"
                                onClick={() => {
                                    router.push("/signin")
                                }}
                                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                            >
                                Signin First
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        }


                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Need help? Check out our{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                                drawing guide
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}