// src/pages/Transactions.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  BanknotesIcon,
  ClockIcon,
  CpuChipIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  // Sample transaction history
  const transactions = [
    { id: 1, type: 'deposit', amount: 2500.00, currency: 'USDT', from: 'External Wallet', to: 'Trading Account', fee: 0.00, status: 'completed', timestamp: '2025-12-10 10:45', txid: '0xabc123...def456' },
    { id: 2, type: 'withdraw', amount: 1200.00, currency: 'USDT', from: 'Trading Account', to: 'External Wallet', fee: 5.00, status: 'completed', timestamp: '2025-12-09 18:30', txid: '0x789ghi...jkl012' },
    { id: 3, type: 'deposit', amount: 500.00, currency: 'BTC', from: 'Mining Reward', to: 'Savings Vault', fee: 0.00, status: 'completed', timestamp: '2025-12-09 14:20', txid: '0xbtc456...789xyz' },
    { id: 4, type: 'withdraw', amount: 800.00, currency: 'USDT', from: 'Trading Account', to: 'Personal Wallet', fee: 4.50, status: 'pending', timestamp: '2025-12-10 09:15', txid: '0xpend123...456ing' },
    { id: 5, type: 'deposit', amount: 3500.00, currency: 'ETH', from: 'Staking Reward', to: 'Trading Account', fee: 0.00, status: 'completed', timestamp: '2025-12-08 22:10', txid: '0xeth789...abc123' },
  ];

  const filteredTransactions = transactions.filter(tx =>
    tx.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.txid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 gap-6 sm:gap-8 pb-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <CpuChipIcon className="w-10 h-10 text-cyan-400" />
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Transaction History
            </h1>
          </div>
          <p className="text-sm text-gray-400">Secure blockchain transaction ledger</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by currency, type, or TxID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-black/60 backdrop-blur-xl border border-cyan-500/40 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 transition-all"
          />
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400 rounded-2xl opacity-0 pointer-events-none"
            animate={{ opacity: searchTerm ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Transaction Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredTransactions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <BanknotesIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No Transactions Found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search</p>
              </motion.div>
            ) : (
              filteredTransactions.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-black/70 backdrop-blur-2xl rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden"
                  whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
                >
                  {/* Main Card */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${tx.type === 'deposit' ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-red-500/20 border border-red-500/40'}`}>
                          {tx.type === 'deposit' ? 
                            <ArrowDownRightIcon className="w-7 h-7 text-emerald-400" /> : 
                            <ArrowUpRightIcon className="w-7 h-7 text-red-400" />
                          }
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white capitalize">{tx.type}</h3>
                          <p className="text-sm text-gray-400">{tx.currency}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${tx.type === 'deposit' ? 'text-emerald-400' : 'text-red-400'}`}>
                          {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toFixed(2)}
                        </p>
                        {tx.fee > 0 && <p className="text-xs text-gray-500">Fee: ${tx.fee.toFixed(2)}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-400">From</p>
                        <p className="text-white truncate">{tx.from}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">To</p>
                        <p className="text-white truncate">{tx.to}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Status</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          tx.status === 'completed' 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                        }`}>
                          {tx.status.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-400 flex items center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          Time
                        </p>
                        <p className="text-white text-xs">{tx.timestamp}</p>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
                      className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                    >
                      <span>View Transaction ID</span>
                      {expandedId === tx.id ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expanded TxID */}
                  <AnimatePresence>
                    {expandedId === tx.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-cyan-500/30 bg-black/50 px-5 sm:px-6 py-4"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-gray-400 text-sm">Transaction Hash</p>
                          <p className="text-cyan-300 font-mono text-xs break-all">{tx.txid}</p>
                        </div>
                        <motion.div
                          className="mt-3 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Refresh Button - Robotic Pulse */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-full shadow-2xl border-4 border-cyan-300/50 z-50"
        animate={{
          boxShadow: [
            "0 0 20px rgba(34,211,238,0.8)",
            "0 0 40px rgba(34,211,238,1)",
            "0 0 20px rgba(34,211,238,0.8)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </motion.button>
    </div>
  );
}