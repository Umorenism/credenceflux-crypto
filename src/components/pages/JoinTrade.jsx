// src/pages/JoinTrade.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CpuChipIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  UsersIcon,
  BoltIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/solid';

export default function JoinTrade() {
  const [selectedTrade, setSelectedTrade] = useState(null);

  const communityTrades = [
    { id: 1, leader: 'AlphaTrader_7', pair: 'BTC/USDT', type: 'BUY', leverage: 50, entry: 45230.50, target: 46800.00, stopLoss: 44800.00, accuracy: 98, participants: 127, profitPotential: '+3.5%', timeLeft: '4m 32s' },
    { id: 2, leader: 'NeuralWhale', pair: 'ETH/USDT', type: 'SELL', leverage: 75, entry: 3800.45, target: 3650.00, stopLoss: 3850.00, accuracy: 92, participants: 89, profitPotential: '-4.0%', timeLeft: '7m 15s' },
    { id: 3, leader: 'QuantumBot', pair: 'SOL/USDT', type: 'BUY', leverage: 100, entry: 95.67, target: 105.00, stopLoss: 92.00, accuracy: 99, participants: 203, profitPotential: '+9.8%', timeLeft: '2m 58s' },
    { id: 4, leader: 'CyberSniper', pair: 'AVAX/USDT', type: 'BUY', leverage: 60, entry: 38.20, target: 42.50, stopLoss: 36.80, accuracy: 95, participants: 156, profitPotential: '+11.3%', timeLeft: '9m 41s' },
  ];

  const handleJoin = (trade) => {
    setSelectedTrade(trade);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
      {/* Global overflow fix */}
      <style jsx global>{`
        html, body, #root { overflow-x: hidden; }
      `}</style>

      {/* Animated Robotic Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none -z-10">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none -z-10" />

      {/* Main Content - Perfect centering & safe FAB padding */}
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-32">

        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-3 mb-2">
            <CpuChipIcon className="w-10 h-10 text-cyan-400" />
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Join Trade
            </h1>
          </div>
          <p className="text-sm text-gray-400">Copy top AI-powered community signals</p>
          <div className="mt-3 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <UsersIcon className="w-4 h-4 text-cyan-400" />
              {communityTrades.reduce((sum, t) => sum + t.participants, 0)} Active Participants
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <SparklesIcon className="w-4 h-4 text-yellow-400" />
              Neural Sync Engine
            </span>
          </div>
        </motion.div>

        {/* Live Signal Indicator - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-500/40 shadow-lg">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 bg-emerald-400 rounded-full"
            />
            <span className="text-sm font-medium text-emerald-400">
              LIVE SIGNALS • {communityTrades.length} Open Opportunities
            </span>
          </div>
        </motion.div>

        {/* Community Trade Cards - Mobile-friendly layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <AnimatePresence>
            {communityTrades.map((trade, idx) => (
              <motion.div
                key={trade.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/70 backdrop-blur-2xl rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden"
                whileHover={{ boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)" }}
              >
                {/* Trade Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${trade.type === 'BUY' ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-red-500/20 border border-red-500/40'}`}>
                        {trade.type === 'BUY' ? 
                          <ArrowTrendingUpIcon className="w-8 h-8 text-emerald-400" /> : 
                          <ArrowTrendingDownIcon className="w-8 h-8 text-red-400" />
                        }
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{trade.pair}</h3>
                          <span className="text-sm text-cyan-300">by {trade.leader}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <UsersIcon className="w-4 h-4" />
                            {trade.participants} joined
                          </span>
                          <span className="flex items-center gap-1">
                            <BoltIcon className="w-4 h-4" />
                            {trade.leverage}x
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className={`text-3xl font-bold ${trade.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trade.profitPotential}
                      </p>
                      <p className="text-xs text-gray-500">Potential</p>
                    </div>
                  </div>

                  {/* Trade Details Grid - Responsive */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30 text-center">
                      <p className="text-gray-400 text-xs">Entry</p>
                      <p className="font-bold text-white">${trade.entry.toLocaleString()}</p>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30 text-center">
                      <p className="text-gray-400 text-xs">Target</p>
                      <p className="font-bold text-emerald-400">${trade.target.toLocaleString()}</p>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30 text-center">
                      <p className="text-gray-400 text-xs">Stop Loss</p>
                      <p className="font-bold text-red-400">${trade.stopLoss.toLocaleString()}</p>
                    </div>
                    <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30 text-center">
                      <p className="text-gray-400 text-xs">AI Accuracy</p>
                      <p className="font-bold text-yellow-400">{trade.accuracy}%</p>
                    </div>
                  </div>

                  {/* Timer & Join Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-lg font-bold text-cyan-400"
                      >
                        ⏱ {trade.timeLeft}
                      </motion.div>
                      <span className="text-sm text-gray-500">until execution</span>
                    </div>
                    <motion.button
                      onClick={() => handleJoin(trade)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all ${
                        trade.type === 'BUY'
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:shadow-emerald-500/50'
                          : 'bg-gradient-to-r from-red-500 to-pink-600 hover:shadow-red-500/50'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <SparklesIcon className="w-6 h-6" />
                        JOIN {trade.type}
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Join Confirmation */}
                {selectedTrade?.id === trade.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-cyan-500/30 bg-emerald-500/10 px-6 py-4"
                  >
                    <div className="flex flex-col items-center gap-3 text-emerald-400 text-center">
                      <CheckCircleIcon className="w-10 h-10" />
                      <p className="text-lg font-bold">Successfully Joined {trade.pair} {trade.type} Signal!</p>
                      <p className="text-sm text-gray-300">
                        Position will sync automatically • {trade.leverage}x leverage applied
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Sync Button - Perfectly Centered */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
        animate={{
          boxShadow: [
            "0 0 20px rgba(34,211,238,0.8)",
            "0 0 40px rgba(34,211,238,1)",
            "0 0 20px rgba(34,211,238,0.8)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <UsersIcon className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}