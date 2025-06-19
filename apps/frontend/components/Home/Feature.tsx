import { Globe, MousePointer, Infinity } from "lucide-react"

export const Feature = () => {
    return (
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                        <MousePointer className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Intuitive Tools</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Professional drawing tools including selection, shapes, lines, and freehand drawing.
                        Everything you need for creative expression.
                    </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                        <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Global Collaboration</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Connect with anyone, anywhere. See changes in real-time as you and your team
                        create together on the same infinite canvas.
                    </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-green-500/30">
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
    )
}