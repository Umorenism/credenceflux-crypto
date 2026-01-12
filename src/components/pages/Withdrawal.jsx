
// import React, { useState } from 'react';
// import { createWithdrawal } from '../../api/walletapi'; // Adjust path if needed

// export default function Withdrawal() {
//   const [amount, setAmount] = useState('');
//   const [cryptocurrency, setCryptocurrency] = useState('BTC');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   // List of supported cryptocurrencies
//   const cryptoOptions = [
//     { value: 'BTC', label: 'Bitcoin (BTC)' },
//     { value: 'ETH', label: 'Ethereum (ETH)' },
//     { value: 'USDT', label: 'Tether (USDT)' },
//     { value: 'BNB', label: 'Binance Coin (BNB)' },
//     { value: 'SOL', label: 'Solana (SOL)' },
//     { value: 'XRP', label: 'Ripple (XRP)' },
//     { value: 'ADA', label: 'Cardano (ADA)' },
//     { value: 'DOGE', label: 'Dogecoin (DOGE)' },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage('');
//     setError('');

//     try {
//       const response = await createWithdrawal({
//         amount: parseFloat(amount),
//         cryptocurrency,
//         walletAddress: address.trim(),
//       });

//       // Assuming success if no error is thrown
//       setMessage('Withdrawal request submitted successfully! 🚀');
//       setAmount('');
//       setAddress('');
//       setCryptocurrency('BTC');
//       console.log('Withdrawal response:', response.data); // Optional: log response
//     } catch (err) {
//       console.error('Withdrawal error:', err);

//       // Handle different error types
//       const errorMsg =
//         err.response?.data?.message ||
//         err.message ||
//         'Withdrawal failed. Please check your details and try again.';

//       setError(errorMsg);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       <div className="w-full max-w-5xl bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-cyan-500/30 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-cyan-500/50">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-6 animate-pulse">
//           CREDENCEFLUX Withdrawal Portal
//         </h1>
//         <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
//           Securely transfer your crypto assets. Enter details below.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="amount" className="block text-sm font-medium text-cyan-300 mb-2">
//               Amount
//             </label>
//             <input
//               type="number"
//               step="any"
//               min="0"
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="e.g., 0.005"
//               className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
//               required
//             />
//             <p className="mt-1 text-xs text-gray-400">
//               You are withdrawing {amount || '0'} {cryptocurrency}
//             </p>
//           </div>

//           <div>
//             <label htmlFor="cryptocurrency" className="block text-sm font-medium text-cyan-300 mb-2">
//               Cryptocurrency
//             </label>
//             <select
//               id="cryptocurrency"
//               value={cryptocurrency}
//               onChange={(e) => setCryptocurrency(e.target.value)}
//               className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
//               required
//             >
//               {cryptoOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-cyan-300 mb-2">
//               Wallet Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter recipient wallet address"
//               className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading || !amount || !address || amount <= 0}
//             className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
//               isLoading || !amount || !address || amount <= 0
//                 ? 'opacity-50 cursor-not-allowed'
//                 : ''
//             }`}
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin h-5 w-5 mr-3 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               'Initiate Withdrawal'
//             )}
//           </button>
//         </form>

//         {message && (
//           <div className="mt-6 text-center text-green-400 font-semibold animate-fade-in">
//             {message}
//           </div>
//         )}

//         {error && (
//           <div className="mt-6 text-center text-red-400 font-semibold animate-fade-in">
//             {error}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { createWithdrawal, getWithdrawals } from '../../api/transcationhistoryapi'; // your existing file

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
//     setLoading(true);
//     setMessage('');
//     setError('');

//     try {
//       await createWithdrawal({
//         amount: parseFloat(amount),
//         cryptocurrency,
//         walletAddress: address.trim(),
//       });
//       setMessage('Withdrawal request submitted! (Pending admin approval)');
//       setAmount('');
//       setAddress('');
//       setCryptocurrency('BTC');
//       fetchHistory(); // refresh list
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Failed to submit withdrawal.';
//       setError(msg);
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
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading || !amount || parseFloat(amount) <= 0 || !address}
//               className={`w-full py-4 px-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] shadow-lg ${
//                 loading || !amount || parseFloat(amount) <= 0 || !address ? 'opacity-60 cursor-not-allowed' : ''
//               }`}
//             >
//               {loading ? 'Processing...' : 'Request Withdrawal'}
//             </button>
//           </form>

//           {message && <p className="mt-6 text-center text-green-400 font-medium">{message}</p>}
//           {error && <p className="mt-6 text-center text-red-400 font-medium">{error}</p>}
//         </motion.div>

