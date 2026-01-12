// // src/pages/TradingRecords.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ChartBarIcon,
//   ArrowTrendingUpIcon,
//   ArrowTrendingDownIcon,
//   CurrencyDollarIcon,
//   ClockIcon,
//  FunnelIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   CpuChipIcon,
// } from '@heroicons/react/24/solid';

// export default function TradingRecords() {
//   const [filter, setFilter] = useState('all'); // 'all', 'profit', 'loss', 'recent'
//   const [expandedRow, setExpandedRow] = useState(null);

//   // Sample trading records data - in real app, fetch from API
//   const tradingRecords = [
//     {
//       id: 1,
//       pair: 'BTC/USDT',
//       type: 'BUY',
//       amount: 0.025,
//       price: 45230.50,
//       total: 1130.76,
//       profit: 45.23,
//       status: 'closed',
//       timestamp: '2025-12-09 14:32',
//       pnl: 'profit',
//     },
//     {
//       id: 2,
//       pair: 'ETH/USDT',
//       type: 'SELL',
//       amount: 1.5,
//       price: 3800.45,
//       total: 5700.68,
//       profit: -23.45,
//       status: 'closed',
//       timestamp: '2025-12-09 13:15',
//       pnl: 'loss',
//     },
//     {
//       id: 3,
//       pair: 'SOL/USDT',
//       type: 'BUY',
//       amount: 25.0,
//       price: 95.67,
//       total: 2391.75,
//       profit: 89.12,
//       status: 'open',
//       timestamp: '2025-12-09 12:08',
//       pnl: 'profit',
//     },
//     {
//       id: 4,
//       pair: 'ADA/USDT',
//       type: 'SELL',
//       amount: 500,
//       price: 0.45,
//       total: 225.00,
//       profit: 12.30,
//       status: 'closed',
//       timestamp: '2025-12-08 18:45',
//       pnl: 'profit',
//     },
//     {
//       id: 5,
//       pair: 'LINK/USDT',
//       type: 'BUY',
//       amount: 10.0,
//       price: 14.20,
//       total: 142.00,
//       profit: -5.67,
//       status: 'closed',
//       timestamp: '2025-12-08 16:22',
//       pnl: 'loss',
//     },
//   ];

//   // Filter records
//   const filteredRecords = tradingRecords.filter(record => {
//     if (filter === 'all') return true;
//     if (filter === 'profit') return record.pnl === 'profit';
//     if (filter === 'loss') return record.pnl === 'loss';
//     if (filter === 'recent') return record.timestamp.includes('2025-12-09');
//     return true;
//   });

//   // Stats summary
//   const stats = {
//     totalTrades: tradingRecords.length,
//     totalProfit: tradingRecords.reduce((sum, r) => sum + (r.profit || 0), 0),
//     winRate: ((tradingRecords.filter(r => r.pnl === 'profit').length / tradingRecords.length) * 100).toFixed(1),
//     avgTrade: (tradingRecords.reduce((sum, r) => sum + r.total, 0) / tradingRecords.length).toFixed(2),
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
//       {/* Robotic Grid Background */}
//       <div className="absolute inset-0 opacity-10">
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
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none" />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col min-h-screen w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="flex items-center justify-between"
//         >
//           <div className="flex items-center gap-3">
//             <CpuChipIcon className="w-10 h-10 text-cyan-400" />
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
//                 Trading Records
//               </h1>
//               <p className="text-sm text-gray-400">Neural trading history matrix</p>
//             </div>
//           </div>
//           <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
//             <span>Total Trades: {stats.totalTrades}</span>
//             <span>•</span>
//             <span>PnL: ${stats.totalProfit.toFixed(2)}</span>
//           </div>
//         </motion.div>

