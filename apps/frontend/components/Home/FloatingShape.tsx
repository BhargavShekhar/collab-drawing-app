"use client"

import { useEffect, useState } from "react";

export const FloatingShape = ({ delay = 0, duration = 20, size = 40, color = 'blue' }) => {
    const [position, setPosition] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        const generatePosition = () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
        })

        setPosition(generatePosition());

        const interval = setInterval(() => {
            setPosition({
                x: Math.random() * 100,
                y: Math.random() * 100
            });
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [duration]);

    if (!position) return null;

    return (
        <div
            className={`absolute opacity-10 rounded-full blur-sm transition-all duration-[${duration}s] ease-in-out`}
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                background: color === 'blue'
                    ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                    : color === 'purple'
                        ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                        : 'linear-gradient(135deg, #10b981, #059669)'
            }}
        />
    );
};