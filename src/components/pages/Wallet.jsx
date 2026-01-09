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







import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  WalletIcon, 
  QrCodeIcon, 
  DocumentDuplicateIcon,
  ArrowPathIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import QRCode from 'react-qr-code';
import { Html5QrcodeScanner } from 'html5-qrcode';

import { getSupportedWallets, getDepositAddress, checkBalance } from '../../api/depositapi';

export default function Wallet() {
  const [supportedCryptos, setSupportedCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0.000');
  const [addressLoading, setAddressLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);
  const [scanModalOpen, setScanModalOpen] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const scannerRef = useRef(null);

  const shortenAddress = (addr) => addr ? `${addr.slice(0, 10)}...${addr.slice(-8)}` : 'Loading...';

  // Fetch supported cryptocurrencies
  useEffect(() => {
    const fetchSupportedCryptos = async () => {
      try {
        const res = await getSupportedWallets();
        const cryptos = res.data || ['ETH', 'BTC', 'USDT'];
        setSupportedCryptos(cryptos);
        if (cryptos.length > 0) setSelectedCrypto(cryptos[0]);
      } catch (err) {
        console.error("Failed to load supported wallets:", err);
        setSupportedCryptos(['ETH', 'BTC', 'USDT']);
      }
    };
    fetchSupportedCryptos();
  }, []);

  // Load address & balance + auto-refresh every 30s
  useEffect(() => {
    if (!selectedCrypto) return;

    const loadData = async () => {
      setAddressLoading(true);
      setBalanceLoading(true);

      try {
        const [addrRes, balRes] = await Promise.all([
          getDepositAddress(selectedCrypto),
          checkBalance(selectedCrypto)
        ]);

        setWalletAddress(addrRes.data.walletAddress || addrRes.data.address || '');
        setBalance(parseFloat(balRes.data.balance || 0).toFixed(6));
      } catch (err) {
        console.error("Error loading deposit data:", err);
        setWalletAddress('');
        setBalance('0.000');
      } finally {
        setAddressLoading(false);
        setBalanceLoading(false);
      }
    };

    loadData();

    const interval = setInterval(async () => {
      try {
        const res = await checkBalance(selectedCrypto);
        setBalance(parseFloat(res.data.balance || 0).toFixed(6));
      } catch (err) {
        // Silent fail
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [selectedCrypto]);

  const copyToClipboard = (text = walletAddress) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const manualRefresh = async () => {
    setIsRefreshing(true);
    try {
      const res = await checkBalance(selectedCrypto);
      setBalance(parseFloat(res.data.balance || 0).toFixed(6));
    } catch (err) {}
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const onScanSuccess = (decodedText) => {
    setScanResult(decodedText);
    copyToClipboard(decodedText);
    setScanModalOpen(false);
  };

  const onScanError = (error) => {
    // Silent errors for smooth UX
    console.warn(error);
  };

  // Initialize / Cleanup QR Scanner when modal opens/closes
  useEffect(() => {
    if (scanModalOpen) {
      const config = {
        fps: 10,
        qrbox: { width: 300, height: 300 },
        aspectRatio: 1,
        disableFlip: false,
      };

      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        config,
        /* verbose= */ false
      );

      scanner.render(onScanSuccess, onScanError);
      scannerRef.current = scanner;
    } else {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((error) => {
          console.error("Failed to clear scanner", error);
        });
        scannerRef.current = null;
      }
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, [scanModalOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dark Crypto Robotic Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
            animate={{
              y: -200,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          >
            {i % 3 === 0 ? '₿' : i % 3 === 1 ? 'Ξ' : '◊'}
          </motion.div>
        ))}

        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '50px 50px' }} />
      </div>

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-10 text-center border-b border-white/10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <WalletIcon className="w-16 h-16 text-purple-400" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Deposit Wallet
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <ShieldCheckIcon className="w-6 h-6 text-emerald-500" />
              <p className="text-emerald-400 text-sm font-medium">Secure • Encrypted • Real-time</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-10 space-y-10">
            {/* Crypto Selector */}
            <div>
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Cryptocurrency</label>
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="w-full mt-3 px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-lg font-semibold focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
              >
                {supportedCryptos.map((crypto) => (
                  <option key={crypto} value={crypto} className="bg-slate-900">
                    {crypto}
                  </option>
                ))}
              </select>
            </div>

            {/* Balance */}
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Available Balance</p>
              <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                <p className="text-7xl font-extrabold text-white">
                  {balanceLoading ? '⋯' : balance}
                </p>
                <p className="text-4xl font-bold text-purple-400 mt-2">{selectedCrypto}</p>
              </motion.div>
              <p className="text-gray-600 text-sm mt-4">Auto-updates every 30 seconds</p>
            </div>

            {/* Deposit Address Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Deposit Address</p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
                <p className="font-mono text-lg text-cyan-300 break-all text-center sm:text-left">
                  {addressLoading ? 'Generating address...' : shortenAddress(walletAddress)}
                </p>

                <div className="flex gap-4">
                  {/* Show Your QR Code */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQrVisible(!qrVisible)}
                    className="p-4 bg-purple-700/50 backdrop-blur rounded-xl border border-purple-500/30 hover:bg-purple-700/70 transition"
                    title="Show Deposit QR Code"
                  >
                    <QrCodeIcon className="w-7 h-7 text-white" />
                  </motion.button>

                  {/* Scan QR Code Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setScanModalOpen(true)}
                    className="p-4 bg-cyan-700/50 backdrop-blur rounded-xl border border-cyan-500/30 hover:bg-cyan-700/70 transition"
                    title="Scan QR Code"
                  >
                    <QrCodeIcon className="w-7 h-7 text-white" />
                  </motion.button>

                  {/* Copy Address */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard()}
                    className="p-4 bg-gradient-to-br from-cyan-700 to-blue-700/50 backdrop-blur rounded-xl border border-cyan-500/30"
                    title="Copy Address"
                  >
                    {copied ? <CheckCircleIcon className="w-7 h-7 text-emerald-400" /> : <DocumentDuplicateIcon className="w-7 h-7 text-white" />}
                  </motion.button>
                </div>
              </div>

              <AnimatePresence>
                {qrVisible && walletAddress && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="text-center mt-8">
                      <div className="inline-block p-8 bg-white rounded-3xl shadow-2xl">
                        <QRCode value={walletAddress} size={220} level="H" />
                      </div>
                      <p className="text-gray-500 text-sm mt-6">Scan this QR to deposit {selectedCrypto}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-white/5 py-5 text-center">
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }}>
              <div className="flex items-center justify-center gap-3">
                <SparklesIcon className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-400 text-sm font-medium">
                  Secure Connection • Live Balance Sync
                </span>
                <SparklesIcon className="w-5 h-5 text-yellow-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={manualRefresh}
          className="p-4 bg-gradient-to-br from-purple-700 to-pink-700 rounded-full shadow-2xl backdrop-blur border border-white/20"
        >
          <ArrowPathIcon className={`w-6 h-6 text-white ${isRefreshing ? 'animate-spin' : ''}`} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = '/transactions'}
          className="p-4 bg-gradient-to-br from-cyan-700 to-blue-700 rounded-full shadow-2xl backdrop-blur border border-white/20"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z" />
          </svg>
        </motion.button>
      </div>

      {/* QR Code Scanner Modal */}
      <AnimatePresence>
        {scanModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setScanModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-black/40 backdrop-blur-2xl rounded-3xl p-8 max-w-lg w-full border border-white/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-400">Scan QR Code</h3>
                <button onClick={() => setScanModalOpen(false)} className="text-gray-400 hover:text-white">
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>

              {/* html5-qrcode scanner container */}
              <div id="qr-reader" className="w-full rounded-2xl overflow-hidden bg-black" style={{ maxWidth: '500px', margin: '0 auto' }} />

              <p className="text-center text-gray-400 mt-6 text-sm">
                Point your camera at a QR code containing a wallet address
              </p>

              {scanResult && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 mt-4 font-mono text-sm break-all bg-black/50 p-4 rounded-xl"
                >
                  ✓ Scanned & Copied: {scanResult}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}