//         {/* Stats Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="grid grid-cols-2 sm:grid-cols-4 gap-4"
//         >
//           {[
//             { label: 'Total Trades', value: stats.totalTrades, icon: ChartBarIcon, color: 'from-cyan-500 to-blue-600' },
//             { label: 'Total PnL', value: `$${stats.totalProfit.toFixed(2)}`, icon: CurrencyDollarIcon, color: 'from-emerald-500 to-green-600' },
//             { label: 'Win Rate', value: `${stats.winRate}%`, icon: ArrowTrendingUpIcon, color: 'from-orange-500 to-amber-600' },
//             { label: 'Avg Trade', value: `$${stats.avgTrade}`, icon: ArrowTrendingDownIcon, color: 'from-purple-500 to-pink-600' },
//           ].map((stat, idx) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 + idx * 0.1 }}
//               whileHover={{ y: -4 }}
//               className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-lg overflow-hidden"
//             >
//               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(to bottom right, ${stat.color})` }} />
//               <div className="relative z-10 flex items-center justify-between">
//                 <div className={`p-2 rounded-xl ${stat.color.replace('from-', 'bg-').replace('to-', ' to-')}`}>
//                   <stat.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xs text-cyan-300">{stat.label}</p>
//                   <p className="text-lg font-bold text-white">{stat.value}</p>
//                 </div>
//               </div>
//               <motion.div
//                 className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Filter Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center"
//         >
//           <div className="flex items-center gap-2 text-sm text-gray-400">
//             <FunnelIcon className="w-5 h-5" />
//             <span>Filter Records:</span>
//           </div>
//           <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
//             {['all', 'profit', 'loss', 'recent'].map((type) => (
//               <motion.button
//                 key={type}
//                 onClick={() => setFilter(type)}
//                 className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
//                   filter === type
//                     ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
//                     : 'bg-black/50 border border-gray-600 hover:bg-gray-700'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Trading Records Table */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="bg-black/70 backdrop-blur-2xl rounded-3xl border-2 border-cyan-500/40 shadow-2xl overflow-hidden"
//         >
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-black/90 border-b border-cyan-500/30">
//                 <tr>
//                   {['Pair', 'Type', 'Amount', 'Price', 'Total', 'PnL', 'Status', 'Time', ''].map((header) => (
//                     <th key={header} className="px-4 py-4 text-left text-xs font-semibold text-cyan-300 uppercase tracking-wider">
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-cyan-500/20">
//                 <AnimatePresence>
//                   {filteredRecords.map((record, idx) => (
//                     <motion.tr
//                       key={record.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 20 }}
//                       transition={{ delay: 0.7 + idx * 0.1 }}
//                       className="hover:bg-black/20 transition-colors"
//                     >
//                       <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
//                         {record.pair}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap">
//                         <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
//                           record.type === 'BUY' 
//                             ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
//                             : 'bg-red-500/20 text-red-400 border border-red-500/30'
//                         }`}>
//                           {record.type}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
//                         {record.amount}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
//                         ${record.price.toLocaleString()}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
//                         ${record.total.toFixed(2)}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap">
//                         <span className={`text-sm font-bold ${
//                           record.pnl === 'profit' ? 'text-green-400' : 'text-red-400'
//                         }`}>
//                           {record.profit > 0 ? '+' : ''}${record.profit.toFixed(2)}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap">
//                         <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
//                           record.status === 'open'
//                             ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//                             : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
//                         }`}>
//                           {record.status.toUpperCase()}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
//                         <ClockIcon className="w-4 h-4 inline mr-1" />
//                         {record.timestamp}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <button
//                           onClick={() => setExpandedRow(expandedRow === record.id ? null : record.id)}
//                           className="text-cyan-400 hover:text-cyan-300 transition"
//                         >
//                           {expandedRow === record.id ? (
//                             <ChevronUpIcon className="w-5 h-5" />
//                           ) : (
//                             <ChevronDownIcon className="w-5 h-5" />
//                           )}
//                         </button>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </AnimatePresence>
//               </tbody>
//             </table>
//           </div>

