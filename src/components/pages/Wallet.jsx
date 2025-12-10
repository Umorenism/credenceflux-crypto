import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WalletIcon, ArrowPathIcon, QrCodeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function Wallet() {
  // Mock wallet data - replace with real wallet connection later
  const [walletAddress] = useState('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');
  const [balance] = useState('12.458');
  const [currency] = useState('ETH');

  const shortenAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    // You can add a toast notification here
    alert('Wallet address copied!');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Animated Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, transparent)' : 'radial-gradient(circle, #ff00ff, transparent)',
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? '10%' : '70%',
            }}
            animate={{
              y: [0, -80, 80, 0],
              x: [0, 60, -60, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Robotic Scan Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{ y: [0, window.innerHeight] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Wallet Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Header Glow Effect */}
          <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-8 text-center">
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px #00ffff",
                  "0 0 40px #00ffff",
                  "0 0 20px #00ffff",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <WalletIcon className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h2 className="text-4xl font-bold tracking-wider">YOUR WALLET</h2>
              <p className="text-cyan-300 font-mono mt-2">// CONNECTED</p>
            </motion.div>
          </div>

          {/* Balance Section */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wider">Total Balance</p>
              <motion.p
                className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  textShadow: [
                    "0 0 10px #00ffff",
                    "0 0 30px #00ffff",
                    "0 0 10px #00ffff",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {balance} {currency}
              </motion.p>
            </motion.div>

            {/* Wallet Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Wallet Address</p>
                  <p className="font-mono text-lg break-all">{shortenAddress(walletAddress)}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={copyToClipboard}
                  className="ml-4 p-3 bg-cyan-500/20 rounded-xl hover:bg-cyan-500/40 transition"
                >
                  <DocumentDuplicateIcon className="w-6 h-6 text-cyan-400" />
                </motion.button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Receive', icon: QrCodeIcon, color: 'from-cyan-500 to-blue-600' },
                { label: 'Send', icon: ArrowPathIcon, color: 'from-purple-500 to-pink-600' },
              ].map((btn, idx) => (
                <motion.button
                  key={btn.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${btn.color} font-bold text-lg shadow-xl overflow-hidden group`}
                >
                  <btn.icon className="w-8 h-8 mx-auto mb-2" />
                  <span>{btn.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-green-400 font-mono">SECURE • SYNCED • ACTIVE</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}