



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { createWithdrawal, getWithdrawals } from '../../api/withdrawlApi';

// export default function Withdrawal() {
//   const [amount, setAmount] = useState('');
//   const [cryptocurrency, setCryptocurrency] = useState('BTC');
//   const [address, setAddress] = useState('');
//   const [withdrawals, setWithdrawals] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [historyLoading, setHistoryLoading] = useState(true);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const cryptoOptions = [
//     { value: 'BTC', label: 'Bitcoin (BTC)' },
//     { value: 'ETH', label: 'Ethereum (ETH)' },
//     { value: 'USDT', label: 'Tether (USDT)' },
//     { value: 'BNB', label: 'Binance Coin (BNB)' },
//     { value: 'SOL', label: 'Solana (SOL)' },
//     // ... add more if needed
//   ];

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const fetchHistory = async () => {
//     try {
//       setHistoryLoading(true);
//       const res = await getWithdrawals();
//       setWithdrawals(res || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setHistoryLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic client-side validation
//     const parsedAmount = parseFloat(amount);
//     if (isNaN(parsedAmount) || parsedAmount <= 0) {
//       setError('Please enter a valid amount greater than 0');
//       return;
//     }
//     if (!address.trim()) {
//       setError('Wallet address is required');
//       return;
//     }

//     setLoading(true);
//     setMessage('');
//     setError('');

//     try {
//       // Updated payload structure as requested
//       await createWithdrawal({
//         cryptoAmount: parsedAmount,           // ← changed from amount
//         cryptocurrency,
//         walletAddress: address.trim(),
//       });

//       setMessage('Withdrawal request submitted! (Pending admin approval)');
//       setAmount('');
//       setAddress('');
//       setCryptocurrency('BTC');
//       fetchHistory(); // refresh list
//     } catch (err) {
//       // Try to show the most useful message
//       const serverMsg = err.response?.data?.message;
//       setError(
//         serverMsg ||
//         err.message ||
//         'Failed to submit withdrawal. Please try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold mb-8 text-orange-400 text-center"
//       >
//         Withdraw Earnings
//       </motion.h1>

//       <div className="max-w-4xl mx-auto space-y-10">
//         {/* Form Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="bg-gray-900 p-8 rounded-2xl border border-orange-900/40 shadow-2xl"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-orange-300 mb-2">
//                 Amount (from profits only)
//               </label>
//               <input
//                 type="number"
//                 step="any"
//                 min="0"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="0.005"
//                 className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-orange-300 mb-2">
//                 Cryptocurrency
//               </label>
//               <select
//                 value={cryptocurrency}
//                 onChange={(e) => setCryptocurrency(e.target.value)}
//                 className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
//                 required
//                 disabled={loading}
//               >
//                 {cryptoOptions.map(opt => (
//                   <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-orange-300 mb-2">
//                 Wallet Address
//               </label>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="Enter your external wallet address"
//                 className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading || !amount || parseFloat(amount) <= 0 || !address.trim()}
//               className={`w-full py-4 px-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] shadow-lg ${
//                 loading || !amount || parseFloat(amount) <= 0 || !address.trim()
//                   ? 'opacity-60 cursor-not-allowed'
//                   : ''
//               }`}
//             >
//               {loading ? 'Processing...' : 'Request Withdrawal'}
//             </button>
//           </form>

//           {message && (
//             <p className="mt-6 text-center text-green-400 font-medium">{message}</p>
//           )}
//           {error && (
//             <p className="mt-6 text-center text-red-400 font-medium">{error}</p>
//           )}
//         </motion.div>

//         {/* Withdrawal History */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="bg-gray-900 p-6 rounded-2xl border border-orange-900/40"
//         >
//           <h2 className="text-2xl font-semibold mb-6 text-orange-300">
//             Withdrawal History
//           </h2>

//           {historyLoading ? (
//             <p className="text-gray-400">Loading...</p>
//           ) : withdrawals.length === 0 ? (
//             <p className="text-gray-400 text-center py-8">
//               No withdrawal requests yet.
//             </p>
//           ) : (
//             <div className="space-y-4">
//               {withdrawals.map(wd => (
//                 <div
//                   key={wd.id || wd._id}
//                   className="flex justify-between items-center p-4 bg-gray-800/70 rounded-xl border border-orange-900/30"
//                 >
//                   <div>
//                     <p className="font-medium">
//                       {wd.cryptoAmount ?? wd.amount} {wd.cryptocurrency}
//                     </p>
//                     <p className="text-sm text-gray-400">
//                       {wd.walletAddress?.slice(0, 8)}...
//                       {wd.walletAddress?.slice(-6)}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p
//                       className={`font-semibold ${
//                         wd.status === 'pending'
//                           ? 'text-orange-400'
//                           : wd.status === 'approved'
//                           ? 'text-green-400'
//                           : 'text-red-400'
//                       }`}
//                     >
//                       {wd.status?.toUpperCase() || 'PENDING'}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {wd.createdAt
//                         ? new Date(wd.createdAt).toLocaleDateString()
//                         : '—'}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// }





// Withdrawal.jsx  (or wherever this component lives)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createWithdrawal, getWithdrawals } from '../../api/withdrawlApi';
import { useTheme } from '../ui/ThemeContext';   // ← import this

export default function Withdrawal() {
  const { theme, toggleTheme } = useTheme();           // ← consume theme & toggle

  const [amount, setAmount] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('BTC');
  const [address, setAddress] = useState('');
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const cryptoOptions = [
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'USDT', label: 'Tether (USDT)' },
    { value: 'BNB', label: 'Binance Coin (BNB)' },
    { value: 'SOL', label: 'Solana (SOL)' },
  ];

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setHistoryLoading(true);
      const res = await getWithdrawals();
      setWithdrawals(res || []);
    } catch (err) {
      console.error(err);
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0');
      return;
    }
    if (!address.trim()) {
      setError('Wallet address is required');
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    try {
      await createWithdrawal({
        cryptoAmount: parsedAmount,
        cryptocurrency,
        walletAddress: address.trim(),
      });

      setMessage('Withdrawal request submitted! (Pending admin approval)');
      setAmount('');
      setAddress('');
      setCryptocurrency('BTC');
      fetchHistory();
    } catch (err) {
      const serverMsg = err.response?.data?.message;
      setError(serverMsg || err.message || 'Failed to submit withdrawal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white p-6 transition-colors duration-300">
      {/* Theme toggle – positioned top-right */}
     

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 
                   text-orange-600 dark:text-orange-400 text-center"
      >
        Withdraw Earnings
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900/95 
                     p-6 sm:p-8 rounded-2xl 
                     border border-gray-200 dark:border-gray-800/60 
                     shadow-lg dark:shadow-2xl transition-all duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount (from profits only)
              </label>
              <input
                type="number"
                step="any"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.005"
                className="w-full px-4 py-3.5 sm:px-5 sm:py-4 
                           bg-gray-100 dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700 
                           rounded-xl text-gray-900 dark:text-white 
                           placeholder-gray-500 
                           focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 
                           outline-none transition"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cryptocurrency
              </label>
              <select
                value={cryptocurrency}
                onChange={(e) => setCryptocurrency(e.target.value)}
                className="w-full px-4 py-3.5 sm:px-5 sm:py-4 
                           bg-gray-100 dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700 
                           rounded-xl text-gray-900 dark:text-white 
                           focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 
                           outline-none transition"
                required
                disabled={loading}
              >
                {cryptoOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Wallet Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your external wallet address"
                className="w-full px-4 py-3.5 sm:px-5 sm:py-4 
                           bg-gray-100 dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700 
                           rounded-xl text-gray-900 dark:text-white 
                           placeholder-gray-500 
                           focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 
                           outline-none transition"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !amount || parseFloat(amount) <= 0 || !address.trim()}
              className={`w-full py-4 px-6 
                         bg-orange-600 hover:bg-orange-700 
                         dark:bg-orange-600 dark:hover:bg-orange-500 
                         text-white font-semibold rounded-xl 
                         transition transform hover:scale-[1.015] 
                         shadow-md active:scale-[0.98]
                         ${loading || !amount || parseFloat(amount) <= 0 || !address.trim()
                           ? 'opacity-60 cursor-not-allowed'
                           : ''}`}
            >
              {loading ? 'Processing...' : 'Request Withdrawal'}
            </button>
          </form>

          {message && (
            <p className="mt-6 text-center text-green-600 dark:text-green-400 font-medium">
              {message}
            </p>
          )}
          {error && (
            <p className="mt-6 text-center text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
          )}
        </motion.div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900/95 
                     p-6 sm:p-8 rounded-2xl 
                     border border-gray-200 dark:border-gray-800/60 
                     shadow-lg dark:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Withdrawal History
          </h2>

          {historyLoading ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">Loading...</p>
          ) : withdrawals.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-10">
              No withdrawal requests yet.
            </p>
          ) : (
            <div className="space-y-4">
              {withdrawals.map(wd => (
                <div
                  key={wd._id || wd.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                             gap-3 p-4 
                             bg-gray-50 dark:bg-gray-800/60 
                             rounded-xl border border-gray-200 dark:border-gray-700/50 
                             transition-colors"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {wd.cryptoAmount ?? wd.amount} {wd.cryptocurrency}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {wd.walletAddress?.slice(0, 8)}…{wd.walletAddress?.slice(-6)}
                    </p>
                  </div>
                  <div className="text-right sm:min-w-[140px]">
                    <p
                      className={`font-semibold ${
                        wd.status === 'pending'
                          ? 'text-orange-600 dark:text-orange-400'
                          : wd.status === 'approved'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {wd.status?.toUpperCase() || 'PENDING'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {wd.createdAt
                        ? new Date(wd.createdAt).toLocaleDateString('en-GB')
                        : '—'}
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