//           {/* No Records Message */}
//           {filteredRecords.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-center py-12"
//             >
//               <ChartBarIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-400 mb-2">No Records Found</h3>
//               <p className="text-gray-500">Adjust your filters to see trading history</p>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Expandable Row Details (Example) */}
//         <AnimatePresence>
//           {expandedRow && tradingRecords.find(r => r.id === expandedRow) && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30"
//             >
//               <div className="max-w-4xl mx-auto">
//                 <h4 className="text-lg font-semibold mb-4 text-cyan-400">
//                   Trade Details #{expandedRow}
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//                   <div>
//                     <p className="text-gray-400 mb-1">Entry Time:</p>
//                     <p className="text-white font-medium">2025-12-09 14:32 UTC</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-400 mb-1">Duration:</p>
//                     <p className="text-white font-medium">2h 15m</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-400 mb-1">Strategy:</p>
//                     <p className="text-white font-medium">AI Momentum Scalper</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-400 mb-1">Risk Level:</p>
//                     <p className="text-white font-medium">Medium (2.5%)</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>

//       {/* Floating Export Button */}
//       <motion.button
//         initial={{ scale: 0, y: 20 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ delay: 0.8, type: "spring" }}
//         whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)" }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-500 to-purple-600 p-4 rounded-full shadow-2xl border-2 border-cyan-400/50 z-50"
//       >
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       </motion.button>
//     </div>
//   );
// }




// src/pages/TradingRecords.js
// src/pages/TradingRecords.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ChartBarIcon,
//   ArrowTrendingUpIcon,
//   ArrowTrendingDownIcon,
//   CurrencyDollarIcon,
//   ClockIcon,
//   FunnelIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   CpuChipIcon,
// } from '@heroicons/react/24/solid';

// export default function TradingRecords() {
//   const [filter, setFilter] = useState('all');
//   const [expandedRow, setExpandedRow] = useState(null);

//   const tradingRecords = [
//     { id: 1, pair: 'BTC/USDT', type: 'BUY', amount: 0.025, price: 45230.50, total: 1130.76, profit: 45.23, status: 'closed', timestamp: '2025-12-09 14:32', pnl: 'profit' },
//     { id: 2, pair: 'ETH/USDT', type: 'SELL', amount: 1.5, price: 3800.45, total: 5700.68, profit: -23.45, status: 'closed', timestamp: '2025-12-09 13:15', pnl: 'loss' },
//     { id: 3, pair: 'SOL/USDT', type: 'BUY', amount: 25.0, price: 95.67, total: 2391.75, profit: 89.12, status: 'open', timestamp: '2025-12-09 12:08', pnl: 'profit' },
//     { id: 4, pair: 'ADA/USDT', type: 'SELL', amount: 500, price: 0.45, total: 225.00, profit: 12.30, status: 'closed', timestamp: '2025-12-08 18:45', pnl: 'profit' },
//     { id: 5, pair: 'LINK/USDT', type: 'BUY', amount: 10.0, price: 14.20, total: 142.00, profit: -5.67, status: 'closed', timestamp: '2025-12-08 16:22', pnl: 'loss' },
//   ];

//   const filteredRecords = tradingRecords.filter(record => {
//     if (filter === 'all') return true;
//     if (filter === 'profit') return record.pnl === 'profit';
//     if (filter === 'loss') return record.pnl === 'loss';
//     if (filter === 'recent') return record.timestamp.includes('2025-12-09');
//     return true;
//   });

//   const stats = {
//     totalTrades: tradingRecords.length,
//     totalProfit: tradingRecords.reduce((sum, r) => sum + (r.profit || 0), 0),
//     winRate: ((tradingRecords.filter(r => r.pnl === 'profit').length / tradingRecords.length) * 100).toFixed(1),
//     avgTrade: (tradingRecords.reduce((sum, r) => sum + r.total, 0) / tradingRecords.length).toFixed(2),
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
//       {/* Robotic Grid Background */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
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
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none" />

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-28">

//         {/* Header - Centered */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="text-center"
//         >
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <CpuChipIcon className="w-10 h-10 text-cyan-400" />
//             <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
//               Trading Records
//             </h1>
//           </div>
//           <p className="text-sm text-gray-400">Neural trading history matrix</p>
//           <div className="mt-3 text-xs sm:text-sm text-gray-400">
//             <span>Total Trades: {stats.totalTrades}</span>
//             <span className="mx-2">•</span>
//             <span>PnL: ${stats.totalProfit.toFixed(2)}</span>
//           </div>
//         </motion.div>

