"use client"

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

export const ParticleField = ({ count = 50 }) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 15 + Math.random() * 10
        }));
        setParticles(newParticles);
    }, [count])

    if(particles.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />
            ))}
        </div>
    );
};