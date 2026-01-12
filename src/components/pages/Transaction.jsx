// // // src/pages/Transactions.js
// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //   ArrowUpRightIcon,
// //   ArrowDownRightIcon,
// //   BanknotesIcon,
// //   ClockIcon,
// //   CpuChipIcon,
// //   ChevronDownIcon,
// //   MagnifyingGlassIcon,
// // } from '@heroicons/react/24/solid';
// // import { getWithdrawals, cancelWithdrawal } from "../../api/walletapi";
// // export default function Transactions() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [expandedId, setExpandedId] = useState(null);

// //   const [transactions, setTransactions] = useState([]);
// // const [loading, setLoading] = useState(true);

// // useEffect(() => {
// //   fetchWithdrawals();
// // }, []);

// // const fetchWithdrawals = async () => {
// //   try {
// //     const res = await getWithdrawals();
// //     setTransactions(res.data);
// //   } catch (err) {
// //     console.error(err);
// //   } finally {
// //     setLoading(false);
// //   }
// // };


// //   // Sample transaction history
// //   const transactions = [
// //     { id: 1, type: 'deposit', amount: 2500.00, currency: 'USDT', from: 'External Wallet', to: 'Trading Account', fee: 0.00, status: 'completed', timestamp: '2025-12-10 10:45', txid: '0xabc123...def456' },
// //     { id: 2, type: 'withdraw', amount: 1200.00, currency: 'USDT', from: 'Trading Account', to: 'External Wallet', fee: 5.00, status: 'completed', timestamp: '2025-12-09 18:30', txid: '0x789ghi...jkl012' },
// //     { id: 3, type: 'deposit', amount: 500.00, currency: 'BTC', from: 'Mining Reward', to: 'Savings Vault', fee: 0.00, status: 'completed', timestamp: '2025-12-09 14:20', txid: '0xbtc456...789xyz' },
// //     { id: 4, type: 'withdraw', amount: 800.00, currency: 'USDT', from: 'Trading Account', to: 'Personal Wallet', fee: 4.50, status: 'pending', timestamp: '2025-12-10 09:15', txid: '0xpend123...456ing' },
// //     { id: 5, type: 'deposit', amount: 3500.00, currency: 'ETH', from: 'Staking Reward', to: 'Trading Account', fee: 0.00, status: 'completed', timestamp: '2025-12-08 22:10', txid: '0xeth789...abc123' },
// //   ];

// //   const filteredTransactions = transactions.filter(tx =>
// //     tx.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     tx.txid.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
// //       {/* Animated Grid Background */}
// //       <div className="absolute inset-0 opacity-10 pointer-events-none">
// //         <motion.div
// //           animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
// //           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
// //           className="w-full h-full"
// //           style={{
// //             backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
// //             backgroundSize: "60px 60px",
// //           }}
// //         />
// //       </div>

// //       {/* Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none" />

// //       {/* Main Content */}
// //       <div className="relative z-10 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-28">

// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ type: "spring", stiffness: 100 }}
// //           className="text-center"
// //         >
// //           <div className="flex items-center justify-center gap-3 mb-2">
// //             <CpuChipIcon className="w-10 h-10 text-cyan-400" />
// //             <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
// //               Transaction History
// //             </h1>
// //           </div>
// //           <p className="text-sm text-gray-400">Secure blockchain transaction ledger</p>
// //         </motion.div>

// //         {/* Search Bar */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="relative"
// //         >
// //           <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
// //           <input
// //             type="text"
// //             placeholder="Search by currency, type, or TxID..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full pl-12 pr-4 py-4 bg-black/60 backdrop-blur-xl border border-cyan-500/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 transition-all"
// //           />
// //           <motion.div
// //             className="absolute inset-0 border-2 border-cyan-400 rounded-2xl opacity-0 pointer-events-none"
// //             animate={{ opacity: searchTerm ? 0.3 : 0 }}
// //             transition={{ duration: 0.3 }}
// //           />
// //         </motion.div>