//         {/* Stats Cards - Centered Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {[
//             { label: 'Total Trades', value: stats.totalTrades, icon: ChartBarIcon, color: 'from-cyan-500 to-blue-600' },
//             { label: 'Total PnL', value: `$${stats.totalProfit.toFixed(2)}`, icon: CurrencyDollarIcon, color: stats.totalProfit >= 0 ? 'from-emerald-500 to-green-600' : 'from-red-500 to-pink-600' },
//             { label: 'Win Rate', value: `${stats.winRate}%`, icon: ArrowTrendingUpIcon, color: 'from-orange-500 to-amber-600' },
//             { label: 'Avg Trade', value: `$${stats.avgTrade}`, icon: ArrowTrendingDownIcon, color: 'from-purple-500 to-pink-600' },
//           ].map((stat, idx) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 + idx * 0.1 }}
//               whileHover={{ y: -4 }}
//               className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-lg overflow-hidden"
//             >
//               <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${stat.color}`} />
//               <div className="relative z-10 flex flex-col items-center text-center gap-2">
//                 <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
//                   <stat.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <p className="text-xs text-cyan-300">{stat.label}</p>
//                 <p className="text-lg font-bold text-white">{stat.value}</p>
//               </div>
//               <motion.div
//                 className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Filter Bar - Centered */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col items-center gap-4"
//         >
//           <div className="flex items-center gap-2 text-sm text-gray-400">
//             <FunnelIcon className="w-5 h-5 text-cyan-400" />
//             <span>Filter Records</span>
//           </div>
//           <div className="flex flex-wrap justify-center gap-3">
//             {['all', 'profit', 'loss', 'recent'].map((type) => (
//               <motion.button
//                 key={type}
//                 onClick={() => setFilter(type)}
//                 className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
//                   filter === type
//                     ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30'
//                     : 'bg-black/50 border border-gray-700 hover:bg-gray-800'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Trading Records - Mobile: Cards, Desktop: Table */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="space-y-4"
//         >
//           <AnimatePresence>
//             {filteredRecords.length === 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-16"
//               >
//                 <ChartBarIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-400 mb-2">No Records Found</h3>
//                 <p className="text-gray-500 text-sm">Try adjusting your filters</p>
//               </motion.div>
//             ) : (
//               filteredRecords.map((record, idx) => (
//                 <motion.div
//                   key={record.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ delay: idx * 0.05 }}
//                   className="bg-black/70 backdrop-blur-2xl rounded-2xl border border-cyan-500/40 shadow-xl overflow-hidden"
//                 >
//                   {/* Card Header */}
//                   <div className="p-4 sm:p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-lg font-bold text-white">{record.pair}</h3>
//                       <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//                         record.type === 'BUY' 
//                           ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
//                           : 'bg-red-500/20 text-red-400 border border-red-500/40'
//                       }`}>
//                         {record.type}
//                       </span>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-400">Amount</p>
//                         <p className="text-white font-medium">{record.amount}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Price</p>
//                         <p className="text-white font-medium">${record.price.toLocaleString()}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Total</p>
//                         <p className="text-white font-medium">${record.total.toFixed(2)}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">PnL</p>
//                         <p className={`font-bold ${record.pnl === 'profit' ? 'text-emerald-400' : 'text-red-400'}`}>
//                           {record.profit > 0 ? '+' : ''}${record.profit.toFixed(2)}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Status</p>
//                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
//                           record.status === 'open'
//                             ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
//                             : 'bg-gray-500/20 text-gray-400 border border-gray-500/40'
//                         }`}>
//                           {record.status.toUpperCase()}
//                         </span>
//                       </div>
//                       <div>
//                         <p className="text-gray-400">Time</p>
//                         <p className="text-gray-300 text-xs flex items-center">
//                           <ClockIcon className="w-4 h-4 mr-1" />
//                           {record.timestamp}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expand Button */}
//                     <button
//                       onClick={() => setExpandedRow(expandedRow === record.id ? null : record.id)}
//                       className="mt-4 w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
//                     >
//                       <span className="text-sm">View Details</span>
//                       {expandedRow === record.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
//                     </button>
//                   </div>

