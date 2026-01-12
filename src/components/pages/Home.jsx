// // src/pages/Home.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   ArrowDownTrayIcon,
//   ArrowUpTrayIcon,
//   ChartBarIcon,
//   BanknotesIcon,
//   ArrowTrendingUpIcon,
//   ArrowTrendingDownIcon
// } from '@heroicons/react/24/solid';

// export default function Home() {
//   const userName = "Umoren Victor";
//   const accountBalance = 0.0;
//   const totalProfit = 0.0;
//   const totalDeposit = 0.0;
//   const totalWithdrawals = 0.0;

//   const [modalType, setModalType] = useState(null); // 'deposit' | 'withdraw' | 'trade'

//   const openModal = (type) => setModalType(type);
//   const closeModal = () => setModalType(null);

//   // Modal Titles
//   const modalTitles = {
//     deposit: "Deposit Funds",
//     withdraw: "Withdraw Funds",
//     trade: "Start Trading"
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-green-600 via-green-700 to-emerald-900 text-white">

//       {/* Welcome & Announcement */}
//       <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-2xl sm:text-3xl font-bold"
//         >
//           Welcome, {userName}
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="bg-green-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-500/30 text-sm sm:text-base"
//         >
//           🔥 New Pair Alert on Starbiit! 🚀 Graph AI / Pyth Network / Codatta now live after 48hrs of stable valuation. Grab & trade now! 📈
//         </motion.div>
//       </div>

//       {/* Action Buttons */}
//       <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
//         {[
//           { label: 'Deposit', icon: ArrowDownTrayIcon, type: 'deposit' },
//           { label: 'Withdraw', icon: ArrowUpTrayIcon, type: 'withdraw' },
//           { label: 'Trade', icon: ChartBarIcon, type: 'trade' }
//         ].map((btn, idx) => (
//           <motion.button
//             key={btn.label}
//             onClick={() => openModal(btn.type)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 + idx * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/20"
//           >
//             <btn.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
//             <span className="font-semibold text-sm sm:text-lg">{btn.label}</span>
//           </motion.button>
//         ))}
//       </div>

//       {/* Balance Cards */}
//       <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
//         {[
//           { title: 'Account Balance', amount: accountBalance, icon: BanknotesIcon, color: 'bg-green-600' },
//           { title: 'Total Profit', amount: totalProfit, icon: ArrowTrendingUpIcon, color: 'bg-emerald-600' },
//           { title: 'Total Deposit', amount: totalDeposit, icon: ArrowDownTrayIcon, color: 'bg-orange-500' },
//           { title: 'Total Withdrawals', amount: totalWithdrawals, icon: ArrowTrendingDownIcon, color: 'bg-red-600' },
//         ].map((card, idx) => (
//           <motion.div
//             key={card.title}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 + idx * 0.1 }}
//             className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex items-center gap-4"
//           >
//             <div className={`${card.color} p-3 sm:p-4 rounded-2xl`}>
//               <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//             </div>
//             <div>
//               <p className="text-gray-600 text-xs sm:text-sm">{card.title}</p>
//               <p className="text-gray-800 text-xl sm:text-2xl font-bold">
//                 ${card.amount.toFixed(2)}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Personal Trading Chart */}
//       <div className="px-4 sm:px-6 lg:px-8 mb-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20"
//         >
//           <h3 className="text-xl sm:text-2xl font-bold mb-4">Personal Trading Chart</h3>
//           <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
//             <p className="text-gray-400">Chart Placeholder</p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating Action Button */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.6, type: 'spring' }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-6 right-6 bg-cyan-500 p-4 sm:p-5 rounded-full shadow-2xl"
//       >
//         <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       </motion.button>

//       {/* Modal */}
//       {modalType && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-md text-black"
//           >
//             <h2 className="text-xl font-bold mb-4">{modalTitles[modalType]}</h2>
//             <p className="text-sm mb-4">This is a placeholder for the {modalType} form. You can integrate real inputs here.</p>

//             {/* Example Inputs */}
//             <input
//               type="number"
//               placeholder="Enter amount"
//               className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//               >
//                 Confirm
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }



// src/pages/Home.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   ArrowDownTrayIcon,
//   ArrowUpTrayIcon,
//   ChartBarIcon,
//   BanknotesIcon,
//   ArrowTrendingUpIcon,
//   ArrowTrendingDownIcon,
//   CpuChipIcon,
// } from '@heroicons/react/24/solid';

// export default function Home() {
//   const userName = "Umoren Victor";
//   const accountBalance = 0.0;
//   const totalProfit = 0.0;
//   const totalDeposit = 0.0;
//   const totalWithdrawals = 0.0;

