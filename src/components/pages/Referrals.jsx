// // src/pages/Referrals.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   CpuChipIcon,
//   UsersIcon,
//   GiftIcon,
//   ShareIcon,
//   TrophyIcon,
//   BanknotesIcon,
//   QrCodeIcon,
//   LinkIcon,
// } from '@heroicons/react/24/solid';

// export default function Referrals() {
//   const [copied, setCopied] = useState(false);

//   // Mock referral data
//   const referralStats = {
//     code: 'VICTOR7X',
//     totalReferrals: 48,
//     totalEarnings: 2450.00,
//     pendingEarnings: 320.00,
//     tier: 'Diamond',
//   };

//   const rewards = [
//     { level: 1, referrals: 5, reward: '$100 USDT' },
//     { level: 2, referrals: 15, reward: '$300 USDT + 10% Bonus' },
//     { level: 3, referrals: 30, reward: '$800 USDT + 15% Lifetime' },
//     { level: 4, referrals: 50, reward: '$2000 USDT + VIP Neural Signals' },
//   ];

//   const handleCopyCode = () => {
//     navigator.clipboard.writeText(referralStats.code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Join Starbiit with my referral!',
//         text: 'Trade with AI-powered signals and earn rewards!',
//         url: `https://starbiit.com/ref/${referralStats.code}`,
//       });
//     } else {
//       handleCopyCode();
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
//       {/* Global overflow fix */}
//       <style jsx global>{`
//         html, body, #root { overflow-x: hidden; }
//       `}</style>

//       {/* Animated Robotic Grid Background */}
//       <div className="fixed inset-0 opacity-10 pointer-events-none -z-10">
//         <motion.div
//           animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="w-full h-full"
//           style={{
//             backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* Gradient Overlay */}
//       <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none -z-10" />

//       {/* Main Content - Perfect centering & safe padding for FAB */}
//       <div className="relative z-10 flex flex-col min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-32">

//         {/* Header - Centered */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="text-center"
//         >
//           <div className="flex flex-col items-center gap-3 mb-2">
//             <CpuChipIcon className="w-10 h-10 text-cyan-400" />
//             <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
//               Referrals
//             </h1>
//           </div>
//           <p className="text-sm text-gray-400">Earn rewards by inviting traders to the neural network</p>
//         </motion.div>

//         {/* Referral Stats Overview - Responsive grid */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
//         >
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center">
//             <div>
//               <UsersIcon className="w-10 h-10 mx-auto text-cyan-400 mb-2" />
//               <p className="text-3xl font-bold text-white">{referralStats.totalReferrals}</p>
//               <p className="text-sm text-gray-400">Total Referrals</p>
//             </div>
//             <div>
//               <BanknotesIcon className="w-10 h-10 mx-auto text-emerald-400 mb-2" />
//               <p className="text-3xl font-bold text-emerald-400">${referralStats.totalEarnings.toFixed(2)}</p>
//               <p className="text-sm text-gray-400">Total Earned</p>
//             </div>
//             <div>
//               <GiftIcon className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
//               <p className="text-3xl font-bold text-yellow-400">${referralStats.pendingEarnings.toFixed(2)}</p>
//               <p className="text-sm text-gray-400">Pending</p>
//             </div>
//             <div>
//               <TrophyIcon className="w-10 h-10 mx-auto text-purple-400 mb-2" />
//               <p className="text-3xl font-bold text-purple-400">{referralStats.tier}</p>
//               <p className="text-sm text-gray-400">Current Tier</p>
//             </div>
//           </div>

//           <motion.div
//             className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           />
//         </motion.div>

//         {/* Referral Code Card - Centered */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
//         >
//           <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Your Referral Code</h2>
//           <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/40">
//             <div className="flex flex-col items-center gap-6">
//               <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center break-all px-4">
//                 {referralStats.code}
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
//                 <motion.button
//                   onClick={handleCopyCode}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 px-6 py-4 bg-cyan-500/20 border border-cyan-500/50 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-500/30 transition"
//                 >
//                   <LinkIcon className="w-6 h-6" />
//                   {copied ? 'Copied!' : 'Copy Code'}
//                 </motion.button>
//                 <motion.button
//                   onClick={handleShare}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/50"
//                 >
//                   <ShareIcon className="w-6 h-6" />
//                   Share Link
//                 </motion.button>
//               </div>
//             </div>
//           </div>