//                   {/* Expanded Details */}
//                   <AnimatePresence>
//                     {expandedRow === record.id && (
//                       <motion.div
//                         initial={{ height: 0 }}
//                         animate={{ height: 'auto' }}
//                         exit={{ height: 0 }}
//                         className="border-t border-cyan-500/30 bg-black/50 px-4 sm:px-6 py-4"
//                       >
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//                           <div><p className="text-gray-400">Entry Time:</p><p className="text-white">2025-12-09 14:32 UTC</p></div>
//                           <div><p className="text-gray-400">Duration:</p><p className="text-white">2h 15m</p></div>
//                           <div><p className="text-gray-400">Strategy:</p><p className="text-white">AI Momentum Scalper</p></div>
//                           <div><p className="text-gray-400">Risk Level:</p><p className="text-white">Medium (2.5%)</p></div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Floating Export Button - Centered Bottom */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
//         animate={{ boxShadow: ["0 0 20px rgba(34,211,238,0.8)", "0 0 40px rgba(34,211,238,1)", "0 0 20px rgba(34,211,238,0.8)"] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       </motion.button>
//     </div>
//   );
// }







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  ClockIcon,
  FunnelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';

// Adjust import path to your api file
import { apiClient } from '../../api/apiClient';; // or wherever your axios/fetch instance is

