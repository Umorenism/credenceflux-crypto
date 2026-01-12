



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BanknotesIcon,
//   ArrowTrendingUpIcon,
//   ArrowDownTrayIcon,
//   ArrowUpTrayIcon,
//   ChartBarIcon,
// } from '@heroicons/react/24/solid';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// import { userService } from '../../api/userApi';

// // Assume you have or will create this API file
// import { getCryptoChart } from '../../api/cryptoApi'; // ← create this

// const DEFAULT_CRYPTO = 'bitcoin'; // or 'btc' — match your backend id

// export default function Home() {
//   const [dashboardData, setDashboardData] = useState({
//     balance: 0,
//     totalProfit: 0,
//     totalDeposit: 0,
//     totalWithdrawal: 0,
//     userName: 'User',
//   });
//   const [chartData, setChartData] = useState([]);
//   const [selectedCrypto, setSelectedCrypto] = useState(DEFAULT_CRYPTO);
//   const [chartLoading, setChartLoading] = useState(true);
//   const [chartError, setChartError] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Dashboard summary
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

//   // Crypto chart
//   useEffect(() => {
//     const fetchChart = async () => {
//       setChartLoading(true);
//       setChartError('');
//       try {
//         const res = await getCryptoChart(selectedCrypto);
//         // Adjust based on your actual response shape
//         // Example expected: [{ timestamp: "2025-01-01", price: 95000 }, ...]
//         const formatted = (res.data || []).map(item => ({
//           time: item.timestamp || item.time || item.date,
//           price: Number(item.price || item.close || item.value || 0),
//         }));
//         setChartData(formatted);
//       } catch (err) {
//         console.error('Chart fetch error:', err);
//         setChartError('Failed to load price chart');
//       } finally {
//         setChartLoading(false);
//       }
//     };

//     fetchChart();
//   }, [selectedCrypto]);

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
//       {/* Subtle background pattern */}
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

//         {/* Crypto Price Chart Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-orange-900/40 shadow-xl"
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//             <h2 className="text-2xl font-semibold text-orange-300">Bitcoin Price Trend</h2>
//             <select
//               value={selectedCrypto}
//               onChange={(e) => setSelectedCrypto(e.target.value)}
//               className="bg-gray-800 border border-orange-700/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
//             >
//               <option value="bitcoin">Bitcoin (BTC)</option>
//               <option value="ethereum">Ethereum (ETH)</option>
//               <option value="solana">Solana (SOL)</option>
//               <option value="usdt">Tether (USDT)</option>
//               {/* Add more from your /api/crypto/prices endpoint later */}
//             </select>
//           </div>

//           {chartLoading ? (
//             <div className="h-64 flex items-center justify-center">
//               <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
//             </div>
//           ) : chartError ? (
//             <p className="text-red-400 text-center py-10">{chartError}</p>
//           ) : chartData.length === 0 ? (
//             <p className="text-gray-400 text-center py-10">No chart data available</p>
//           ) : (
//             <div className="h-64 sm:h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart
//                   data={chartData}
//                   margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
//                 >
//                   <defs>
//                     <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                   <XAxis
//                     dataKey="time"
//                     stroke="#9ca3af"
//                     tick={{ fontSize: 12 }}
//                     tickFormatter={(val) => val.slice(5, 10)} // e.g., "01-12"
//                   />
//                   <YAxis
//                     stroke="#9ca3af"
//                     tick={{ fontSize: 12 }}
//                     tickFormatter={(val) => `$${val.toLocaleString()}`}
//                   />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: '#1f2937',
//                       border: '1px solid #374151',
//                       borderRadius: '8px',
//                       color: '#f3f4f6',
//                     }}
//                     formatter={(val) => [`$${val.toLocaleString()}`, 'Price']}
//                     labelFormatter={(label) => label}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="price"
//                     stroke="#f97316"
//                     fillOpacity={1}
//                     fill="url(#colorPrice)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </motion.div>

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

//         {/* Placeholder */}
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






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BanknotesIcon,
//   ArrowTrendingUpIcon,
//   ArrowDownTrayIcon,
//   ArrowUpTrayIcon,
//   ChartBarIcon,
// } from '@heroicons/react/24/solid';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// import { userService } from '../../api/userApi';
// import { getCryptoChart } from '../../api/cryptoApi'; // ← your file

// import { useTheme } from '../ui/ThemeContext'; // adjust path to your ThemeContext

// const DEFAULT_CRYPTO = 'bitcoin';

// export default function Home() {
//   const { theme } = useTheme(); // 'light' | 'dark'

//   const isDark = theme === 'dark';

//   const [dashboardData, setDashboardData] = useState({
//     balance: 0,
//     totalProfit: 0,
//     totalDeposit: 0,
//     totalWithdrawal: 0,
//     userName: 'User',
//   });
//   const [chartData, setChartData] = useState([]);
//   const [selectedCrypto, setSelectedCrypto] = useState(DEFAULT_CRYPTO);
//   const [chartLoading, setChartLoading] = useState(true);
//   const [chartError, setChartError] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Dashboard summary
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

