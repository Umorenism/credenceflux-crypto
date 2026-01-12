// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { WalletIcon, ArrowPathIcon, QrCodeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

// // export default function Wallet() {
// //   // Mock wallet data - replace with real wallet connection later
// //   const [walletAddress] = useState('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');
// //   const [balance] = useState('12.458');
// //   const [currency] = useState('ETH');

// //   const shortenAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(walletAddress);
// //     // You can add a toast notification here
// //     alert('Wallet address copied!');
// //   };

// //   return (
// //     <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">
// //       {/* Futuristic Grid Background */}
// //       <div className="absolute inset-0 opacity-30">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:50px_50px]" />
// //       </div>

// //       {/* Animated Neon Orbs */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         {[...Array(5)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
// //             style={{
// //               background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, transparent)' : 'radial-gradient(circle, #ff00ff, transparent)',
// //               top: `${20 + i * 15}%`,
// //               left: i % 2 === 0 ? '10%' : '70%',
// //             }}
// //             animate={{
// //               y: [0, -80, 80, 0],
// //               x: [0, 60, -60, 0],
// //               scale: [1, 1.3, 0.9, 1],
// //             }}
// //             transition={{
// //               duration: 18 + i * 3,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         ))}
// //       </div>

// //       {/* Robotic Scan Line */}
// //       <motion.div
// //         className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
// //         animate={{ y: [0, window.innerHeight] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// //       />

// //       {/* Main Wallet Card */}
// //       <motion.div
// //         initial={{ scale: 0.8, opacity: 0, y: 100 }}
// //         animate={{ scale: 1, opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //         className="relative z-10 w-full max-w-5xl"
// //       >
// //         <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden">
// //           {/* Header Glow Effect */}
// //           <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-8 text-center">
// //             <motion.div
// //               animate={{
// //                 textShadow: [
// //                   "0 0 20px #00ffff",
// //                   "0 0 40px #00ffff",
// //                   "0 0 20px #00ffff",
// //                 ],
// //               }}
// //               transition={{ duration: 2, repeat: Infinity }}
// //             >
// //               <WalletIcon className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
// //               <h2 className="text-4xl font-bold tracking-wider">YOUR WALLET</h2>
// //               <p className="text-cyan-300 font-mono mt-2">// CONNECTED</p>
// //             </motion.div>
// //           </div>

// //           {/* Balance Section */}
// //           <div className="p-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 }}
// //               className="text-center mb-8"
// //             >
// //               <p className="text-gray-400 text-sm uppercase tracking-wider">Total Balance</p>
// //               <motion.p
// //                 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
// //                 animate={{
// //                   textShadow: [
// //                     "0 0 10px #00ffff",
// //                     "0 0 30px #00ffff",
// //                     "0 0 10px #00ffff",
// //                   ],
// //                 }}
// //                 transition={{ duration: 3, repeat: Infinity }}
// //               >
// //                 {balance} {currency}
// //               </motion.p>
// //             </motion.div>

// //             {/* Wallet Address */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6 }}
// //               className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-8"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-gray-400 text-sm">Wallet Address</p>
// //                   <p className="font-mono text-lg break-all">{shortenAddress(walletAddress)}</p>
// //                 </div>
// //                 <motion.button
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.9 }}
// //                   onClick={copyToClipboard}
// //                   className="ml-4 p-3 bg-cyan-500/20 rounded-xl hover:bg-cyan-500/40 transition"
// //                 >
// //                   <DocumentDuplicateIcon className="w-6 h-6 text-cyan-400" />
// //                 </motion.button>
// //               </div>
// //             </motion.div>

