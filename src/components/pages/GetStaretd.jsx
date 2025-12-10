// src/pages/GetStarted.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      
      {/* Animated Neon Orbs (Robotic/Futuristic Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{
              background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, transparent)' : 'radial-gradient(circle, #ff00ff, transparent)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements (Hexagons for Crypto/Robotic Feel) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute border-2 border-cyan-500 opacity-20"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Glitchy Title Animation */}
        <motion.h1
          className="text-3xl md:text-8xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
           CREDENCEFLUX
          </span>
          <motion.span
            className="block text-cyan-400 text-4xl md:text-6xl mt-4 font-mono"
            animate={{
              textShadow: [
                "0 0 10px #00ffff",
                "0 0 20px #00ffff",
                "0 0 10px #00ffff",
              ],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            // FUTURE OF CRYPTO
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          Enter the next generation of decentralized finance.<br />
          Secure. Fast. Robotic Precision.
        </motion.p>

        {/* Pulsing Get Started Button with Neon Glow */}
        <motion.button
          onClick={handleGetStarted}
          className="relative px-12 py-6 text-xl font-bold tracking-wider uppercase bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-full overflow-hidden group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Launch Now</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute inset-0 shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px #00ffff",
                "0 0 40px #00ffff",
                "0 0 20px #00ffff",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>

        {/* Robotic Scan Line Effect (Subtle) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          animate={{ y: [0, -window.innerHeight] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default GetStarted;