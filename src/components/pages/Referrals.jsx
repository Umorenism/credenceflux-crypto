// src/pages/Referrals.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  GiftIcon,
  ShareIcon,
  TrophyIcon,
  BanknotesIcon,
  LinkIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';
import QRCode from 'react-qr-code';
import { userService } from '../../api/userApi';
import { useTheme } from '../ui/ThemeContext'; // adjust path if needed

export default function Referrals() {
  const { theme, toggleTheme } = useTheme();

  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [referralData, setReferralData] = useState({
    code: '',
    link: '',
    totalReferrals: 0,
    totalEarnings: 0,
    pendingEarnings: 0,
    tier: 'Beginner',
  });
  const [referredUsers, setReferredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReferralData = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await userService.getReferrals();

        const baseUrl = window.location.origin;
        const referralLink = `${baseUrl}/ref/${data.referralCode || 'XXXXXX'}`;

        setReferralData({
          code: data.referralCode || 'XXXXXX',
          link: referralLink,
          totalReferrals: data.totalReferrals || 0,
          totalEarnings: data.totalEarnings || 0,
          pendingEarnings: data.pendingEarnings || 0,
          tier: data.tier || 'Beginner',
        });

        setReferredUsers(data.referredUsers || []);
      } catch (err) {
        console.error('Failed to load referral data:', err);
        setError('Could not load referral information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReferralData();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(referralData.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(referralData.link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const tiers = [
    { level: 1, req: 5,   reward: '50 USDT Bonus' },
    { level: 2, req: 15,  reward: '200 USDT + 5% lifetime commission boost' },
    { level: 3, req: 30,  reward: '500 USDT + 10% lifetime commission boost' },
    { level: 4, req: 50,  reward: '1500 USDT + VIP access & priority support' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-orange-500 dark:border-orange-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md dark:shadow-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-orange-600 dark:text-orange-400 text-center"
      >
        Referral Program
      </motion.h1>

      {error && (
        <div className="max-w-3xl mx-auto mb-8 p-5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-2xl text-red-700 dark:text-red-300 text-center shadow-sm">
          {error}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-10 lg:space-y-12">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md dark:shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-center transition-all"
        >
          <div>
            <UsersIcon className="w-10 h-10 mx-auto text-orange-600 dark:text-orange-500 mb-3" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{referralData.totalReferrals}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Total Referrals</p>
          </div>
          <div>
            <BanknotesIcon className="w-10 h-10 mx-auto text-orange-600 dark:text-orange-500 mb-3" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{referralData.totalEarnings.toFixed(2)} USDT</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Total Earned</p>
          </div>
          <div>
            <GiftIcon className="w-10 h-10 mx-auto text-orange-600 dark:text-orange-500 mb-3" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{referralData.pendingEarnings.toFixed(2)} USDT</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Pending</p>
          </div>
          <div>
            <TrophyIcon className="w-10 h-10 mx-auto text-orange-600 dark:text-orange-500 mb-3" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{referralData.tier}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Current Tier</p>
          </div>
        </motion.div>

        {/* Referral Code & Link Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md dark:shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-7 text-orange-600 dark:text-orange-300 text-center">
            Your Personal Referral
          </h2>

          <div className="text-center mb-8">
            <div className="text-4xl sm:text-5xl font-mono font-bold text-orange-600 dark:text-orange-400 tracking-wider break-all">
              {referralData.code}
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Share this code or link with friends
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-10">
            <button
              onClick={copyCode}
              className={`flex-1 py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-3 transition-all border shadow-sm ${
                copiedCode
                  ? 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-300 bg-green-50 dark:bg-green-950/30'
                  : 'border-gray-300 dark:border-gray-700 hover:border-orange-400 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {copiedCode ? (
                <ClipboardDocumentCheckIcon className="w-6 h-6" />
              ) : (
                <ClipboardDocumentIcon className="w-6 h-6" />
              )}
              {copiedCode ? 'Code Copied!' : 'Copy Code'}
            </button>

            <button
              onClick={copyLink}
              className={`flex-1 py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-3 transition-all shadow-sm ${
                copiedLink
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-orange-600 hover:bg-orange-700 text-white'
              }`}
            >
              {copiedLink ? (
                <ClipboardDocumentCheckIcon className="w-6 h-6" />
              ) : (
                <ShareIcon className="w-6 h-6" />
              )}
              {copiedLink ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-white p-5 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-300">
              <QRCode
                value={referralData.link}
                size={200}
                level="H"
                fgColor="#ea580c" // orange-600
                bgColor="#ffffff"
              />
            </div>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-5">
            Scan to share your referral link instantly
          </p>
        </motion.div>

        {/* Referred Users List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md dark:shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-7 text-orange-600 dark:text-orange-300 flex items-center gap-3">
            <UserGroupIcon className="w-8 h-8" />
            Referred Users ({referredUsers.length})
          </h2>

          {referredUsers.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <UsersIcon className="w-12 h-12 mx-auto mb-4 opacity-60" />
              <p className="text-lg font-medium">No referrals yet</p>
              <p className="mt-2">Share your link to start earning rewards!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {referredUsers.map((user, index) => (
                <div
                  key={user.id || index}
                  className="p-5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-gray-100 dark:hover:bg-gray-700/60"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {user.username || user.email || 'Anonymous User'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Joined: {user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : '—'}
                    </p>
                  </div>
                  <div className="text-right sm:min-w-[160px]">
                    <p className="text-sm font-medium">
                      {user.status === 'active' ? (
                        <span className="text-emerald-600 dark:text-emerald-400">Active</span>
                      ) : (
                        <span className="text-gray-500">Pending</span>
                      )}
                    </p>
                    {user.earned > 0 && (
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-1">
                        You earned: ${user.earned.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Reward Tiers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md dark:shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-7 text-orange-600 dark:text-orange-300 text-center">
            Reward Tiers
          </h2>

          <div className="space-y-4">
            {tiers.map((tier) => {
              const isUnlocked = referralData.totalReferrals >= tier.req;
              return (
                <div
                  key={tier.level}
                  className={`p-5 sm:p-6 rounded-xl border transition-all ${
                    isUnlocked
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-600/60'
                      : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400">
                        Level {tier.level} • {tier.req} referrals
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1.5">{tier.reward}</p>
                    </div>
                    {isUnlocked && (
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800/40">
                        <CheckCircleIcon className="w-5 h-5" />
                        Unlocked
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}