// //             {/* Action Buttons */}
// //             <div className="grid grid-cols-2 gap-4">
// //               {[
// //                 { label: 'Receive', icon: QrCodeIcon, color: 'from-cyan-500 to-blue-600' },
// //                 { label: 'Send', icon: ArrowPathIcon, color: 'from-purple-500 to-pink-600' },
// //               ].map((btn, idx) => (
// //                 <motion.button
// //                   key={btn.label}
// //                   initial={{ opacity: 0, y: 30 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.8 + idx * 0.1 }}
// //                   whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className={`relative p-6 rounded-2xl bg-gradient-to-br ${btn.color} font-bold text-lg shadow-xl overflow-hidden group`}
// //                 >
// //                   <btn.icon className="w-8 h-8 mx-auto mb-2" />
// //                   <span>{btn.label}</span>
// //                   <motion.div
// //                     className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
// //                     initial={{ x: "-100%" }}
// //                     whileHover={{ x: "100%" }}
// //                     transition={{ duration: 0.6 }}
// //                   />
// //                 </motion.button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Status Indicator */}
// //         <motion.div
// //           className="text-center mt-6"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1.2 }}
// //         >
// //           <motion.div
// //             className="inline-flex items-center gap-2"
// //             animate={{ opacity: [1, 0.5, 1] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             <div className="w-3 h-3 bg-green-400 rounded-full" />
// //             <span className="text-green-400 font-mono">SECURE • SYNCED • ACTIVE</span>
// //           </motion.div>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // }




// // src/pages/Wallet.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   WalletIcon, 
//   ArrowPathIcon, 
//   QrCodeIcon, 
//   DocumentDuplicateIcon,
//   CpuChipIcon,
//   SparklesIcon,
//   ShieldCheckIcon
// } from '@heroicons/react/24/solid';

// export default function Wallet() {
//   const [walletAddress] = useState('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');
//   const [balance] = useState('12.458');
//   const [currency] = useState('ETH');
//   const [copied, setCopied] = useState(false);

//   const shortenAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">
//       {/* Enhanced Animated Grid Background */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <motion.div
//           animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="w-full h-full"
//           style={{
//             backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* Floating Crypto Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-cyan-400 opacity-30"
//             initial={{ 
//               x: Math.random() * window.innerWidth,
//               y: -50,
//             }}
//             animate={{
//               y: window.innerHeight + 50,
//               x: Math.random() * window.innerWidth,
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//           >
//             <CpuChipIcon className="w-8 h-8" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Double Scanning Lines (Robotic HUD Effect) */}
//       <motion.div
//         className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 blur-sm"
//         animate={{ y: [0, window.innerHeight] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 blur-sm"
//         animate={{ y: [0, window.innerHeight] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
//       />

//       {/* Pulsing Neon Orbs */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-96 h-96 rounded-full blur-3xl"
//             style={{
//               background: i % 2 === 0 
//                 ? 'radial-gradient(circle, #00ffff, transparent)' 
//                 : 'radial-gradient(circle, #ff00ff, transparent)',
//               top: `${10 + i * 15}%`,
//               left: i % 2 === 0 ? '-10%' : '70%',
//             }}
//             animate={{
//               scale: [1, 1.4, 1],
//               opacity: [0.15, 0.3, 0.15],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Wallet Card - Enhanced Robotic Design */}
//       <motion.div
//         initial={{ scale: 0.7, opacity: 0, rotateY: -180 }}
//         animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//         transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
//         className="relative z-10 w-full max-w-4xl"
//       >
//         <div className="relative bg-gray-900/90 backdrop-blur-3xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
//           {/* Holographic Header */}
//           <div className="relative bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-black p-10 text-center overflow-hidden">
//             <motion.div
//               className="absolute inset-0 opacity-30"
//               animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//               transition={{ duration: 20, repeat: Infinity }}
//               style={{
//                 backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,255,255,0.05) 35px, rgba(0,255,255,0.05) 70px)",
//               }}
//             />
//             <motion.div
//               animate={{
//                 textShadow: [
//                   "0 0 30px #00ffff, 0 0 60px #00ffff",
//                   "0 0 50px #ff00ff, 0 0 100px #ff00ff",
//                   "0 0 30px #00ffff, 0 0 60px #00ffff",
//                 ],
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="relative z-10"
//             >
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="inline-block"
//               >
//                 <WalletIcon className="w-20 h-20 mx-auto mb-4 text-cyan-400" />
//               </motion.div>
//               <h2 className="text-5xl font-extrabold tracking-widest">NEURAL WALLET</h2>
//               <div className="flex items-center justify-center gap-3 mt-4">
//                 <ShieldCheckIcon className="w-8 h-8 text-emerald-400" />
//                 <p className="text-emerald-400 font-mono text-lg">// QUANTUM SECURED • SYNCED</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Balance Section - Crypto Glow */}
//           <div className="p-10">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="text-center mb-10"
//             >
//               <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">TOTAL BALANCE</p>
//               <motion.div
//                 className="relative inline-block"
//                 animate={{
//                   textShadow: [
//                     "0 0 20px #00ffff, 0 0 40px #00ffff",
//                     "0 0 40px #ff00ff, 0 0 80px #ff00ff",
//                     "0 0 20px #00ffff, 0 0 40px #00ffff",
//                   ],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <p className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
//                   {balance}
//                 </p>
//                 <motion.p
//                   className="text-4xl font-bold text-cyan-300 mt-2"
//                   animate={{ opacity: [0.7, 1, 0.7] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   {currency}
//                 </motion.p>
//               </motion.div>
//             </motion.div>