//   // Crypto chart
//   useEffect(() => {
//     const fetchChart = async () => {
//       setChartLoading(true);
//       setChartError('');
//       try {
//         const res = await getCryptoChart(selectedCrypto);
//         const formatted = (res.data || []).map(item => ({
//           time: item.timestamp || item.time || item.date,
//           price: Number(item.price || item.close || item.value || 0),
//         }));
//         setChartData(formatted);
//       } catch (err) {
//         console.error('Chart fetch error:', err);
//         setChartError('Failed to load price chart');
//       } finally {
//         setChartLoading(false);
//       }
//     };

//     fetchChart();
//   }, [selectedCrypto]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
//           className="w-12 h-12 border-4 border-orange-600 dark:border-orange-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 relative overflow-hidden">
//       {/* Subtle background pattern – toned down in dark mode */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
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
//           className="text-4xl font-bold text-orange-600 dark:text-orange-500"
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
//               className="
//                 bg-white dark:bg-gray-900 
//                 p-6 rounded-2xl 
//                 border border-gray-200 dark:border-orange-900/30 
//                 shadow-lg dark:shadow-xl 
//                 hover:border-orange-400 dark:hover:border-orange-700/50 
//                 transition-colors
//               "
//             >
//               <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4`}>
//                 <item.icon className="w-8 h-8 text-white" />
//               </div>
//               <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{item.title}</p>
//               <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//                 ${item.value.toFixed(2)}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Crypto Price Chart Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="
//             bg-white dark:bg-gray-900 
//             p-6 md:p-8 rounded-2xl 
//             border border-gray-200 dark:border-orange-900/30 
//             shadow-lg dark:shadow-xl
//           "
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//             <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
//               {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price Trend
//             </h2>
//             <select
//               value={selectedCrypto}
//               onChange={(e) => setSelectedCrypto(e.target.value)}
//               className="
//                 bg-gray-100 dark:bg-gray-800 
//                 border border-gray-300 dark:border-orange-800/50 
//                 rounded-lg px-4 py-2 
//                 text-gray-900 dark:text-gray-200 
//                 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500
//               "
//             >
//               <option value="bitcoin">Bitcoin (BTC)</option>
//               <option value="ethereum">Ethereum (ETH)</option>
//               <option value="solana">Solana (SOL)</option>
//               <option value="usdt">Tether (USDT)</option>
//             </select>
//           </div>

//           {chartLoading ? (
//             <div className="h-64 flex items-center justify-center">
//               <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
//             </div>
//           ) : chartError ? (
//             <p className="text-red-600 dark:text-red-400 text-center py-10">{chartError}</p>
//           ) : chartData.length === 0 ? (
//             <p className="text-gray-500 dark:text-gray-400 text-center py-10">No chart data available</p>
//           ) : (
//             <div className="h-64 sm:h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart
//                   data={chartData}
//                   margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
//                 >
//                   <defs>
//                     <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#f97316" stopOpacity={isDark ? 0.7 : 0.8} />
//                       <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     stroke={isDark ? "#374151" : "#d1d5db"}
//                   />
//                   <XAxis
//                     dataKey="time"
//                     stroke={isDark ? "#9ca3af" : "#6b7280"}
//                     tick={{ fontSize: 12 }}
//                     tickFormatter={(val) => val.slice(5, 10)}
//                   />
//                   <YAxis
//                     stroke={isDark ? "#9ca3af" : "#6b7280"}
//                     tick={{ fontSize: 12 }}
//                     tickFormatter={(val) => `$${val.toLocaleString()}`}
//                   />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: isDark ? '#1f2937' : '#ffffff',
//                       border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
//                       borderRadius: '8px',
//                       color: isDark ? '#f3f4f6' : '#111827',
//                     }}
//                     formatter={(val) => [`$${val.toLocaleString()}`, 'Price']}
//                     labelFormatter={(label) => label}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="price"
//                     stroke="#f97316"
//                     fillOpacity={1}
//                     fill="url(#colorPrice)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </motion.div>

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
//               className={`
//                 bg-gradient-to-br ${btn.color}
//                 p-6 rounded-2xl text-white font-semibold text-lg
//                 flex items-center justify-center gap-3
//                 shadow-lg hover:shadow-xl dark:hover:shadow-orange-500/20
//                 transition-all
//               `}
//             >
//               <btn.icon className="w-7 h-7" />
//               {btn.label}
//             </motion.button>
//           ))}
//         </div>

//         {/* Placeholder */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="
//             bg-white dark:bg-gray-900 
//             p-8 rounded-2xl 
//             border border-gray-200 dark:border-orange-900/30
//           "
//         >
//           <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-6">
//             Quick Overview
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
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
import { getCryptoChart } from '../../api/cryptoApi';
import { useTheme } from '../ui/ThemeContext';

