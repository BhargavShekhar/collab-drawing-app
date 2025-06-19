import { Users, Zap, Infinity } from 'lucide-react'
import React from 'react'

function FeatureIcons() {
    return (
            <div className="flex justify-center gap-8 mb-16">
                <div className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 transition-all duration-300">
                        <Infinity className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">Infinite Canvas</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-500/30 transition-all duration-300">
                        <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-400">Real-time Collaboration</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 transition-all duration-300">
                        <Zap className="w-8 h-8 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400">Lightning Fast</span>
                </div>
        </div>
    )
}

export default FeatureIcons
