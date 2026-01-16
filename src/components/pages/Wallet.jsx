




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   WalletIcon,
//   QrCodeIcon,
//   DocumentDuplicateIcon,
//   ArrowPathIcon,
//   CheckCircleIcon,
//   XMarkIcon,
//   ClockIcon,
// } from '@heroicons/react/24/solid';
// import QRCode from 'react-qr-code';

// import {
//   createDeposit,
//   getDepositHistory,
//   checkDepositStatus,
// } from '../../api/depositapi';

// import { useTheme } from '../ui/ThemeContext'; // ← make sure this path is correct

// export default function Deposit() {
//   const { theme } = useTheme(); // 'light' | 'dark'
//   const isDark = theme === 'dark';

//   const [amount, setAmount] = useState('');
//   const [depositLoading, setDepositLoading] = useState(false);
//   const [depositResult, setDepositResult] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyLoading, setHistoryLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [copied, setCopied] = useState(false);
//   const [polling, setPolling] = useState(false);

//   useEffect(() => {
//     loadHistory();
//   }, []);

//   const loadHistory = async () => {
//     try {
//       setHistoryLoading(true);
//       const res = await getDepositHistory();
//       setHistory(res.data || []);
//     } catch (err) {
//       console.error(err);
//       setHistory([]);
//     } finally {
//       setHistoryLoading(false);
//     }
//   };

//   const handleCreateDeposit = async (e) => {
//     e.preventDefault();
//     const numAmount = parseFloat(amount);
//     if (isNaN(numAmount) || numAmount <= 0) {
//       setError('Please enter a valid amount greater than 0');
//       return;
//     }

//     setError('');
//     setMessage('');
//     setDepositLoading(true);

//     try {
//       const res = await createDeposit(numAmount);
//       const data = res.data;

//       setDepositResult(data);
//       setMessage('Deposit request created! Please send funds now.');
//       setAmount('');

//       loadHistory();

//       if (data?.paymentId) {
//         startPolling(data.paymentId);
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Failed to create deposit request.';
//       setError(msg);
//     } finally {
//       setDepositLoading(false);
//     }
//   };

//   const startPolling = (paymentId) => {
//     setPolling(true);
//     const interval = setInterval(async () => {
//       try {
//         const res = await checkDepositStatus(paymentId);
//         const status = res.data?.status;

//         setDepositResult((prev) => ({ ...prev, status }));

//         if (status === 'completed' || status === 'confirmed') {
//           clearInterval(interval);
//           setPolling(false);
//           setMessage('Deposit confirmed! Balance updated.');
//           loadHistory();
//         }
//       } catch (err) {
//         console.warn('Polling error', err);
//       }
//     }, 8000);

//     return () => clearInterval(interval);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2200);
//   };

//   const shorten = (str) => (str ? `${str.slice(0, 8)}...${str.slice(-6)}` : '');

//   return (
//     <div
//       className={`
//         min-h-screen
//         ${isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}
//         p-6 relative transition-colors duration-300
//       `}
//     >
//       <div className="max-w-3xl mx-auto space-y-10 relative z-10">
//         {/* Create Deposit Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className={`
//             rounded-3xl border p-8 shadow-2xl backdrop-blur-xl
//             ${isDark 
//               ? 'bg-black/40 border-orange-600/30' 
//               : 'bg-white border-gray-200 shadow-xl'}
//           `}
//         >
//           <div className="text-center mb-8">
//             <WalletIcon
//               className={`w-16 h-16 mx-auto mb-4 ${
//                 isDark ? 'text-orange-400' : 'text-orange-600'
//               }`}
//             />
//             <h1
//               className={`
//                 text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent
//                 ${isDark 
//                   ? 'from-orange-400 to-orange-500' 
//                   : 'from-orange-600 to-orange-700'}
//               `}
//             >
//               Deposit Funds
//             </h1>
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
//               USDT (BSC)
//             </p>
//           </div>