// //         {/* Transaction Cards */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.4 }}
// //           className="space-y-4"
// //         >
// //           <AnimatePresence>
// //             {filteredTransactions.length === 0 ? (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 className="text-center py-16"
// //               >
// //                 <BanknotesIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
// //                 <h3 className="text-xl font-semibold text-gray-400 mb-2">No Transactions Found</h3>
// //                 <p className="text-gray-500 text-sm">Try adjusting your search</p>
// //               </motion.div>
// //             ) : (
// //               filteredTransactions.map((tx, idx) => (
// //                 <motion.div
// //                   key={tx.id}
// //                   layout
// //                   initial={{ opacity: 0, y: 30 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -30 }}
// //                   transition={{ delay: idx * 0.05 }}
// //                   className="bg-black/70 backdrop-blur-2xl rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden"
// //                   whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
// //                 >
// //                   {/* Main Card */}
// //                   <div className="p-5 sm:p-6">
// //                     <div className="flex items-center justify-between mb-4">
// //                       <div className="flex items-center gap-4">
// //                         <div className={`p-3 rounded-xl ${tx.type === 'deposit' ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-red-500/20 border border-red-500/40'}`}>
// //                           {tx.type === 'deposit' ? 
// //                             <ArrowDownRightIcon className="w-7 h-7 text-emerald-400" /> : 
// //                             <ArrowUpRightIcon className="w-7 h-7 text-red-400" />
// //                           }
// //                         </div>
// //                         <div>
// //                           <h3 className="text-lg font-bold text-white capitalize">{tx.type}</h3>
// //                           <p className="text-sm text-gray-400">{tx.currency}</p>
// //                         </div>
// //                       </div>
// //                       <div className="text-right">
// //                         <p className={`text-2xl font-bold ${tx.type === 'deposit' ? 'text-emerald-400' : 'text-red-400'}`}>
// //                           {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toFixed(2)}
// //                         </p>
// //                         {tx.fee > 0 && <p className="text-xs text-gray-500">Fee: ${tx.fee.toFixed(2)}</p>}
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-2 gap-4 text-sm mb-4">
// //                       <div>
// //                         <p className="text-gray-400">From</p>
// //                         <p className="text-white truncate">{tx.from}</p>
// //                       </div>
// //                       <div>
// //                         <p className="text-gray-400">To</p>
// //                         <p className="text-white truncate">{tx.to}</p>
// //                       </div>
// //                       <div>
// //                         <p className="text-gray-400">Status</p>
// //                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
// //                           tx.status === 'completed' 
// //                             ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' 
// //                             : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
// //                         }`}>
// //                           {tx.status.toUpperCase()}
// //                         </span>
// //                       </div>
// //                       <div>
// //                         <p className="text-gray-400 flex items center">
// //                           <ClockIcon className="w-4 h-4 mr-1" />
// //                           Time
// //                         </p>
// //                         <p className="text-white text-xs">{tx.timestamp}</p>
// //                       </div>
// //                     </div>

// //                     {/* Expand Button */}
// //                     <button
// //                       onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
// //                       className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
// //                     >
// //                       <span>View Transaction ID</span>
// //                       {expandedId === tx.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
// //                     </button>
// //                   </div>

// //                   {/* Expanded TxID */}
// //                   <AnimatePresence>
// //                     {expandedId === tx.id && (
// //                       <motion.div
// //                         initial={{ height: 0 }}
// //                         animate={{ height: 'auto' }}
// //                         exit={{ height: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="border-t border-cyan-500/30 bg-black/50 px-5 sm:px-6 py-4"
// //                       >
// //                         <div className="flex items-center justify-between">
// //                           <p className="text-gray-400 text-sm">Transaction Hash</p>
// //                           <p className="text-cyan-300 font-mono text-xs break-all">{tx.txid}</p>
// //                         </div>
// //                         <motion.div
// //                           className="mt-3 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
// //                           initial={{ scaleX: 0 }}
// //                           animate={{ scaleX: 1 }}
// //                           transition={{ duration: 1, ease: "easeOut" }}
// //                         />
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </motion.div>
// //               ))
// //             )}
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       {/* Floating Refresh Button - Robotic Pulse */}
// //       <motion.button
// //         initial={{ scale: 0 }}
// //         animate={{ scale: 1 }}
// //         transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.95 }}
// //         className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
// //         animate={{
// //           boxShadow: [
// //             "0 0 20px rgba(34,211,238,0.8)",
// //             "0 0 40px rgba(34,211,238,1)",
// //             "0 0 20px rgba(34,211,238,0.8)",
// //           ]
// //         }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //       >
// //         <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// //         </svg>
// //       </motion.button>
// //     </div>
// //   );
// // }






// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowUpRightIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
//   XCircleIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid";

// import { getWithdrawals, cancelWithdrawal } from "../../api/walletapi";