//         {/* Withdrawal History */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="bg-gray-900 p-6 rounded-2xl border border-orange-900/40"
//         >
//           <h2 className="text-2xl font-semibold mb-6 text-orange-300">Withdrawal History</h2>

//           {historyLoading ? (
//             <p className="text-gray-400">Loading...</p>
//           ) : withdrawals.length === 0 ? (
//             <p className="text-gray-400 text-center py-8">No withdrawal requests yet.</p>
//           ) : (
//             <div className="space-y-4">
//               {withdrawals.map(wd => (
//                 <div
//                   key={wd.id}
//                   className="flex justify-between items-center p-4 bg-gray-800/70 rounded-xl border border-orange-900/30"
//                 >
//                   <div>
//                     <p className="font-medium">{wd.amount} {wd.cryptocurrency}</p>
//                     <p className="text-sm text-gray-400">{wd.walletAddress.slice(0,8)}...{wd.walletAddress.slice(-6)}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className={`font-semibold ${
//                       wd.status === 'pending' ? 'text-orange-400' :
//                       wd.status === 'approved' ? 'text-green-400' :
//                       'text-red-400'
//                     }`}>
//                       {wd.status?.toUpperCase() || 'PENDING'}
//                     </p>
//                     <p className="text-xs text-gray-500">{new Date(wd.createdAt).toLocaleDateString()}</p>
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




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createWithdrawal, getWithdrawals } from '../../api/withdrawlApi';

export default function Withdrawal() {
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
    // ... add more if needed
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

    // Basic client-side validation
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
      // Updated payload structure as requested
      await createWithdrawal({
        cryptoAmount: parsedAmount,           // ← changed from amount
        cryptocurrency,
        walletAddress: address.trim(),
      });

      setMessage('Withdrawal request submitted! (Pending admin approval)');
      setAmount('');
      setAddress('');
      setCryptocurrency('BTC');
      fetchHistory(); // refresh list
    } catch (err) {
      // Try to show the most useful message
      const serverMsg = err.response?.data?.message;
      setError(
        serverMsg ||
        err.message ||
        'Failed to submit withdrawal. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-orange-400 text-center"
      >
        Withdraw Earnings
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 p-8 rounded-2xl border border-orange-900/40 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-orange-300 mb-2">
                Amount (from profits only)
              </label>
              <input
                type="number"
                step="any"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.005"
                className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-300 mb-2">
                Cryptocurrency
              </label>
              <select
                value={cryptocurrency}
                onChange={(e) => setCryptocurrency(e.target.value)}
                className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
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
              <label className="block text-sm font-medium text-orange-300 mb-2">
                Wallet Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your external wallet address"
                className="w-full px-5 py-4 bg-gray-800 border border-orange-800/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !amount || parseFloat(amount) <= 0 || !address.trim()}
              className={`w-full py-4 px-6 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] shadow-lg ${
                loading || !amount || parseFloat(amount) <= 0 || !address.trim()
                  ? 'opacity-60 cursor-not-allowed'
                  : ''
              }`}
            >
              {loading ? 'Processing...' : 'Request Withdrawal'}
            </button>
          </form>

          {message && (
            <p className="mt-6 text-center text-green-400 font-medium">{message}</p>
          )}
          {error && (
            <p className="mt-6 text-center text-red-400 font-medium">{error}</p>
          )}
        </motion.div>

        {/* Withdrawal History */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 p-6 rounded-2xl border border-orange-900/40"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300">
            Withdrawal History
          </h2>

          {historyLoading ? (
            <p className="text-gray-400">Loading...</p>
          ) : withdrawals.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No withdrawal requests yet.
            </p>
          ) : (
            <div className="space-y-4">
              {withdrawals.map(wd => (
                <div
                  key={wd.id || wd._id}
                  className="flex justify-between items-center p-4 bg-gray-800/70 rounded-xl border border-orange-900/30"
                >
                  <div>
                    <p className="font-medium">
                      {wd.cryptoAmount ?? wd.amount} {wd.cryptocurrency}
                    </p>
                    <p className="text-sm text-gray-400">
                      {wd.walletAddress?.slice(0, 8)}...
                      {wd.walletAddress?.slice(-6)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        wd.status === 'pending'
                          ? 'text-orange-400'
                          : wd.status === 'approved'
                          ? 'text-green-400'
                          : 'text-red-400'
                      }`}
                    >
                      {wd.status?.toUpperCase() || 'PENDING'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {wd.createdAt
                        ? new Date(wd.createdAt).toLocaleDateString()
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