//           <form onSubmit={handleCreateDeposit} className="space-y-6">
//             <div>
//               <label
//                 className={`block  text-sm font-medium mb-2 ${
//                   isDark ? 'text-orange-300/90' : 'text-orange-700'
//                 }`}
//               >
//                 Amount (USDT)
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="1"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="10.00"
//                 className={`
//                   w-full px-5 border py-4 rounded-xl placeholder-gray-500
//                   focus:outline-none focus:ring-2 transition
//                   ${isDark 
//                     ? 'bg-slate-900 border-orange-700/40 text-white focus:border-orange-500 focus:ring-orange-500/30' 
//                     : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-400/30'}
//                 `}
//                 disabled={depositLoading}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={depositLoading || !amount || parseFloat(amount) <= 0}
//               className={`
//                 w-full py-4 px-6 font-semibold rounded-xl transition transform
//                 hover:scale-[1.02] shadow-lg
//                 ${isDark 
//                   ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white' 
//                   : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white'}
//                 ${depositLoading ? 'opacity-60 cursor-not-allowed' : ''}
//               `}
//             >
//               {depositLoading ? 'Creating...' : 'Create Deposit Request'}
//             </button>
//           </form>

//           {error && (
//             <p className="mt-4 text-red-500 dark:text-red-400 text-center font-medium">
//               {error}
//             </p>
//           )}
//           {message && (
//             <p className="mt-4 text-green-500 dark:text-orange-300 text-center font-medium">
//               {message}
//             </p>
//           )}

//           {/* Payment Instructions / QR */}
//           <AnimatePresence>
//             {depositResult && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-8 overflow-hidden"
//               >
//                 <div
//                   className={`
//                     p-6 rounded-2xl border
//                     ${isDark 
//                       ? 'bg-slate-900/70 border-orange-600/30' 
//                       : 'bg-gray-50 border-gray-200 shadow-inner'}
//                   `}
//                 >
//                   <div className="flex justify-between items-center mb-4">
//                     <h3
//                       className={`text-lg font-semibold ${
//                         isDark ? 'text-orange-300' : 'text-orange-700'
//                       }`}
//                     >
//                       Payment Details
//                     </h3>
//                     <div className="flex items-center gap-2">
//                       {polling && (
//                         <ClockIcon className="w-5 h-5 text-amber-400 animate-pulse" />
//                       )}
//                       <span
//                         className={`text-sm capitalize ${
//                           isDark ? 'text-gray-300' : 'text-gray-600'
//                         }`}
//                       >
//                         {depositResult.status || 'pending'}
//                       </span>
//                     </div>
//                   </div>

//                   {depositResult.address && (
//                     <>
//                       <p
//                         className={`text-sm mb-2 ${
//                           isDark ? 'text-gray-400' : 'text-gray-600'
//                         }`}
//                       >
//                         Send to address (BSC):
//                       </p>
//                       <div
//                         className={`
//                           flex items-center gap-3 p-4 rounded-xl border
//                           ${isDark 
//                             ? 'bg-black/40 border-orange-800/30' 
//                             : 'bg-white border-gray-200 shadow-sm'}
//                         `}
//                       >
//                         <p
//                           className={`font-mono break-all flex-1 ${
//                             isDark ? 'text-orange-300' : 'text-orange-700'
//                           }`}
//                         >
//                           {shorten(depositResult.address)}
//                         </p>
//                         <button
//                           onClick={() => copyToClipboard(depositResult.address)}
//                           className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
//                         >
//                           {copied ? (
//                             <CheckCircleIcon
//                               className={`w-6 h-6 ${
//                                 isDark ? 'text-orange-400' : 'text-green-600'
//                               }`}
//                             />
//                           ) : (
//                             <DocumentDuplicateIcon
//                               className={`w-6 h-6 ${
//                                 isDark ? 'text-gray-300' : 'text-gray-600'
//                               }`}
//                             />
//                           )}
//                         </button>
//                       </div>

