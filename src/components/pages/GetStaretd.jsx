// // src/pages/GetStarted.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const GetStarted = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
//       {/* Futuristic Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      
//       {/* Animated Neon Orbs (Robotic/Futuristic Particles) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
//             style={{
//               background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, transparent)' : 'radial-gradient(circle, #ff00ff, transparent)',
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, 100, -100, 0],
//               y: [0, -100, 100, 0],
//               scale: [1, 1.2, 0.8, 1],
//             }}
//             transition={{
//               duration: 20 + i * 5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating Geometric Elements (Hexagons for Crypto/Robotic Feel) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={`hex-${i}`}
//             className="absolute border-2 border-cyan-500 opacity-20"
//             style={{
//               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//               width: `${50 + Math.random() * 100}px`,
//               height: `${50 + Math.random() * 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               rotate: [0, 360],
//               scale: [0.8, 1.2, 0.8],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: 15 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl">
//         {/* Glitchy Title Animation */}
//         <motion.h1
//           className="text-3xl md:text-8xl font-extrabold tracking-tight mb-6"
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
//            CREDENCEFLUX
//           </span>
//           <motion.span
//             className="block text-cyan-400 text-4xl md:text-6xl mt-4 font-mono"
//             animate={{
//               textShadow: [
//                 "0 0 10px #00ffff",
//                 "0 0 20px #00ffff",
//                 "0 0 10px #00ffff",
//               ],
//               opacity: [0.8, 1, 0.8],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//            FUTURE OF CRYPTO
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="text-xl md:text-2xl mb-12 text-gray-300 font-light tracking-wide"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1.5 }}
//         >
//           Enter the next generation of decentralized finance.<br />
//           Secure. Fast. Robotic Precision.
//         </motion.p>

//         {/* Pulsing Get Started Button with Neon Glow */}
//         <motion.button
//           onClick={handleGetStarted}
//           className="relative px-12 py-6 text-xl font-bold tracking-wider uppercase bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-full overflow-hidden group"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <span className="relative z-10">Get Started</span>
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100"
//             initial={{ x: "-100%" }}
//             whileHover={{ x: "100%" }}
//             transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
//           />
//           <motion.div
//             className="absolute inset-0 shadow-2xl"
//             animate={{
//               boxShadow: [
//                 "0 0 20px #00ffff",
//                 "0 0 40px #00ffff",
//                 "0 0 20px #00ffff",
//               ],
//             }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           />
//         </motion.button>

//         {/* Robotic Scan Line Effect (Subtle) */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
//           animate={{ y: [0, -window.innerHeight] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default GetStarted;







// src/pages/GetStarted.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const cryptoIcons = [
  { name: 'Bitcoin', color: '#f7931a', symbol: '₿' },
  { name: 'Ethereum', color: '#627eea', symbol: 'Ξ' },
  { name: 'Solana', color: '#14f195', symbol: '◈' },
  { name: 'Binance', color: '#f0b90b', symbol: 'BNB' },
  { name: 'Cardano', color: '#0033ad', symbol: 'ADA' },
  { name: 'Polygon', color: '#8247e5', symbol: 'MATIC' },
];

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Enhanced Grid Background with Circuit Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />
      
      {/* Matrix Rain / Falling Code Lines (Robotic Precision) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-cyan-500 to-transparent opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: '200px',
            }}
            animate={{ y: [0, window.innerHeight + 200] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Particle Field Background (Robotic Nano Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 15 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating & Rotating Crypto Coins (Main New Animation) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const coin = cryptoIcons[i % cryptoIcons.length];
          return (
            <motion.div
              key={`coin-${i}`}
              className="absolute text-6xl font-bold flex items-center justify-center"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'drop-shadow(0 0 20px currentColor)',
                color: coin.color,
              }}
              animate={{
                x: [0, 150, -150, 0],
                y: [0, -150, 150, 0],
                rotateY: [0, 360],
                rotateZ: [0, 180],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 25 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
            >
              <span className="relative">
                {coin.symbol}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-50"
                  style={{ backgroundColor: coin.color }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Robotic Geometric Nodes (Circuit Connections) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-4 h-4 bg-cyan-500 rounded-full opacity-40 blur-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Advanced Glitchy Holographic Title */}
        <motion.h1
          className="text-5xl md:text-9xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              CREDENCEFLUX
            </span>
            {/* Glitch Layers */}
            <motion.span
              className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 opacity-70"
              animate={{ x: [-5, 5, 0], y: [-3, 3, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
            >
              CREDENCEFLUX
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 opacity-70"
              animate={{ x: [5, -5, 0], y: [3, -3, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4, delay: 0.1 }}
            >
              CREDENCEFLUX
            </motion.span>
          </span>

          <motion.span
            className="block text-4xl md:text-7xl mt-6 font-mono text-cyan-300"
            animate={{
              textShadow: [
                "0 0 20px #00ffff, 0 0 40px #00ffff",
                "0 0 40px #ff00ff, 0 0 80px #ff00ff",
                "0 0 20px #00ffff, 0 0 40px #00ffff",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            FUTURE OF CRYPTO
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-16 text-gray-200 font-light tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Robotic precision meets decentralized power.<br />
          Secure transactions. Lightning speed. AI-driven flux.
        </motion.p>

        {/* Enhanced Pulsing Neon Button */}
        <motion.button
          onClick={handleGetStarted}
          className="relative px-16 py-3 text-2xl font-bold tracking-widest uppercase bg-transparent border-4 border-cyan-500 text-cyan-300 rounded-2xl overflow-hidden group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Get Started</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                "0 0 30px #00ffff",
                "0 0 60px #ff00ff",
                "0 0 30px #00ffff",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Holographic Scan Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 blur-md"
          animate={{ y: [window.innerHeight, -window.innerHeight] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default GetStarted;