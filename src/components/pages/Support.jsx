// src/pages/Support.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CpuChipIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: 'How does the AI trading engine work?',
      a: 'Our Neural Engine analyzes real-time market data, on-chain metrics, and sentiment using advanced machine learning models to generate high-accuracy signals.',
    },
    {
      q: 'Is my funds safe?',
      a: 'Yes. We use cold wallet storage, multi-signature protocols, and industry-leading security. Your funds are never exposed during AI trading.',
    },
    {
      q: 'How do I join a community trade?',
      a: 'Go to the "Join Trade" section, browse live signals from top performers, and tap "JOIN" to automatically copy their position with your chosen leverage.',
    },
    {
      q: 'What are the referral rewards?',
      a: 'Earn up to 20% lifetime commission on your referrals\' trading fees, plus tiered bonuses up to $2000 USDT and VIP AI signals.',
    },
    {
      q: 'How to deposit/withdraw funds?',
      a: 'Navigate to Wallet → Deposit/Withdraw. We support USDT, BTC, ETH and more on multiple networks (ERC20, TRC20, BEP20).',
    },
  ];

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

      {/* Main Content - Perfect centering & FAB safe padding */}
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-3 mb-2">
            <CpuChipIcon className="w-10 h-10 text-cyan-400" />
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Help & Support
            </h1>
          </div>
          <p className="text-sm text-gray-400">We're here to assist you 24/7</p>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {[
            { icon: ChatBubbleLeftRightIcon, title: 'Live Chat', desc: 'Instant support from our AI assistant & team', color: 'from-cyan-500 to-blue-600' },
            { icon: EnvelopeIcon, title: 'Email Support', desc: 'Reply within 1 hour • support@starbiit.com', color: 'from-purple-500 to-pink-600' },
            { icon: DocumentTextIcon, title: 'Knowledge Base', desc: 'Guides, tutorials & FAQ', color: 'from-emerald-500 to-green-600' },
          ].map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/40 shadow-2xl p-6 text-center cursor-pointer"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${option.color} w-fit mx-auto mb-4`}>
                <option.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-sm text-gray-400">{option.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
            <QuestionMarkCircleIcon className="w-8 h-8 text-cyan-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-black/50 rounded-2xl border border-cyan-500/30 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-cyan-500/10 transition"
                >
                  <p className="text-base sm:text-lg font-medium text-white pr-4">{faq.q}</p>
                  {expandedFaq === idx ? (
                    <ChevronUpIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl border-2 border-red-500/40 p-6 text-center"
        >
          <LifebuoyIcon className="w-12 h-12 text-red-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Need Immediate Help?</h3>
          <p className="text-sm text-gray-300 mb-4">
            For urgent issues (withdrawal problems, security concerns)
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-bold shadow-lg hover:shadow-red-500/50"
          >
            Contact Emergency Support
          </motion.button>
        </motion.div>

        {/* Support Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-gray-500"
        >
          <p className="flex items-center justify-center gap-2">
            <SparklesIcon className="w-5 h-5 text-cyan-400" />
            Average response time: <span className="text-cyan-300 font-bold">under 3 minutes</span>
          </p>
          <p className="mt-2">Powered by Neural Support Engine • 24/7 Availability</p>
        </motion.div>
      </div>

      {/* Floating Support Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
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
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}