//   const [modalType, setModalType] = useState(null); // 'deposit' | 'withdraw' | 'trade'

//   const openModal = (type) => setModalType(type);
//   const closeModal = () => setModalType(null);

//   // Modal Titles
//   const modalTitles = {
//     deposit: "Deposit Funds",
//     withdraw: "Withdraw Funds",
//     trade: "Start Trading"
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">

//       {/* Subtle Animated Grid Background for Robotic Feel */}
//       <div className="absolute inset-0 opacity-20">
//         <motion.div
//           animate={{ backgroundPosition: "0% 0%, 100% 100%" }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="w-full h-full"
//           style={{
//             backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Gradient Overlay for Depth */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-purple-900/30 pointer-events-none" />

//       {/* Welcome & Announcement */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
//         >
//           <CpuChipIcon className="inline w-8 h-8 mr-2" />
//           Welcome, {userName}
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="bg-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-cyan-500/40 shadow-lg shadow-cyan-500/20"
//         >
//           <p className="text-cyan-300 text-sm sm:text-base">
//             🔥 Pair alert on Credenceflux 
// BTC/Usdt, 48 hrs of stable ROI,
//           </p>
//           <motion.div
//             className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
//             animate={{ x: ["-100%", "100%"] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//           />
//         </motion.div>
//       </div>

//       {/* Action Buttons */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
//         {[
//           { label: 'Deposit', icon: ArrowDownTrayIcon, type: 'deposit', gradient: 'from-emerald-500 to-green-600' },
//           { label: 'Withdraw', icon: ArrowUpTrayIcon, type: 'withdraw', gradient: 'from-red-500 to-pink-600' },
//           { label: 'Trade', icon: ChartBarIcon, type: 'trade', gradient: 'from-cyan-400 to-blue-600' },
//         ].map((btn, idx) => (
//           <motion.button
//             key={btn.label}
//             onClick={() => openModal(btn.type)}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
//             whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)" }}
//             whileTap={{ scale: 0.95 }}
//             className={`relative overflow-hidden bg-gradient-to-br ${btn.gradient} backdrop-blur-md rounded-2xl p-2 sm:p-6 flex flex-col items-center justify-center shadow-2xl border border-white/30`}
//           >
//             <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
//             <btn.icon className="w-5 h-5 sm:w-12 sm:h-12 mb-2 drop-shadow-lg" />
//             <span className="font-bold text-sm sm:text-xl tracking-wider">{btn.label}</span>
//           </motion.button>
//         ))}
//       </div>

//       {/* Balance Cards */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
//         {[
//           { title: 'Account Balance', amount: accountBalance, icon: BanknotesIcon, color: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
//           { title: 'Total Profit', amount: totalProfit, icon: ArrowTrendingUpIcon, color: 'bg-gradient-to-br from-emerald-500 to-green-600' },
//           { title: 'Total Deposit', amount: totalDeposit, icon: ArrowDownTrayIcon, color: 'bg-gradient-to-br from-orange-500 to-amber-600' },
//           { title: 'Total Withdrawals', amount: totalWithdrawals, icon: ArrowTrendingDownIcon, color: 'bg-gradient-to-br from-red-500 to-pink-600' },
//         ].map((card, idx) => (
//           <motion.div
//             key={card.title}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 + idx * 0.1 }}
//             whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)" }}
//             className="relative bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 border border-cyan-500/40 overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-cyan-400/20 to-transparent" />
//             <div className={`${card.color} p-3 sm:p-4 rounded-2xl shadow-lg`}>
//               <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//             </div>
//             <div className="mt-4">
//               <p className="text-cyan-300 text-xs sm:text-sm tracking-wide">{card.title}</p>
//               <p className="text-2xl sm:text-3xl font-bold text-white">
//                 ${card.amount.toFixed(2)}
//               </p>
//             </div>
//             <motion.div
//               className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
//               animate={{ x: ["-100%", "100%"] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Personal Trading Chart */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-black/60 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/30"
//         >
//           <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
//             <CpuChipIcon className="w-8 h-8 text-cyan-400" />
//             Personal Trading Matrix
//           </h3>
//           <div className="relative bg-gray-900/80 border-2 border-dashed border-cyan-600/50 rounded-xl w-full h-64 flex items-center justify-center overflow-hidden">
//             <motion.div
//               animate={{ opacity: [0.4, 1, 0.4] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="text-4xl sm:text-5xl font-bold text-cyan-400"
//             >
//               [SCANNING MARKET...]
//             </motion.div>
//             <motion.div
//               className="absolute inset-0 opacity-10"
//               style={{
//                 backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
//                 backgroundSize: "40px 40px",
//               }}
//               animate={{ backgroundPosition: ["0% 0%", "40px 40px"] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating Action Button - Robotic Core Pulse */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
//         whileHover={{ scale: 1.15 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 sm:p-6 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
//         animate={{
//           boxShadow: [
//             "0 0 20px rgba(34, 211, 238, 0.8)",
//             "0 0 40px rgba(34, 211, 238, 1)",
//             "0 0 20px rgba(34, 211, 238, 0.8)",
//           ]
//         }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <CpuChipIcon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//       </motion.button>