//                       <div className="mt-6 flex justify-center">
//                         <div
//                           className={`
//                             p-4 rounded-2xl shadow-2xl
//                             ${isDark ? 'bg-white' : 'bg-white'}
//                           `}
//                         >
//                           <QRCode value={depositResult.address} size={180} level="H" />
//                         </div>
//                       </div>
//                       <p
//                         className={`text-center text-sm mt-3 ${
//                           isDark ? 'text-gray-500' : 'text-gray-600'
//                         }`}
//                       >
//                         Scan to send USDT (BSC)
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Deposit History */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className={`
//             rounded-3xl border p-8
//             ${isDark 
//               ? 'bg-black/40 backdrop-blur-xl border-orange-600/30' 
//               : 'bg-white border-gray-200 shadow-xl'}
//           `}
//         >
//           <h2
//             className={`text-2xl font-semibold mb-6 ${
//               isDark ? 'text-orange-300' : 'text-orange-700'
//             }`}
//           >
//             Deposit History
//           </h2>

//           {historyLoading ? (
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-center py-8`}>
//               Loading...
//             </p>
//           ) : history.length === 0 ? (
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-center py-8`}>
//               No deposits yet.
//             </p>
//           ) : (
//             <div className="space-y-4">
//               {history.map((dep) => (
//                 <div
//                   key={dep.id || dep.paymentId}
//                   className={`
//                     p-5 rounded-xl border flex justify-between items-center
//                     ${isDark 
//                       ? 'bg-slate-900/60 border-orange-800/30' 
//                       : 'bg-gray-50 border-gray-200'}
//                   `}
//                 >
//                   <div>
//                     <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                       {dep.amount} USDT
//                     </p>
//                     <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
//                       {dep.address ? shorten(dep.address) : '—'}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p
//                       className={`font-semibold ${
//                         dep.status === 'completed' || dep.status === 'confirmed'
//                           ? isDark 
//                             ? 'text-orange-400' 
//                             : 'text-green-600'
//                           : dep.status === 'pending'
//                           ? 'text-amber-400'
//                           : 'text-red-500'
//                       }`}
//                     >
//                       {dep.status?.toUpperCase() || 'PENDING'}
//                     </p>
//                     <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs`}>
//                       {dep.createdAt ? new Date(dep.createdAt).toLocaleString() : '—'}
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






// Deposit.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WalletIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
import QRCode from 'react-qr-code';

import { createDeposit, getDepositHistory, checkDepositStatus } from '../../api/depositapi';
import { useTheme } from '../ui/ThemeContext';