export default function TradingRecords() {
  const [filter, setFilter] = useState('all');
  const [expandedRow, setExpandedRow] = useState(null);
  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState({
    totalTrades: 0,
    totalProfit: 0,
    winRate: '0.0',
    avgTrade: '0.00',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const limit = 20; // items per page/load

  useEffect(() => {
    const fetchTrades = async () => {
      setLoading(true);
      setError('');

      try {
        // Adjust endpoint & params to match your backend
        const params = {
          page,
          limit,
          // Optional filters - send to backend when possible
          // status: filter === 'all' ? undefined : filter === 'profit' ? 'profit' : filter === 'loss' ? 'loss' : undefined,
          // recent: filter === 'recent' ? true : undefined,
        };

        const response = await apiClient.get('/api/trades', { params });
        const trades = response.data?.trades || response.data || [];

        setRecords(trades);

        // Compute stats client-side (or use a separate /api/trade-stats endpoint)
        const total = trades.length;
        const profits = trades.filter(t => (t.profit || t.pnl || 0) > 0).length;
        const totalPnl = trades.reduce((sum, t) => sum + (t.profit || t.pnl || 0), 0);
        const avg = total > 0 ? (trades.reduce((sum, t) => sum + (t.total || 0), 0) / total) : 0;

        setStats({
          totalTrades: total,
          totalProfit: totalPnl,
          winRate: total > 0 ? ((profits / total) * 100).toFixed(1) : '0.0',
          avgTrade: avg.toFixed(2),
        });
      } catch (err) {
        console.error(err);
        setError('Failed to load trading records. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrades();
  }, [page, filter]); // re-fetch on page/filter change

  const filteredRecords = records; // if backend doesn't filter, do it client-side
  // If you want client-side filter fallback:
  // const filteredRecords = records.filter(r => {
  //   if (filter === 'all') return true;
  //   if (filter === 'profit') return (r.profit || r.pnl || 0) > 0;
  //   if (filter === 'loss') return (r.profit || r.pnl || 0) < 0;
  //   if (filter === 'recent') return new Date(r.timestamp).getDate() === new Date().getDate();
  //   return true;
  // });

  const formatTimestamp = (ts) => {
    return new Date(ts).toLocaleString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle orange grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(orange 1px, transparent 1px), linear-gradient(90deg, orange 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 gap-6 sm:gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <CpuChipIcon className="w-10 h-10 text-orange-500" />
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-400">
              Trading Records
            </h1>
          </div>
          <p className="text-sm text-gray-400">Your trade history & performance</p>
        </motion.div>

        {/* Stats Cards */}
        {loading ? (
          <div className="flex justify-center py-12">
            <ArrowPathIcon className="w-10 h-10 text-orange-500 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-400">{error}</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { label: 'Total Trades', value: stats.totalTrades, icon: ChartBarIcon, color: 'from-orange-600 to-orange-500' },
              { label: 'Total PnL', value: `$${stats.totalProfit.toFixed(2)}`, icon: CurrencyDollarIcon, color: stats.totalProfit >= 0 ? 'from-orange-500 to-amber-500' : 'from-red-600 to-red-500' },
              { label: 'Win Rate', value: `${stats.winRate}%`, icon: ArrowTrendingUpIcon, color: 'from-orange-500 to-amber-600' },
              { label: 'Avg Trade Size', value: `$${stats.avgTrade}`, icon: ArrowTrendingDownIcon, color: 'from-orange-600 to-amber-500' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/80 backdrop-blur rounded-2xl p-5 border border-orange-900/40 shadow-lg hover:border-orange-700/60 transition-colors"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-orange-300">
            <FunnelIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Filter Trades</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['all', 'profit', 'loss', 'recent'].map((type) => (
              <motion.button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  filter === type
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-gray-800 border border-orange-800/50 hover:bg-gray-700 text-orange-300'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Records List */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="text-center py-16">
                <ArrowPathIcon className="w-12 h-12 text-orange-500 animate-spin mx-auto" />
                <p className="text-gray-400 mt-4">Loading trade history...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16 text-red-400">{error}</div>
            ) : filteredRecords.length === 0 ? (
              <div className="text-center py-16">
                <ChartBarIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300">No trades found</h3>
                <p className="text-gray-500 mt-2">Adjust filters or make your first trade</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecords.map((record, idx) => (
                  <motion.div
                    key={record.id || idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="bg-gray-900/80 backdrop-blur rounded-2xl border border-orange-900/40 overflow-hidden shadow-lg hover:border-orange-700/60 transition-colors"
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">{record.pair || record.symbol}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            (record.type || record.side) === 'BUY'
                              ? 'bg-orange-600/20 text-orange-400 border border-orange-600/40'
                              : 'bg-red-600/20 text-red-400 border border-red-600/40'
                          }`}
                        >
                          {record.type || record.side || 'TRADE'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 text-xs">Amount</p>
                          <p className="text-white font-medium">{record.amount?.toFixed(4) || '—'}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Price</p>
                          <p className="text-white font-medium">${(record.price || 0).toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Total</p>
                          <p className="text-white font-medium">${(record.total || 0).toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">PnL</p>
                          <p
                            className={`font-bold ${
                              (record.profit || record.pnl || 0) >= 0 ? 'text-orange-400' : 'text-red-400'
                            }`}
                          >
                            {(record.profit || record.pnl || 0) >= 0 ? '+' : ''}$
                            {Math.abs(record.profit || record.pnl || 0).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Status</p>
                          <span
                            className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium ${
                              record.status === 'open'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-gray-700/40 text-gray-300 border border-gray-600/40'
                            }`}
                          >
                            {record.status?.toUpperCase() || 'CLOSED'}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Time</p>
                          <p className="text-gray-300 text-xs flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1.5" />
                            {formatTimestamp(record.timestamp || record.createdAt)}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedRow(expandedRow === record.id ? null : record.id)}
                        className="mt-5 w-full flex items-center justify-center gap-2 text-orange-400 hover:text-orange-300 transition text-sm font-medium"
                      >
                        {expandedRow === record.id ? 'Hide Details' : 'View Details'}
                        {expandedRow === record.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedRow === record.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-orange-900/40 bg-gray-950/60 px-5 sm:px-6 py-5 text-sm"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><span className="text-gray-400">Entry Time:</span> <span className="text-white">{formatTimestamp(record.entryTime || record.timestamp)}</span></div>
                            <div><span className="text-gray-400">Duration:</span> <span className="text-white">{record.duration || '—'}</span></div>
                            <div><span className="text-gray-400">Strategy:</span> <span className="text-white">{record.strategy || 'Manual / AI'}</span></div>
                            <div><span className="text-gray-400">Risk:</span> <span className="text-white">{record.risk || '—'}</span></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Simple Load More / Pagination */}
          {!loading && records.length >= limit && (
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage(p => p + 1)}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-xl shadow-lg transition"
              >
                Load More
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}