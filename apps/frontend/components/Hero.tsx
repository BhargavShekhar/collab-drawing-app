import React from 'react';
import { MousePointer, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create beautiful <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">hand-drawn diagrams</span> in seconds
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The simplest way to bring your ideas to life. Collaborative whiteboarding with a natural, hand-drawn feel.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center">
                Start Drawing <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <MousePointer className="h-4 w-4 mr-2" />
              <span>No downloads required, works in your browser</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="h-10 bg-gray-50 flex items-center px-4 border-b border-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <img 
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Drawify Interface Demo" 
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white rounded-lg py-2 px-4 shadow-lg text-sm font-medium transform rotate-3">
                100% Free to Try!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;