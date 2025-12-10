import React, { useState } from "react";
import { FiMenu, FiBell } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ toggleSidebar }) {
  const [notifications, setNotifications] = useState([
    "New trade executed",
    "Wallet deposit received",
    "Security alert: login from new device",
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-full bg-black/90 backdrop-blur-md shadow-lg px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left - Logo / Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CREDENCEFLUX
      </motion.h1>

      {/* Right - Actions */}
      <div className="flex items-center gap-6 relative">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-cyan-400 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiBell size={22} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-black animate-pulse"></span>
            )}
          </motion.button>

          {/* Notification Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-64 bg-[#111111] border border-cyan-700 rounded-xl shadow-lg overflow-hidden z-50"
              >
                <ul className="divide-y divide-gray-700">
                  {notifications.map((note, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 hover:bg-cyan-900/20 cursor-pointer text-gray-200"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2 mr-5 rounded-lg border border-cyan-700 text-cyan-400 hover:bg-cyan-800/30"
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMenu size={22} />
        </motion.button>
      </div>
    </header>
  );
}