export default function Deposit() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      setHistory(res.success && Array.isArray(res.data) ? res.data : []);
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
      const res = await createDeposit({ amount: numAmount });
      const data = res.data;
      setDepositResult(data);
      setMessage(res.message || 'Deposit request created! Please send funds.');
      setAmount('');
      loadHistory();

      if (data?.paymentId) {
        startPolling(data.paymentId);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create deposit request.');
    } finally {
      setDepositLoading(false);
    }
  };

  const startPolling = (paymentId) => {
    setPolling(true);
    const interval = setInterval(async () => {
      try {
        const res = await checkDepositStatus(paymentId);
        const status = res.data?.status || 'pending';
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
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Deposit Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-3xl border p-8 shadow-2xl backdrop-blur-xl ${
            isDark ? 'bg-black/40 border-orange-600/30' : 'bg-white border-gray-200 shadow-xl'
          }`}
        >
          <div className="text-center mb-8">
            <WalletIcon
              className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}
            />
            <h1
              className={`text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark ? 'from-orange-400 to-orange-500' : 'from-orange-600 to-orange-700'
              }`}
            >
              Deposit Funds
            </h1>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
              USDT (BSC)
            </p>
          </div>

          <form onSubmit={handleCreateDeposit} className="space-y-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-orange-300/90' : 'text-orange-700'
                }`}
              >
                Amount (USDT)
              </label>
              <input
                type="number"
                step="0.01"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10.00"
                className={`w-full px-5 py-4 rounded-xl placeholder-gray-500 border focus:outline-none focus:ring-2 transition ${
                  isDark
                    ? 'bg-slate-900 border-orange-700/40 text-white focus:border-orange-500 focus:ring-orange-500/30'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-400/30'
                }`}
                disabled={depositLoading}
                required
              />
            </div>

            <button
              type="submit"
              disabled={depositLoading || !amount || parseFloat(amount) <= 0}
              className={`w-full py-4 px-6 font-semibold rounded-xl transition transform hover:scale-[1.02] shadow-lg ${
                isDark
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white'
                  : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white'
              } ${depositLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {depositLoading ? 'Creating...' : 'Create Deposit Request'}
            </button>
          </form>

          {error && <p className="mt-4 text-red-500 dark:text-red-400 text-center font-medium">{error}</p>}
          {message && <p className="mt-4 text-green-500 dark:text-orange-300 text-center font-medium">{message}</p>}

          {/* Payment Instructions / QR */}
          <AnimatePresence>
            {depositResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                <div
                  className={`p-6 rounded-2xl border ${
                    isDark ? 'bg-slate-900/70 border-orange-600/30' : 'bg-gray-50 border-gray-200 shadow-inner'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
                      Payment Details
                    </h3>
                    <div className="flex items-center gap-2">
                      {polling && <ClockIcon className="w-5 h-5 text-amber-400 animate-pulse" />}
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {depositResult.status || 'pending'}
                      </span>
                    </div>
                  </div>

                  {depositResult.payAddress && (
                    <>
                      <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Send {depositResult.payCurrency} to address:
                      </p>
                      <div
                        className={`flex items-center gap-3 p-4 rounded-xl border ${
                          isDark ? 'bg-black/40 border-orange-800/30' : 'bg-white border-gray-200 shadow-sm'
                        }`}
                      >
                        <p className={`font-mono break-all flex-1 ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
                          {shorten(depositResult.payAddress)}
                        </p>
                        <button
                          onClick={() => copyToClipboard(depositResult.payAddress)}
                          className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
                        >
                          {copied ? (
                            <CheckCircleIcon className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-green-600'}`} />
                          ) : (
                            <DocumentDuplicateIcon className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                          )}
                        </button>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <div className="p-4 rounded-2xl shadow-2xl bg-white">
                          <QRCode value={depositResult.payAddress} size={180} level="H" />
                        </div>
                      </div>
                      <p className={`text-center text-sm mt-3 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        Scan to send {depositResult.payCurrency}
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
          className={`rounded-3xl border p-8 ${
            isDark ? 'bg-black/40 backdrop-blur-xl border-orange-600/30' : 'bg-white border-gray-200 shadow-xl'
          }`}
        >
          <h2 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
            Deposit History
          </h2>

          {historyLoading ? (
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-center py-8`}>Loading...</p>
          ) : history.length === 0 ? (
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-center py-8`}>No deposits yet.</p>
          ) : (
            <div className="space-y-4">
              {history.map((dep) => (
                <div
                  key={dep._id || dep.paymentId}
                  className={`p-5 rounded-xl border flex justify-between items-center ${
                    isDark ? 'bg-slate-900/60 border-orange-800/30' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {dep.amount} USDT
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                      {dep.payAddress ? shorten(dep.payAddress) : '—'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        dep.status === 'completed' || dep.status === 'confirmed'
                          ? isDark
                            ? 'text-orange-400'
                            : 'text-green-600'
                          : dep.status === 'pending'
                          ? 'text-amber-400'
                          : 'text-red-500'
                      }`}
                    >
                      {dep.status?.toUpperCase() || 'PENDING'}
                    </p>
                    <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs`}>
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
