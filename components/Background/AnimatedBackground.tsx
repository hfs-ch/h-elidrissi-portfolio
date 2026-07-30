"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#090909] to-[#121212]" />

      {/* Golden Glow Left */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]"
      />

      {/* Golden Glow Right */}
      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[180px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.15, 1, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)]" />
    </div>
  );
}