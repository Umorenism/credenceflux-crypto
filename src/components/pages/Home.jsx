// src/pages/Home.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/solid';

export default function Home() {
  const userName = "Umoren Victor";
  const accountBalance = 0.0;
  const totalProfit = 0.0;
  const totalDeposit = 0.0;
  const totalWithdrawals = 0.0;

  const [modalType, setModalType] = useState(null); // 'deposit' | 'withdraw' | 'trade'

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  // Modal Titles
  const modalTitles = {
    deposit: "Deposit Funds",
    withdraw: "Withdraw Funds",
    trade: "Start Trading"
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-green-600 via-green-700 to-emerald-900 text-white">

      {/* Welcome & Announcement */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-bold"
        >
          Welcome, {userName}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-500/30 text-sm sm:text-base"
        >
          🔥 New Pair Alert on Starbiit! 🚀 Graph AI / Pyth Network / Codatta now live after 48hrs of stable valuation. Grab & trade now! 📈
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {[
          { label: 'Deposit', icon: ArrowDownTrayIcon, type: 'deposit' },
          { label: 'Withdraw', icon: ArrowUpTrayIcon, type: 'withdraw' },
          { label: 'Trade', icon: ChartBarIcon, type: 'trade' }
        ].map((btn, idx) => (
          <motion.button
            key={btn.label}
            onClick={() => openModal(btn.type)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg border border-white/20"
          >
            <btn.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
            <span className="font-semibold text-sm sm:text-lg">{btn.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Balance Cards */}
      <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {[
          { title: 'Account Balance', amount: accountBalance, icon: BanknotesIcon, color: 'bg-green-600' },
          { title: 'Total Profit', amount: totalProfit, icon: ArrowTrendingUpIcon, color: 'bg-emerald-600' },
          { title: 'Total Deposit', amount: totalDeposit, icon: ArrowDownTrayIcon, color: 'bg-orange-500' },
          { title: 'Total Withdrawals', amount: totalWithdrawals, icon: ArrowTrendingDownIcon, color: 'bg-red-600' },
        ].map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex items-center gap-4"
          >
            <div className={`${card.color} p-3 sm:p-4 rounded-2xl`}>
              <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-xs sm:text-sm">{card.title}</p>
              <p className="text-gray-800 text-xl sm:text-2xl font-bold">
                ${card.amount.toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Trading Chart */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Personal Trading Chart</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
            <p className="text-gray-400">Chart Placeholder</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-cyan-500 p-4 sm:p-5 rounded-full shadow-2xl"
      >
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.button>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-md text-black"
          >
            <h2 className="text-xl font-bold mb-4">{modalTitles[modalType]}</h2>
            <p className="text-sm mb-4">This is a placeholder for the {modalType} form. You can integrate real inputs here.</p>

            {/* Example Inputs */}
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