const DEFAULT_CRYPTO = 'bitcoin';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [dashboardData, setDashboardData] = useState({
    balance: 0,
    totalProfit: 0,
    totalDeposit: 0,
    totalWithdrawal: 0,
  });

  const [fullName, setFullName] = useState('User');
  const [chartData, setChartData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(DEFAULT_CRYPTO);
  const [chartLoading, setChartLoading] = useState(true);
  const [chartError, setChartError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch dashboard + profile in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashRes, profileRes] = await Promise.all([
          userService.getDashboardSummary(),
          userService.getProfile(),
        ]);

        setDashboardData({
          balance: Number(dashRes.balance) || 0,
          totalProfit: Number(dashRes.totalProfit) || 0,
          totalDeposit: Number(dashRes.totalDeposit) || 0,
          totalWithdrawal: Number(dashRes.totalWithdrawal) || 0,
        });

        setFullName(profileRes.fullName || 'User');
      } catch (err) {
        console.error('Data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Crypto chart
  useEffect(() => {
    const fetchChart = async () => {
      setChartLoading(true);
      setChartError('');
      try {
        const res = await getCryptoChart(selectedCrypto);
        const formatted = (res.data || []).map((item) => ({
          time: item.timestamp || item.time || item.date,
          price: Number(item.price || item.close || item.value) || 0,
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-orange-600 dark:border-orange-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  // Safe currency formatting (no trailing comma)
  const formatCurrency = (value) => {
    return Number(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Falling cash animation variants
  const cashVariants = {
    initial: { y: -120, opacity: 0, rotate: -15 },
    animate: (i) => ({
      y: '140%',
      opacity: [0, 0.85, 0],
      rotate: [-15, 12, -8],
      transition: {
        duration: 4.2 + i * 0.7,
        repeat: Infinity,
        delay: i * 0.55,
        ease: 'easeIn'
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 md:p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 12% 22%, #fb923c 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10 md:space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-500"
        >
          Welcome back, {fullName.split(' ')[0]}
        </motion.h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {[
            {
              title: 'Account Balance',
              value: dashboardData.balance,
              icon: BanknotesIcon,
              color: 'from-orange-600 to-orange-500'
            },
            {
              title: 'Total Profit',
              value: dashboardData.totalProfit,
              icon: ArrowTrendingUpIcon,
              color: 'from-emerald-600 to-emerald-500'
            },
            {
              title: 'Total Deposits',
              value: dashboardData.totalDeposit,
              icon: ArrowDownTrayIcon,
              color: 'from-blue-600 to-blue-500'
            },
            {
              title: 'Total Withdrawals',
              value: dashboardData.totalWithdrawal,
              icon: ArrowUpTrayIcon,
              color: 'from-red-600 to-red-500'
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.5 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {item.title === 'Account Balance' && dashboardData.balance > 0 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={cashVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute text-4xl text-orange-400/50 dark:text-orange-500/40 font-black select-none"
                      style={{
                        left: `${(idx % 5) * 20 + Math.random() * 12 - 6}%`,
                        top: '-20%'
                      }}
                    >
                      $
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="p-5 md:p-6">
                <div className={`inline-flex p-3.5 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-md`}>
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1.5">
                  {item.title}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                  ${formatCurrency(item.value)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {[
            { label: 'Deposit', icon: ArrowDownTrayIcon, color: 'from-emerald-600 to-emerald-500', path: '/wallet' },
            { label: 'Withdraw', icon: ArrowUpTrayIcon, color: 'from-red-600 to-red-500', path: '/withdraw' },
            { label: 'Trade Now', icon: ChartBarIcon, color: 'from-orange-600 to-orange-500', path: '/trade' }
          ].map((btn, i) => (
            <motion.button
              key={btn.label}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = btn.path}
              className={`bg-gradient-to-br ${btn.color} p-5 md:p-6 rounded-2xl text-white font-semibold text-base md:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <btn.icon className="w-6 h-6 md:w-7 md:h-7" />
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Crypto Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800/60 shadow-md p-5 md:p-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 dark:text-orange-400">
              {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)} Price
            </h2>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            >
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="usdt">Tether (USDT)</option>
            </select>
          </div>

          {chartLoading ? (
            <div className="h-64 md:h-80 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : chartError ? (
            <p className="text-red-600 dark:text-red-400 text-center py-16">{chartError}</p>
          ) : chartData.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-16">No chart data available</p>
          ) : (
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 12, right: 12, left: -12, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={isDark ? 0.65 : 0.75} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                  <XAxis
                    dataKey="time"
                    stroke={isDark ? '#9ca3af' : '#6b7280'}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(v) => v?.slice(5, 10) || ''}
                  />
                  <YAxis
                    stroke={isDark ? '#9ca3af' : '#6b7280'}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(v) => `$${Number(v).toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#1f2937' : 'white',
                      borderColor: isDark ? '#374151' : '#e5e7eb',
                      borderRadius: '10px',
                      color: isDark ? '#f3f4f6' : '#111827'
                    }}
                    formatter={(val) => [`$${Number(val).toLocaleString()}`, 'Price']}
                  />
                  <Area type="monotone" dataKey="price" stroke="#f97316" fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800/60 p-6 md:p-8 shadow-md"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-5">
            Getting Started
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Use the sidebar to access your wallet, view trading history, manage investments, refer friends, or get support.
            Start by making your first deposit or exploring active trades.
          </p>
        </motion.div>
      </div>
    </div>
  );
}