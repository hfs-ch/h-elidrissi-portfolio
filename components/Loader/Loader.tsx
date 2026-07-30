"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-52 w-52 rounded-full border border-yellow-400/30 border-t-yellow-400"
      />

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative flex flex-col items-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-7xl font-black tracking-widest text-white"
        >
          H
          <span className="text-yellow-400">E</span>
          I
        </motion.h1>

        <p className="mt-5 text-lg tracking-[0.4em] text-gray-400 uppercase">
          Hafsa El Idrissi
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Loading Portfolio...
        </p>

        {/* Progress Bar */}
        <div className="mt-10 h-[4px] w-64 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-24 rounded-full bg-yellow-400"
          />

        </div>
      </motion.div>
    </div>
  );
}