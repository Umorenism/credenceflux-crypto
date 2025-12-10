// src/pages/Referrals.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  UsersIcon,
  GiftIcon,
  ShareIcon,
  TrophyIcon,
  BanknotesIcon,
  QrCodeIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';

export default function Referrals() {
  const [copied, setCopied] = useState(false);

  // Mock referral data
  const referralStats = {
    code: 'VICTOR7X',
    totalReferrals: 48,
    totalEarnings: 2450.00,
    pendingEarnings: 320.00,
    tier: 'Diamond',
  };

  const rewards = [
    { level: 1, referrals: 5, reward: '$100 USDT' },
    { level: 2, referrals: 15, reward: '$300 USDT + 10% Bonus' },
    { level: 3, referrals: 30, reward: '$800 USDT + 15% Lifetime' },
    { level: 4, referrals: 50, reward: '$2000 USDT + VIP Neural Signals' },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralStats.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Starbiit with my referral!',
        text: 'Trade with AI-powered signals and earn rewards!',
        url: `https://starbiit.com/ref/${referralStats.code}`,
      });
    } else {
      handleCopyCode();
    }
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

      {/* Main Content - Perfect centering & safe padding for FAB */}
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
              Referrals
            </h1>
          </div>
          <p className="text-sm text-gray-400">Earn rewards by inviting traders to the neural network</p>
        </motion.div>

        {/* Referral Stats Overview - Responsive grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center">
            <div>
              <UsersIcon className="w-10 h-10 mx-auto text-cyan-400 mb-2" />
              <p className="text-3xl font-bold text-white">{referralStats.totalReferrals}</p>
              <p className="text-sm text-gray-400">Total Referrals</p>
            </div>
            <div>
              <BanknotesIcon className="w-10 h-10 mx-auto text-emerald-400 mb-2" />
              <p className="text-3xl font-bold text-emerald-400">${referralStats.totalEarnings.toFixed(2)}</p>
              <p className="text-sm text-gray-400">Total Earned</p>
            </div>
            <div>
              <GiftIcon className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
              <p className="text-3xl font-bold text-yellow-400">${referralStats.pendingEarnings.toFixed(2)}</p>
              <p className="text-sm text-gray-400">Pending</p>
            </div>
            <div>
              <TrophyIcon className="w-10 h-10 mx-auto text-purple-400 mb-2" />
              <p className="text-3xl font-bold text-purple-400">{referralStats.tier}</p>
              <p className="text-sm text-gray-400">Current Tier</p>
            </div>
          </div>

          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Referral Code Card - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Your Referral Code</h2>
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/40">
            <div className="flex flex-col items-center gap-6">
              <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center break-all px-4">
                {referralStats.code}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <motion.button
                  onClick={handleCopyCode}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-4 bg-cyan-500/20 border border-cyan-500/50 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-500/30 transition"
                >
                  <LinkIcon className="w-6 h-6" />
                  {copied ? 'Copied!' : 'Copy Code'}
                </motion.button>
                <motion.button
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/50"
                >
                  <ShareIcon className="w-6 h-6" />
                  Share Link
                </motion.button>
              </div>
            </div>
          </div>

          {/* QR Code Placeholder - Centered */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-900/80 border-2 border-dashed border-cyan-600/50 rounded-2xl w-48 h-48 flex items-center justify-center">
              <QrCodeIcon className="w-20 h-20 text-cyan-400 opacity-50" />
            </div>
          </div>
        </motion.div>

        {/* Reward Tiers - Mobile-friendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
            <TrophyIcon className="w-8 h-8 text-yellow-400" />
            Reward Tiers
          </h2>
          <div className="space-y-4">
            {rewards.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className={`bg-black/50 rounded-2xl p-5 border ${referralStats.totalReferrals >= tier.referrals ? 'border-yellow-500/50' : 'border-cyan-500/30'} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${referralStats.totalReferrals >= tier.referrals ? 'bg-yellow-500/20' : 'bg-black/60'}`}>
                    <TrophyIcon className={`w-8 h-8 ${referralStats.totalReferrals >= tier.referrals ? 'text-yellow-400' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Level {tier.level}</p>
                    <p className="text-sm text-gray-400">{tier.referrals} Referrals</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-lg font-bold text-emerald-400">{tier.reward}</p>
                  {referralStats.totalReferrals >= tier.referrals && (
                    <p className="text-xs text-yellow-400 mt-1">✓ Unlocked</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-400"
        >
          <p>Invite friends → They trade → You earn up to 20% of their fees + exclusive bonuses</p>
          <p className="mt-2">Powered by Neural Referral Engine</p>
        </motion.div>
      </div>

      {/* Floating Invite Button - Perfectly Centered */}
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
        onClick={handleShare}
      >
        <GiftIcon className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}