//       {/* Modal */}
//       {modalType && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 w-11/12 max-w-md text-white border-2 border-cyan-500/70 overflow-hidden"
//           >
//             <motion.div
//               className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
//               animate={{ x: ["-100%", "100%"] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             />
//             <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
//               {modalTitles[modalType]}
//             </h2>
//             <p className="text-sm mb-4 text-gray-300">This is a placeholder for the {modalType} form. You can integrate real inputs here.</p>

//             {/* Example Inputs */}
//             <input
//               type="number"
//               placeholder="Enter amount"
//               className="w-full p-3 bg-black/50 border border-cyan-500/50 rounded-lg mb-4 text-white placeholder-gray-500 focus:border-cyan-300 focus:outline-none"
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
//               >
//                 Confirm
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BanknotesIcon,
//   ArrowTrendingUpIcon,
//   ArrowDownTrayIcon,
//   ArrowUpTrayIcon,
//   ChartBarIcon,
// } from '@heroicons/react/24/solid';
// import { userService } from '../../api/userApi'; // new file

// export default function Home() {
//   const [dashboardData, setDashboardData] = useState({
//     balance: 0,
//     totalProfit: 0,
//     totalDeposit: 0,
//     totalWithdrawal: 0,
//     userName: 'User',
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const data = await userService.getDashboardSummary();
//         setDashboardData({
//           balance: data.balance || 0,
//           totalProfit: data.totalProfit || 0,
//           totalDeposit: data.totalDeposit || 0,
//           totalWithdrawal: data.totalWithdrawal || 0,
//           userName: data.name || 'User',
//         });
//       } catch (err) {
//         console.error('Dashboard fetch error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-950 flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
//           className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6 relative overflow-hidden">
//       {/* Subtle background pattern - orange tint */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: 'radial-gradient(circle at 10% 20%, orange 1px, transparent 1px)',
//             backgroundSize: '60px 60px',
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto space-y-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-orange-400"
//         >
//           Welcome back, {dashboardData.userName}
//         </motion.h1>

//         {/* Balance Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { title: 'Account Balance', value: dashboardData.balance, icon: BanknotesIcon, color: 'from-orange-600 to-orange-500' },
//             { title: 'Total Profit', value: dashboardData.totalProfit, icon: ArrowTrendingUpIcon, color: 'from-emerald-600 to-emerald-500' },
//             { title: 'Total Deposits', value: dashboardData.totalDeposit, icon: ArrowDownTrayIcon, color: 'from-blue-600 to-blue-500' },
//             { title: 'Total Withdrawals', value: dashboardData.totalWithdrawal, icon: ArrowUpTrayIcon, color: 'from-red-600 to-red-500' },
//           ].map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-gray-900 p-6 rounded-2xl border border-orange-900/40 shadow-xl hover:border-orange-700/60 transition-colors"
//             >
//               <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4`}>
//                 <item.icon className="w-8 h-8 text-white" />
//               </div>
//               <p className="text-gray-400 text-sm mb-1">{item.title}</p>
//               <p className="text-3xl font-bold">${item.value.toFixed(2)}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Quick Actions */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {[
//             { label: 'Deposit', icon: ArrowDownTrayIcon, color: 'from-emerald-600 to-emerald-500' },
//             { label: 'Withdraw', icon: ArrowUpTrayIcon, color: 'from-red-600 to-red-500' },
//             { label: 'Trade', icon: ChartBarIcon, color: 'from-orange-600 to-orange-500' },
//           ].map((btn, i) => (
//             <motion.button
//               key={btn.label}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className={`bg-gradient-to-br ${btn.color} p-6 rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/30 transition-shadow`}
//             >
//               <btn.icon className="w-7 h-7" />
//               {btn.label}
//             </motion.button>
//           ))}
//         </div>