// export default function Transactions() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedId, setExpandedId] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   /* ================= FETCH WITHDRAWALS ================= */
//   const fetchWithdrawals = async () => {
//     try {
//       setLoading(true);
//       const res = await getWithdrawals();

//       const mapped = res.data.map((tx) => ({
//         id: tx.id,
//         type: "withdraw",
//         amount: tx.amount,
//         currency: tx.cryptocurrency,
//         to: tx.walletAddress,
//         status: tx.status?.toLowerCase() || "pending",
//         timestamp: new Date(tx.createdAt).toLocaleString(),
//         txid: tx.txHash || "Pending on-chain confirmation...",
//         fee: tx.networkFee || 0,
//       }));

//       // Sort by newest first
//       mapped.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       setTransactions(mapped);
//     } catch (err) {
//       console.error("Failed to fetch withdrawals:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= AUTO REFRESH FOR PENDING ================= */
//   useEffect(() => {
//     fetchWithdrawals();

//     const interval = setInterval(() => {
//       if (transactions.some((tx) => tx.status === "pending")) {
//         fetchWithdrawals();
//       }
//     }, 30000); // Every 30 seconds if there are pending txs

//     return () => clearInterval(interval);
//   }, []);

//   /* ================= FILTER ================= */
//   const filteredTransactions = transactions.filter((tx) =>
//     [tx.currency, tx.txid, tx.to]
//       .join(" ")
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   /* ================= CANCEL ================= */
//   const handleCancel = async (id) => {
//     setCancellingId(id);
//     try {
//       await cancelWithdrawal(id);
//       await fetchWithdrawals();
//     } catch (err) {
//       console.error("Cancel failed:", err);
//       alert("Failed to cancel withdrawal. Please try again.");
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   /* ================= STATUS BADGE ================= */
//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "completed":
//         return {
//           icon: <CheckCircleIcon className="w-4 h-4" />,
//           color: "text-green-400 border-green-400 bg-green-400/10",
//           label: "COMPLETED",
//         };
//       case "pending":
//         return {
//           icon: <ClockIcon className="w-4 h-4" />,
//           color: "text-yellow-400 border-yellow-400 bg-yellow-400/10",
//           label: "PENDING",
//         };
//       case "failed":
//       case "cancelled":
//         return {
//           icon: <XCircleIcon className="w-4 h-4" />,
//           color: "text-red-400 border-red-400 bg-red-400/10",
//           label: status.toUpperCase(),
//         };
//       default:
//         return {
//           icon: <ExclamationTriangleIcon className="w-4 h-4" />,
//           color: "text-orange-400 border-orange-400 bg-orange-400/10",
//           label: "PROCESSING",
//         };
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
//       {/* Animated Grid Background */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <motion.div
//           animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//           className="w-full h-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none" />

//       <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-6 pb-32">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Withdrawal History
//           </h1>
//           <p className="text-gray-400 mt-2">Track all your crypto withdrawals securely</p>
//         </motion.div>

//         {/* Search Bar */}
//         <div className="relative">
//           <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400" />
//           <input
//             type="text"
//             placeholder="Search by currency, address, or TxID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-14 pr-6 py-4 bg-black/60 border border-cyan-500/50 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all placeholder-gray-500"
//           />
//         </div>

//         {/* Loading State */}
//         {loading && transactions.length === 0 ? (
//           <div className="space-y-4">
//             {[...Array(3)].map((_, i) => (
//               <div key={i} className="bg-black/70 border border-cyan-500/30 rounded-2xl p-6 animate-pulse">
//                 <div className="flex justify-between">
//                   <div className="flex gap-4">
//                     <div className="w-12 h-12 bg-red-500/20 rounded-xl" />
//                     <div className="space-y-2">
//                       <div className="h-5 w-32 bg-gray-700 rounded" />
//                       <div className="h-4 w-20 bg-gray-600 rounded" />
//                     </div>
//                   </div>
//                   <div className="h-8 w-24 bg-gray-700 rounded-full" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredTransactions.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6">
//               <ArrowUpRightIcon className="w-12 h-12 text-gray-600" />
//             </div>
//             <p className="text-gray-500 text-lg">No withdrawals yet</p>
//             <p className="text-gray-600 text-sm mt-2">Your withdrawal history will appear here</p>
//           </div>
//         ) : (
//           <AnimatePresence>
//             {filteredTransactions.map((tx) => {
//               const statusInfo = getStatusBadge(tx.status);
//               const isCancelling = cancellingId === tx.id;