//           {/* QR Code Placeholder - Centered */}
//           <div className="mt-8 flex justify-center">
//             <div className="bg-gray-900/80 border-2 border-dashed border-cyan-600/50 rounded-2xl w-48 h-48 flex items-center justify-center">
//               <QrCodeIcon className="w-20 h-20 text-cyan-400 opacity-50" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Reward Tiers - Mobile-friendly */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl p-6 sm:p-8"
//         >
//           <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
//             <TrophyIcon className="w-8 h-8 text-yellow-400" />
//             Reward Tiers
//           </h2>
//           <div className="space-y-4">
//             {rewards.map((tier, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 + idx * 0.1 }}
//                 className={`bg-black/50 rounded-2xl p-5 border ${referralStats.totalReferrals >= tier.referrals ? 'border-yellow-500/50' : 'border-cyan-500/30'} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-xl ${referralStats.totalReferrals >= tier.referrals ? 'bg-yellow-500/20' : 'bg-black/60'}`}>
//                     <TrophyIcon className={`w-8 h-8 ${referralStats.totalReferrals >= tier.referrals ? 'text-yellow-400' : 'text-gray-500'}`} />
//                   </div>
//                   <div>
//                     <p className="text-lg font-bold text-white">Level {tier.level}</p>
//                     <p className="text-sm text-gray-400">{tier.referrals} Referrals</p>
//                   </div>
//                 </div>
//                 <div className="text-center sm:text-right">
//                   <p className="text-lg font-bold text-emerald-400">{tier.reward}</p>
//                   {referralStats.totalReferrals >= tier.referrals && (
//                     <p className="text-xs text-yellow-400 mt-1">✓ Unlocked</p>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* How It Works - Centered */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-center text-sm text-gray-400"
//         >
//           <p>Invite friends → They trade → You earn up to 20% of their fees + exclusive bonuses</p>
//           <p className="mt-2">Powered by Neural Referral Engine</p>
//         </motion.div>
//       </div>

//       {/* Floating Invite Button - Perfectly Centered */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
//         whileHover={{ scale: 1.15 }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
//         animate={{
//           boxShadow: [
//             "0 0 20px rgba(34,211,238,0.8)",
//             "0 0 40px rgba(34,211,238,1)",
//             "0 0 20px rgba(34,211,238,0.8)",
//           ]
//         }}
//         transition={{ duration: 2, repeat: Infinity }}
//         onClick={handleShare}
//       >
//         <GiftIcon className="w-8 h-8 text-white" />
//       </motion.button>
//     </div>
//   );
// }





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
} from '@heroicons/react/24/solid';
import QRCode from 'react-qr-code';
import { userService } from '../../api/userApi'; // adjust path if needed

