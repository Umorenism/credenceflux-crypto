import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Signup() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4 py-12">
      {/* Subtle animated background particles (optional visual flair) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
      >
        {/* Header with toggle */}
        <div className="flex relative h-16 bg-gray-800/50">
          <motion.div
            animate={{ x: isSignUp ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl shadow-lg"
          />
          <button
            onClick={() => setIsSignUp(true)}
            className="relative z-10 w-1/2 text-center py-4 text-lg font-semibold text-white transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className="relative z-10 w-1/2 text-center py-4 text-lg font-semibold text-white transition"
          >
            Sign In
          </button>
        </div>

        <div className="p-8">
          <motion.h2
            key={isSignUp ? 'signup' : 'signin'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </motion.h2>

          <motion.form
            key={isSignUp ? 'formup' : 'formin'}
            initial={{ opacity: 0, x: isSignUp ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {isSignUp && (
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            )}
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isSignUp ? 0.3 : 0.2 }}
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
            />
            <motion.input
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isSignUp ? 0.4 : 0.3 }}
              type="password"
              placeholder="Password"
              className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/50 transition"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </motion.button>
          </motion.form>

          {/* Optional: Wallet Connect Button for Crypto/Web3 feel */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Or continue with</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium hover:bg-gray-700/50 transition flex items-center justify-center mx-auto gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L12 12L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 22L12 12L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Connect Wallet
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}