//               return (
//                 <motion.div
//                   key={tx.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="bg-black/70 backdrop-blur-sm border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl hover:border-cyan-400 transition-all"
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex items-center gap-4">
//                         <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-2xl">
//                           <ArrowUpRightIcon className="w-8 h-8 text-red-400" />
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-bold">Withdrawal</h3>
//                           <p className="text-cyan-300 text-lg font-semibold">
//                             {tx.amount} {tx.currency}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="text-right">
//                         <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${statusInfo.color}`}>
//                           {statusInfo.icon}
//                           <span className="text-sm font-medium">{statusInfo.label}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-400">Destination Address</p>
//                         <p className="font-mono text-cyan-300 truncate">{tx.to}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Date & Time</p>
//                         <p>{tx.timestamp}</p>
//                       </div>
//                     </div>

//                     {tx.fee > 0 && (
//                       <div className="mt-3 text-sm">
//                         <p className="text-gray-400">Network Fee</p>
//                         <p className="text-orange-400">{tx.fee} {tx.currency}</p>
//                       </div>
//                     )}

//                     {/* Actions */}
//                     <div className="flex justify-between items-center mt-6">
//                       {tx.status === "pending" && (
//                         <button
//                           onClick={() => handleCancel(tx.id)}
//                           disabled={isCancelling}
//                           className="text-red-400 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
//                         >
//                           {isCancelling ? "Cancelling..." : "Cancel Withdrawal"}
//                         </button>
//                       )}

//                       <button
//                         onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
//                         className="ml-auto flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
//                       >
//                         Transaction ID
//                         {expandedId === tx.id ? (
//                           <ChevronUpIcon className="w-5 h-5" />
//                         ) : (
//                           <ChevronDownIcon className="w-5 h-5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Expanded TxID */}
//                   <AnimatePresence>
//                     {expandedId === tx.id && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="border-t border-cyan-500/30 bg-black/50 px-6 py-5"
//                       >
//                         <p className="text-xs text-gray-400 mb-1">Transaction Hash</p>
//                         <p className="font-mono text-cyan-300 text-sm break-all hover:text-cyan-200 transition">
//                           {tx.txid}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         )}
//       </div>

//       {/* Floating Refresh Button */}
//       <motion.button
//         onClick={fetchWithdrawals}
//         disabled={loading}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
//       >
//         <span className="text-2xl">{loading ? "⏳" : "🔄"}</span>
//       </motion.button>
//     </div>
//   );
// }









// // src/pages/Transactions.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowUpRightIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid";
// import { getWithdrawals, cancelWithdrawal } from "../api/walletApi";

// export default function Transactions() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedId, setExpandedId] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await getWithdrawals();
//       const mapped = (res.data || []).map(tx => ({
//         id: tx.id,
//         type: "withdraw",
//         amount: tx.amount,
//         currency: tx.cryptocurrency,
//         to: tx.walletAddress,
//         status: tx.status?.toLowerCase() || "pending",
//         timestamp: new Date(tx.createdAt).toLocaleString(),
//         txid: tx.txHash || "Awaiting confirmation...",
//         fee: tx.networkFee || 0,
//       })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       setTransactions(mapped);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(() => {
//       if (transactions.some(t => t.status === "pending")) fetchData();
//     }, 45000);
//     return () => clearInterval(interval);
//   }, []);

