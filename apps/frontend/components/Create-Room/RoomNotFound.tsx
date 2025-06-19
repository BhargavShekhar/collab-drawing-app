"use client"

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Palette, RefreshCw, Users, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RoomNotFoundError({ roomName:propRoomName }: {
    roomName: string
}) {
  const [roomName, setRoomName] = useState(propRoomName || 'unknown-room');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (propRoomName) {
      setRoomName(propRoomName);
    }
  }, [propRoomName]);

  const handleTryAgain = () => {
    setIsLoading(true);
    router.push("/");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Icon */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            variants={iconVariants}
            initial="initial"
            animate="animate"
          >
            <div className="p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-red-500/30">
              <Palette className="w-16 h-16 text-red-400" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Search className="w-4 h-4 text-white m-1" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Room Not Found
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-gray-300 mb-2">
              We couldn't find the drawing room you're looking for
            </p>
            {roomName && (
              <motion.div
                className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-red-300 font-mono text-lg">"{roomName}"</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          variants={itemVariants}
          className="mb-10 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            What might have happened?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">The room may have been deleted or expired</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">You might have mistyped the room name</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">The room link might be outdated</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">Network connectivity issues</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >

          <motion.button
            onClick={handleTryAgain}
            disabled={isLoading}
            className="group flex items-center gap-3 px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 min-w-[180px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            )}
            Try Again
          </motion.button>
        </motion.div>

        {/* Footer hint */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400 text-sm">
            Need help? Check your room link or contact your collaborators
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}