//             {/* Wallet Address - High-Tech */}
//             <motion.div
//               initial={{ opacity: 0, scaleX: 0 }}
//               animate={{ opacity: 1, scaleX: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 mb-10 shadow-lg"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex-1">
//                   <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Connected Address</p>
//                   <motion.p 
//                     className="font-mono text-lg text-cyan-300 break-all"
//                     animate={{ opacity: [0.8, 1, 0.8] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     {shortenAddress(walletAddress)}
//                   </motion.p>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={copyToClipboard}
//                   className="ml-6 p-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl shadow-lg"
//                 >
//                   {copied ? (
//                     <CheckCircleIcon className="w-7 h-7 text-emerald-400" />
//                   ) : (
//                     <DocumentDuplicateIcon className="w-7 h-7 text-white" />
//                   )}
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Action Buttons - Enhanced */}
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { label: 'RECEIVE', icon: QrCodeIcon, color: 'from-cyan-500 to-blue-600', glow: 'cyan' },
//                 { label: 'SEND', icon: ArrowPathIcon, color: 'from-purple-500 to-pink-600', glow: 'purple' },
//               ].map((btn, idx) => (
//                 <motion.button
//                   key={btn.label}
//                   initial={{ opacity: 0, y: 50, rotateX: -90 }}
//                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                   transition={{ delay: 1 + idx * 0.2, type: "spring", stiffness: 100 }}
//                   whileHover={{ 
//                     scale: 1.08, 
//                     boxShadow: `0 0 50px rgba(${btn.glow === 'cyan' ? '0,255,255' : '255,0,255'}, 0.6)`
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative p-3 rounded-3xl bg-gradient-to-br ${btn.color} font-extrabold text-2xl shadow-2xl overflow-hidden group`}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
//                     animate={{ x: ["-100%", "100%"] }}
//                     transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
//                   />
//                   <btn.icon className="w-5 h-5 mx-auto mb-3 sm:h-10 sm:w-10" />
//                   <span className="relative z-10 text-sm">{btn.label}</span>
//                   <motion.div
//                     className="absolute -inset-2 bg-white opacity-0 blur-xl"
//                     animate={{ opacity: [0, 0.3, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* AI Status Indicator */}
//           <motion.div
//             className="text-center py-6 border-t border-cyan-500/30 bg-black/40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4 }}
//           >
//             <motion.div
//               className="inline-flex items-center gap-4"
//               animate={{ opacity: [1, 0.6, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <SparklesIcon className="w-6 h-6 text-yellow-400" />
//               <span className="text-yellow-400 font-mono text-lg">
//                 NEURAL AI ENGINE • QUANTUM ENCRYPTED • REAL-TIME SYNC
//               </span>
//               <SparklesIcon className="w-6 h-6 text-yellow-400" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WalletIcon,
  QrCodeIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XMarkIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
import QRCode from 'react-qr-code';

import {
  createDeposit,
  getDepositHistory,
  checkDepositStatus,
} from '../../api/depositapi';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [depositLoading, setDepositLoading] = useState(false);
  const [depositResult, setDepositResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      setHistoryLoading(true);
      const res = await getDepositHistory();
      setHistory(res.data || []);
    } catch (err) {
      console.error(err);
      setHistory([]);
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleCreateDeposit = async (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount greater than 0');
      return;
    }

    setError('');
    setMessage('');
    setDepositLoading(true);

    try {
      const res = await createDeposit(numAmount);
      const data = res.data;

      setDepositResult(data);
      setMessage('Deposit request created! Please send funds now.');
      setAmount('');

      loadHistory();

      if (data?.paymentId) {
        startPolling(data.paymentId);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to create deposit request.';
      setError(msg);
    } finally {
      setDepositLoading(false);
    }
  };

  const startPolling = (paymentId) => {
    setPolling(true);
    const interval = setInterval(async () => {
      try {
        const res = await checkDepositStatus(paymentId);
        const status = res.data?.status;

        setDepositResult((prev) => ({ ...prev, status }));

        if (status === 'completed' || status === 'confirmed') {
          clearInterval(interval);
          setPolling(false);
          setMessage('Deposit confirmed! Balance updated.');
          loadHistory();
        }
      } catch (err) {
        console.warn('Polling error', err);
      }
    }, 8000);

    return () => clearInterval(interval);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const shorten = (str) => (str ? `${str.slice(0, 8)}...${str.slice(-6)}` : '');

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative">
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Create Deposit Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 backdrop-blur-xl rounded-3xl border border-orange-600/30 p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <WalletIcon className="w-16 h-16 mx-auto text-orange-400 mb-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Deposit Funds
            </h1>
            <p className="text-gray-400 mt-2">USDT (BSC)</p>
          </div>

          <form onSubmit={handleCreateDeposit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-orange-300/90 mb-2">
                Amount (USDT)
              </label>
              <input
                type="number"
                step="0.01"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10.00"
                className="w-full px-5 py-4 bg-slate-900 border border-orange-700/40 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                disabled={depositLoading}
                required
              />
            </div>

            <button
              type="submit"
              disabled={depositLoading || !amount || parseFloat(amount) <= 0}
              className={`w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] shadow-lg ${
                depositLoading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {depositLoading ? 'Creating...' : 'Create Deposit Request'}
            </button>
          </form>

          {error && <p className="mt-4 text-red-400 text-center font-medium">{error}</p>}
          {message && <p className="mt-4 text-orange-300 text-center font-medium">{message}</p>}

          {/* Payment Instructions / QR */}
          <AnimatePresence>
            {depositResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-slate-900/70 p-6 rounded-2xl border border-orange-600/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-orange-300">Payment Details</h3>
                    <div className="flex items-center gap-2">
                      {polling && <ClockIcon className="w-5 h-5 text-amber-400 animate-pulse" />}
                      <span className="text-sm capitalize text-gray-300">
                        {depositResult.status || 'pending'}
                      </span>
                    </div>
                  </div>

                  {depositResult.address && (
                    <>
                      <p className="text-sm text-gray-400 mb-2">Send to address (BSC):</p>
                      <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-orange-800/30">
                        <p className="font-mono text-orange-300 break-all flex-1">
                          {shorten(depositResult.address)}
                        </p>
                        <button
                          onClick={() => copyToClipboard(depositResult.address)}
                          className="p-2 hover:bg-white/10 rounded-lg transition"
                        >
                          {copied ? (
                            <CheckCircleIcon className="w-6 h-6 text-orange-400" />
                          ) : (
                            <DocumentDuplicateIcon className="w-6 h-6 text-gray-300" />
                          )}
                        </button>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <div className="bg-white p-4 rounded-2xl shadow-2xl">
                          <QRCode value={depositResult.address} size={180} level="H" />
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-3">
                        Scan to send USDT (BSC)
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Deposit History */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/40 backdrop-blur-xl rounded-3xl border border-orange-600/30 p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300">Deposit History</h2>

          {historyLoading ? (
            <p className="text-gray-400 text-center py-8">Loading...</p>
          ) : history.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No deposits yet.</p>
          ) : (
            <div className="space-y-4">
              {history.map((dep) => (
                <div
                  key={dep.id || dep.paymentId}
                  className="p-5 bg-slate-900/60 rounded-xl border border-orange-800/30 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-white">
                      {dep.amount} USDT
                    </p>
                    <p className="text-sm text-gray-400">
                      {dep.address ? shorten(dep.address) : '—'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        dep.status === 'completed' || dep.status === 'confirmed'
                          ? 'text-orange-400'
                          : dep.status === 'pending'
                          ? 'text-amber-400'
                          : 'text-red-400'
                      }`}
                    >
                      {dep.status?.toUpperCase() || 'PENDING'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {dep.createdAt ? new Date(dep.createdAt).toLocaleString() : '—'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}