//   const filtered = transactions.filter(tx =>
//     `${tx.currency} ${tx.to} ${tx.txid}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleCancel = async (id) => {
//     if (!window.confirm("Cancel this withdrawal?")) return;
//     setCancellingId(id);
//     try {
//       await cancelWithdrawal(id);
//       await fetchData();
//     } catch (err) {
//       alert("Could not cancel withdrawal.");
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   const getStatusStyle = (status) => {
//     if (status === "completed") return { color: "text-green-400", bg: "bg-green-950/40", border: "border-green-800/50" };
//     if (status === "pending")   return { color: "text-orange-400", bg: "bg-orange-950/40", border: "border-orange-800/50" };
//     return { color: "text-red-400", bg: "bg-red-950/40", border: "border-red-800/50" };
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 text-center"
//       >
//         Withdrawal History
//       </motion.h1>

//       <div className="max-w-5xl mx-auto space-y-8">
//         {/* Search */}
//         <div className="relative">
//           <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-500" />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             placeholder="Search by currency, address or hash..."
//             className="w-full pl-12 pr-5 py-4 bg-gray-900 border border-orange-900/60 rounded-xl text-white placeholder-gray-500 focus:border-orange-600 focus:ring-1 focus:ring-orange-600/40 outline-none transition"
//           />
//         </div>

//         {loading && !transactions.length ? (
//           <div className="space-y-5">
//             {[...Array(3)].map((_,i) => (
//               <div key={i} className="bg-gray-900 h-44 rounded-2xl animate-pulse" />
//             ))}
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="text-center py-20 text-gray-400">
//             No withdrawals found
//           </div>
//         ) : (
//           <AnimatePresence>
//             {filtered.map(tx => {
//               const st = getStatusStyle(tx.status);
//               return (
//                 <motion.div
//                   key={tx.id}
//                   layout
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   className="bg-gray-900 rounded-2xl border border-orange-900/50 overflow-hidden"
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-5">
//                       <div className="flex gap-5">
//                         <div className="p-4 bg-orange-950/60 rounded-xl">
//                           <ArrowUpRightIcon className="w-8 h-8 text-orange-500" />
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-semibold">Withdrawal</h3>
//                           <p className="text-2xl font-bold text-orange-400 mt-1">
//                             {tx.amount} {tx.currency}
//                           </p>
//                         </div>
//                       </div>

//                       <div className={`px-4 py-2 rounded-full text-sm font-medium border ${st.border} ${st.bg} ${st.color}`}>
//                         {tx.status.toUpperCase()}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
//                       <div>
//                         <p className="text-gray-400">To Address</p>
//                         <p className="font-mono text-orange-200/90 break-all mt-1">{tx.to}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Date</p>
//                         <p className="mt-1">{tx.timestamp}</p>
//                       </div>
//                     </div>

//                     {tx.fee > 0 && (
//                       <p className="mt-4 text-sm text-orange-300">
//                         Network Fee: {tx.fee} {tx.currency}
//                       </p>
//                     )}

//                     <div className="mt-6 flex justify-between items-center">
//                       {tx.status === "pending" && (
//                         <button
//                           onClick={() => handleCancel(tx.id)}
//                           disabled={cancellingId === tx.id}
//                           className="text-red-400 hover:text-red-300 disabled:opacity-50 transition"
//                         >
//                           {cancellingId === tx.id ? "Cancelling..." : "Cancel Request"}
//                         </button>
//                       )}

//                       <button
//                         onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
//                         className="ml-auto flex items-center gap-2 text-orange-400 hover:text-orange-300"
//                       >
//                         Tx Hash
//                         {expandedId === tx.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
//                       </button>
//                     </div>
//                   </div>

//                   <AnimatePresence>
//                     {expandedId === tx.id && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="border-t border-orange-900/50 bg-gray-950/70 px-6 py-5"
//                       >
//                         <p className="text-xs text-gray-400 mb-2">Transaction Hash</p>
//                         <p className="font-mono text-orange-200 text-sm break-all">{tx.txid}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }





// src/pages/Transactions.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowUpRightIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid";
// import { getWithdrawals, cancelWithdrawal } from "../../api/walletapi";

// export default function Transactions() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedId, setExpandedId] = useState(null);
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cancellingId, setCancellingId] = useState(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await getWithdrawals();
//       const mapped = (res.data || []).map(tx => ({
//         id: tx.id,
//         type: "withdraw",
//         amount: tx.amount,
//         currency: tx.cryptocurrency,
//         to: tx.walletAddress,
//         status: tx.status?.toLowerCase() || "pending",
//         timestamp: new Date(tx.createdAt).toLocaleString(),
//         txid: tx.txHash || "Awaiting confirmation...",
//         fee: tx.networkFee || 0,
//       })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       setTransactions(mapped);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(() => {
//       if (transactions.some(t => t.status === "pending")) fetchData();
//     }, 45000);
//     return () => clearInterval(interval);
//   }, []);

//   const filtered = transactions.filter(tx =>
//     `${tx.currency} ${tx.to} ${tx.txid}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleCancel = async (id) => {
//     if (!window.confirm("Cancel this withdrawal?")) return;
//     setCancellingId(id);
//     try {
//       await cancelWithdrawal(id);
//       await fetchData();
//     } catch (err) {
//       alert("Could not cancel withdrawal.");
//     } finally {
//       setCancellingId(null);
//     }
//   };

//   const getStatusStyle = (status) => {
//     if (status === "completed") return { color: "text-green-400", bg: "bg-green-950/40", border: "border-green-800/50" };
//     if (status === "pending")   return { color: "text-orange-400", bg: "bg-orange-950/40", border: "border-orange-800/50" };
//     return { color: "text-red-400", bg: "bg-red-950/40", border: "border-red-800/50" };
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 text-center"
//       >
//         Withdrawal History
//       </motion.h1>

//       <div className="max-w-5xl mx-auto space-y-8">
//         {/* Search */}
//         <div className="relative">
//           <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-500" />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             placeholder="Search by currency, address or hash..."
//             className="w-full pl-12 pr-5 py-4 bg-gray-900 border border-orange-900/60 rounded-xl text-white placeholder-gray-500 focus:border-orange-600 focus:ring-1 focus:ring-orange-600/40 outline-none transition"
//           />
//         </div>

//         {loading && !transactions.length ? (
//           <div className="space-y-5">
//             {[...Array(3)].map((_,i) => (
//               <div key={i} className="bg-gray-900 h-44 rounded-2xl animate-pulse" />
//             ))}
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="text-center py-20 text-gray-400">
//             No withdrawals found
//           </div>
//         ) : (
//           <AnimatePresence>
//             {filtered.map(tx => {
//               const st = getStatusStyle(tx.status);
//               return (
//                 <motion.div
//                   key={tx.id}
//                   layout
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   className="bg-gray-900 rounded-2xl border border-orange-900/50 overflow-hidden"
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-5">
//                       <div className="flex gap-5">
//                         <div className="p-4 bg-orange-950/60 rounded-xl">
//                           <ArrowUpRightIcon className="w-8 h-8 text-orange-500" />
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-semibold">Withdrawal</h3>
//                           <p className="text-2xl font-bold text-orange-400 mt-1">
//                             {tx.amount} {tx.currency}
//                           </p>
//                         </div>
//                       </div>

//                       <div className={`px-4 py-2 rounded-full text-sm font-medium border ${st.border} ${st.bg} ${st.color}`}>
//                         {tx.status.toUpperCase()}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
//                       <div>
//                         <p className="text-gray-400">To Address</p>
//                         <p className="font-mono text-orange-200/90 break-all mt-1">{tx.to}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Date</p>
//                         <p className="mt-1">{tx.timestamp}</p>
//                       </div>
//                     </div>

//                     {tx.fee > 0 && (
//                       <p className="mt-4 text-sm text-orange-300">
//                         Network Fee: {tx.fee} {tx.currency}
//                       </p>
//                     )}

//                     <div className="mt-6 flex justify-between items-center">
//                       {tx.status === "pending" && (
//                         <button
//                           onClick={() => handleCancel(tx.id)}
//                           disabled={cancellingId === tx.id}
//                           className="text-red-400 hover:text-red-300 disabled:opacity-50 transition"
//                         >
//                           {cancellingId === tx.id ? "Cancelling..." : "Cancel Request"}
//                         </button>
//                       )}

//                       <button
//                         onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
//                         className="ml-auto flex items-center gap-2 text-orange-400 hover:text-orange-300"
//                       >
//                         Tx Hash
//                         {expandedId === tx.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
//                       </button>
//                     </div>
//                   </div>

//                   <AnimatePresence>
//                     {expandedId === tx.id && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="border-t border-orange-900/50 bg-gray-950/70 px-6 py-5"
//                       >
//                         <p className="text-xs text-gray-400 mb-2">Transaction Hash</p>
//                         <p className="font-mono text-orange-200 text-sm break-all">{tx.txid}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }







// src/pages/Transactions.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { userService } from "../../api/userApi";

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await userService.getTransactions();

      // Adjust field names according to your actual API response
      const mapped = (res || []).map((tx) => ({
        id: tx.id || tx._id,
        type: (tx.type || "unknown").toLowerCase(),
        amount: tx.amount || 0,
        currency: tx.currency || tx.cryptocurrency || "USDT",
        from: tx.from || "—",
        to: tx.to || tx.walletAddress || "—",
        status: (tx.status || "pending").toLowerCase(),
        timestamp: new Date(tx.createdAt || tx.date || Date.now()).toLocaleString(),
        txid: tx.txHash || tx.transactionId || tx.hash || "—",
        fee: tx.fee || tx.networkFee || 0,
        description: tx.description || tx.note || "",
      }));

      // Newest first
      mapped.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setTransactions(mapped);
    } catch (err) {
      console.error("Failed to load transactions:", err);
      setError("Could not load transaction history. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();

    // Refresh if there are pending transactions
    const interval = setInterval(() => {
      if (transactions.some((t) => t.status === "pending")) {
        fetchTransactions();
      }
    }, 45000);

    return () => clearInterval(interval);
  }, [transactions]); // Note: added transactions to deps to avoid stale closure

  const filtered = transactions.filter((tx) =>
    `${tx.type} ${tx.currency} ${tx.from} ${tx.to} ${tx.txid} ${tx.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getIconForType = (type) => {
    if (type === "deposit") return <ArrowDownRightIcon className="w-8 h-8 text-green-400" />;
    if (type === "withdraw") return <ArrowUpRightIcon className="w-8 h-8 text-orange-500" />;
    return <ArrowUpRightIcon className="w-8 h-8 text-gray-400" />;
  };

  const getTypeColor = (type) => {
    if (type === "deposit") return "text-green-400";
    if (type === "withdraw") return "text-orange-400";
    return "text-gray-300";
  };

  const getStatusStyle = (status) => {
    if (status === "completed")
      return { color: "text-green-400", bg: "bg-green-950/40", border: "border-green-800/50" };
    if (status === "pending")
      return { color: "text-orange-400", bg: "bg-orange-950/40", border: "border-orange-800/50" };
    return { color: "text-red-400", bg: "bg-red-950/40", border: "border-red-800/50" };
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-orange-400 text-center"
      >
        Transaction History
      </motion.h1>

      {/* Search bar */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by type, currency, address, hash..."
            className="w-full pl-12 pr-5 py-4 bg-gray-900 border border-orange-900/60 rounded-xl text-white placeholder-gray-500 focus:border-orange-600 focus:ring-1 focus:ring-orange-600/40 outline-none transition"
          />
        </div>
      </div>

      {/* Loading / Error / Empty / Content */}
      <div className="max-w-5xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-400">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl mb-3">No transactions found</p>
            <p>{searchTerm ? "Try a different search term" : "Your transaction history will appear here"}</p>
          </div>
        ) : (
          <AnimatePresence>
            {filtered.map((tx) => {
              const st = getStatusStyle(tx.status);
              const typeColor = getTypeColor(tx.type);

              return (
                <motion.div
                  key={tx.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-gray-900 rounded-2xl border border-orange-900/50 overflow-hidden mb-5 shadow-sm"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex gap-5">
                        <div
                          className={`p-4 rounded-xl ${
                            tx.type === "deposit" ? "bg-green-950/60" : "bg-orange-950/60"
                          }`}
                        >
                          {getIconForType(tx.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold capitalize">{tx.type}</h3>
                          <p className={`text-2xl font-bold ${typeColor} mt-1`}>
                            {tx.type === "deposit" ? "+" : "-"}
                            {tx.amount.toLocaleString()} {tx.currency}
                          </p>
                          {tx.description && (
                            <p className="text-sm text-gray-400 mt-1">{tx.description}</p>
                          )}
                        </div>
                      </div>

                      <div
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${st.border} ${st.bg} ${st.color}`}
                      >
                        {tx.status.toUpperCase()}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                      <div>
                        <p className="text-gray-400">From</p>
                        <p className="font-mono text-orange-200/90 break-all mt-1">{tx.from}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">To</p>
                        <p className="font-mono text-orange-200/90 break-all mt-1">{tx.to}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Date</p>
                        <p className="mt-1">{tx.timestamp}</p>
                      </div>
                    </div>

                    {tx.fee > 0 && (
                      <p className="mt-4 text-sm text-orange-300">
                        Fee: {tx.fee} {tx.currency}
                      </p>
                    )}

                    <div className="mt-6 flex justify-between items-center">
                      {/* You can add cancel logic here if the API supports canceling non-withdrawal txs */}
                      <div></div>

                      <button
                        onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
                        className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition"
                      >
                        Details / Hash
                        {expandedId === tx.id ? (
                          <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === tx.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-orange-900/50 bg-gray-950/70 px-6 py-5"
                      >
                        <p className="text-xs text-gray-400 mb-2">Transaction Hash / Reference</p>
                        <p className="font-mono text-orange-200 text-sm break-all">{tx.txid}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}