//         {/* Placeholder for more sections (Transactions / Referrals / etc.) */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="bg-gray-900 p-8 rounded-2xl border border-orange-900/40"
//         >
//           <h2 className="text-2xl font-semibold text-orange-300 mb-6">Quick Overview</h2>
//           <p className="text-gray-300">
//             View your recent transactions, referral earnings, profile settings, and more in the sidebar.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { userService } from '../../api/userApi';

// Assume you have or will create this API file
import { getCryptoChart } from '../../api/cryptoApi'; // ← create this

const DEFAULT_CRYPTO = 'bitcoin'; // or 'btc' — match your backend id

export default function Home() {
  const [dashboardData, setDashboardData] = useState({
    balance: 0,
    totalProfit: 0,
    totalDeposit: 0,
    totalWithdrawal: 0,
    userName: 'User',
  });
  const [chartData, setChartData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(DEFAULT_CRYPTO);
  const [chartLoading, setChartLoading] = useState(true);
  const [chartError, setChartError] = useState('');
  const [loading, setLoading] = useState(true);

  // Dashboard summary
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await userService.getDashboardSummary();
        setDashboardData({
          balance: data.balance || 0,
          totalProfit: data.totalProfit || 0,
          totalDeposit: data.totalDeposit || 0,
          totalWithdrawal: data.totalWithdrawal || 0,
          userName: data.name || 'User',
        });
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  // Crypto chart
  useEffect(() => {
    const fetchChart = async () => {
      setChartLoading(true);
      setChartError('');
      try {
        const res = await getCryptoChart(selectedCrypto);
        // Adjust based on your actual response shape
        // Example expected: [{ timestamp: "2025-01-01", price: 95000 }, ...]
        const formatted = (res.data || []).map(item => ({
          time: item.timestamp || item.time || item.date,
          price: Number(item.price || item.close || item.value || 0),
        }));
        setChartData(formatted);
      } catch (err) {
        console.error('Chart fetch error:', err);
        setChartError('Failed to load price chart');
      } finally {
        setChartLoading(false);
      }
    };

    fetchChart();
  }, [selectedCrypto]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 10% 20%, orange 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-orange-400"
        >
          Welcome back, {dashboardData.userName}
        </motion.h1>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Account Balance', value: dashboardData.balance, icon: BanknotesIcon, color: 'from-orange-600 to-orange-500' },
            { title: 'Total Profit', value: dashboardData.totalProfit, icon: ArrowTrendingUpIcon, color: 'from-emerald-600 to-emerald-500' },
            { title: 'Total Deposits', value: dashboardData.totalDeposit, icon: ArrowDownTrayIcon, color: 'from-blue-600 to-blue-500' },
            { title: 'Total Withdrawals', value: dashboardData.totalWithdrawal, icon: ArrowUpTrayIcon, color: 'from-red-600 to-red-500' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 p-6 rounded-2xl border border-orange-900/40 shadow-xl hover:border-orange-700/60 transition-colors"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">{item.title}</p>
              <p className="text-3xl font-bold">${item.value.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>

        {/* Crypto Price Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-orange-900/40 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-orange-300">Bitcoin Price Trend</h2>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="bg-gray-800 border border-orange-700/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
            >
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="usdt">Tether (USDT)</option>
              {/* Add more from your /api/crypto/prices endpoint later */}
            </select>
          </div>

          {chartLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : chartError ? (
            <p className="text-red-400 text-center py-10">{chartError}</p>
          ) : chartData.length === 0 ? (
            <p className="text-gray-400 text-center py-10">No chart data available</p>
          ) : (
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="time"
                    stroke="#9ca3af"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(val) => val.slice(5, 10)} // e.g., "01-12"
                  />
                  <YAxis
                    stroke="#9ca3af"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(val) => `$${val.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f3f4f6',
                    }}
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Price']}
                    labelFormatter={(label) => label}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#f97316"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Deposit', icon: ArrowDownTrayIcon, color: 'from-emerald-600 to-emerald-500' },
            { label: 'Withdraw', icon: ArrowUpTrayIcon, color: 'from-red-600 to-red-500' },
            { label: 'Trade', icon: ChartBarIcon, color: 'from-orange-600 to-orange-500' },
          ].map((btn, i) => (
            <motion.button
              key={btn.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`bg-gradient-to-br ${btn.color} p-6 rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/30 transition-shadow`}
            >
              <btn.icon className="w-7 h-7" />
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900 p-8 rounded-2xl border border-orange-900/40"
        >
          <h2 className="text-2xl font-semibold text-orange-300 mb-6">Quick Overview</h2>
          <p className="text-gray-300">
            View your recent transactions, referral earnings, profile settings, and more in the sidebar.
          </p>
        </motion.div>
      </div>
    </div>
  );
}