export default function Referrals() {
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

        // Assuming your backend returns something like this:
        // {
        //   referralCode: "ABC123",
        //   totalReferrals: 7,
        //   totalEarnings: 142.50,
        //   pendingEarnings: 35.00,
        //   tier: "Level 2",
        //   referredUsers: [{ username: "user1", joinedAt: "...", status: "active", earned: 12.5 }, ...]
        // }
        const data = await userService.getReferrals(); // or getReferralStats()

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
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(referralData.link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const tiers = [
    { level: 1, req: 5,   reward: '50 USDT Bonus' },
    { level: 2, req: 15,  reward: '200 USDT + 5% lifetime commission boost' },
    { level: 3, req: 30,  reward: '500 USDT + 10% lifetime commission boost' },
    { level: 4, req: 50,  reward: '1500 USDT + VIP access & priority support' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-orange-400 text-center"
      >
        Referral Program
      </motion.h1>

      {error && (
        <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-900/40 border border-red-700/50 rounded-xl text-red-300 text-center">
          {error}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-orange-900/50 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-center"
        >
          <div>
            <UsersIcon className="w-10 h-10 mx-auto text-orange-500 mb-3" />
            <p className="text-3xl font-bold">{referralData.totalReferrals}</p>
            <p className="text-gray-400 text-sm mt-1">Total Referrals</p>
          </div>
          <div>
            <BanknotesIcon className="w-10 h-10 mx-auto text-orange-500 mb-3" />
            <p className="text-3xl font-bold">{referralData.totalEarnings.toFixed(2)} USDT</p>
            <p className="text-gray-400 text-sm mt-1">Total Earned</p>
          </div>
          <div>
            <GiftIcon className="w-10 h-10 mx-auto text-orange-500 mb-3" />
            <p className="text-3xl font-bold">{referralData.pendingEarnings.toFixed(2)} USDT</p>
            <p className="text-gray-400 text-sm mt-1">Pending</p>
          </div>
          <div>
            <TrophyIcon className="w-10 h-10 mx-auto text-orange-500 mb-3" />
            <p className="text-3xl font-bold">{referralData.tier}</p>
            <p className="text-gray-400 text-sm mt-1">Current Tier</p>
          </div>
        </motion.div>

        {/* Referral Code & Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-orange-900/50"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300 text-center">
            Your Personal Referral
          </h2>

          <div className="text-center mb-6">
            <div className="text-4xl sm:text-5xl font-mono font-bold text-orange-400 tracking-wider break-all">
              {referralData.code}
            </div>
            <p className="text-gray-500 mt-2 text-sm">Share this code or link</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <button
              onClick={copyCode}
              className={`flex-1 py-4 px-6 bg-gray-800 border ${
                copiedCode ? 'border-green-600 text-green-400' : 'border-orange-700 hover:border-orange-500 text-orange-300'
              } rounded-xl font-medium flex items-center justify-center gap-3 transition-all`}
            >
              {copiedCode ? <CheckCircleIcon className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
              {copiedCode ? 'Code Copied!' : 'Copy Code'}
            </button>

            <button
              onClick={copyLink}
              className={`flex-1 py-4 px-6 ${
                copiedLink ? 'bg-green-700' : 'bg-orange-600 hover:bg-orange-500'
              } rounded-xl font-medium flex items-center justify-center gap-3 transition-all text-white`}
            >
              {copiedLink ? <CheckCircleIcon className="w-6 h-6" /> : <ShareIcon className="w-6 h-6" />}
              {copiedLink ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <QRCode
                value={referralData.link}
                size={180}
                level="H"
                fgColor="#f97316" // orange
              />
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Scan to share referral link
          </p>
        </motion.div>

        {/* Referred Users */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-orange-900/50"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300 flex items-center gap-3">
            <UserGroupIcon className="w-7 h-7" />
            Referred Users ({referredUsers.length})
          </h2>

          {referredUsers.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              You haven't referred anyone yet.<br />
              Share your link to start earning!
            </div>
          ) : (
            <div className="space-y-4">
              {referredUsers.map((user, index) => (
                <div
                  key={user.id || index}
                  className="p-4 bg-gray-800/60 rounded-xl border border-orange-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-orange-300">
                      {user.username || user.email || 'Anonymous User'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Joined: {user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : '—'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {user.status === 'active' ? (
                        <span className="text-green-400">Active</span>
                      ) : (
                        <span className="text-gray-500">Pending</span>
                      )}
                    </p>
                    {user.earned > 0 && (
                      <p className="text-sm text-orange-400">You earned: ${user.earned.toFixed(2)}</p>
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
          className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-orange-900/50"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300 text-center">
            Reward Tiers
          </h2>
          <div className="space-y-4">
            {tiers.map((tier) => {
              const isUnlocked = referralData.totalReferrals >= tier.req;
              return (
                <div
                  key={tier.level}
                  className={`p-5 rounded-xl border transition-all ${
                    isUnlocked
                      ? 'border-orange-600 bg-orange-950/20'
                      : 'border-gray-800 bg-gray-800/40'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-orange-300">
                        Level {tier.level} • {tier.req} referrals
                      </h3>
                      <p className="text-gray-300 mt-1">{tier.reward}</p>
                    </div>
                    {isUnlocked && (
                      <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                        <CheckCircleIcon className="w-5 h-5" /> Unlocked
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