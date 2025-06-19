"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeInOut, Variants } from 'framer-motion';

const SyncDrawLoader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [drawingComplete, setDrawingComplete] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const steps = [
    "Loading syncDraw...",
    "Checking session...",
    "Preparing workspace...",
    "Almost ready!"
  ];

  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1, ease: easeInOut },
        opacity: { duration: 0.2 }
      }
    }
  };

  const toolVariants: Variants = {
    drawing: {
      rotate: [0, -5, 5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  useEffect(() => {
    setHasMounted(true);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % steps.length;
        if (next === 0) setDrawingComplete(prev => !prev);
        return next;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        {/* Grid background like drawing paper */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative text-center">
          {/* Logo with handwritten style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg relative">
              <span className="relative">
                sync
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-blue-400 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
              </span>
              <span className="text-blue-400 relative ml-1">
                Draw
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-blue-400 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 1 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Drawing Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="mb-8 relative"
          >
            {/* Canvas with realistic shadow */}
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg shadow-2xl mx-auto w-80 h-80 relative overflow-hidden">
              {/* Canvas texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

              {/* Drawing area */}
              <svg
                className="absolute inset-4 w-72 h-72"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Drawing strokes that animate in sequence */}
                <motion.path
                  d="M50 150 Q100 100 150 150 Q200 200 250 150"
                  stroke="#60a5fa"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(96, 165, 250, 0.5))' }}
                />

                <motion.path
                  d="M80 100 L220 100 M80 200 L220 200"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 }}
                />

                <motion.circle
                  cx="150"
                  cy="150"
                  r="30"
                  stroke="#1d4ed8"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.2 }}
                />

                {/* Sketch marks */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <path d="M70 70 L90 90 M90 70 L70 90" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                  <path d="M210 210 L230 230 M230 210 L210 230" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                </motion.g>
              </svg>

              {/* Animated drawing tool (pencil) */}
              <motion.div
                className="absolute pointer-events-none"
                animate={{
                  x: [40, 120, 200, 150, 40],
                  y: [140, 90, 140, 140, 140],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
              >
                <motion.div
                  variants={toolVariants}
                  animate="drawing"
                  className="relative"
                >
                  {/* Pencil body */}
                  <div className="w-12 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform -rotate-45 shadow-lg">
                    {/* Pencil tip */}
                    <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-gray-700 rounded-r-full" />
                    {/* Metal band */}
                    <div className="absolute right-2 top-0 w-1 h-full bg-gray-300 rounded-full" />
                    {/* Eraser */}
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                  </div>

                  {/* Drawing particles */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-1 h-1 bg-blue-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Drawing sparkles/particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Tool palette */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-600">
              {['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-6 h-6 ${color} rounded-full mb-2 last:mb-0 shadow-sm`}
                  animate={{
                    scale: currentStep === i ? 1.2 : 1,
                    boxShadow: currentStep === i ? '0 0 8px rgba(59, 130, 246, 0.5)' : '0 1px 3px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Loading text with typewriter effect */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-300 text-xl font-medium mb-6 h-8"
          >
            {steps[currentStep]}
          </motion.div>

          {/* Progress bar styled like a ruler */}
          <div className="w-80 mx-auto">
            <div className="bg-gray-700 rounded-full h-3 overflow-hidden relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Progress indicator marks */}
                <div className="absolute inset-y-0 right-0 w-1 bg-white rounded-full shadow-sm" />
              </motion.div>

              {/* Ruler marks */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 w-px h-full bg-gray-600"
                  style={{ left: `${(i + 1) * 10}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Starting up...</span>
              <span>Ready!</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SyncDrawLoader;