
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  const [notifications] = useState([
    "New trade executed",
    "Wallet deposit received",
    "Security alert: login from new device",
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifRef = useRef(null);
  const userRef = useRef(null);

  /* ----------------------------------
   Close dropdowns on outside click
  ---------------------------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ----------------------------------
   Logout Handler (API Integrated)
  ---------------------------------- */
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/signup");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/signup"); // fail-safe
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-cyan-900/40">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">

        {/* Logo */}
        <motion.h1
          className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CREDENCEFLUX
        </motion.h1>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <motion.button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
              className="relative p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-cyan-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiBell size={20} />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              )}
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-3 w-72 rounded-xl bg-[#0b0b0b] border border-cyan-800 shadow-xl overflow-hidden"
                >
                  <div className="px-4 py-2 text-sm font-semibold text-cyan-400 border-b border-cyan-900">
                    Notifications
                  </div>
                  <ul className="divide-y divide-gray-800">
                    {notifications.map((note, i) => (
                      <li
                        key={i}
                        className="px-4 py-3 text-sm text-gray-300 hover:bg-cyan-900/20 cursor-pointer"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Menu */}
          <div className="relative" ref={userRef}>
            <motion.button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
              className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-cyan-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiUser size={20} />
            </motion.button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-3 w-56 rounded-xl bg-[#0b0b0b] border border-cyan-800 shadow-xl"
                >
                  <ul className="py-2 text-sm">
                    <li
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 cursor-pointer"
                    >
                      <FiLogOut />
                      Logout
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu */}
          <motion.button
            className="md:hidden p-2 rounded-lg border border-cyan-700 text-cyan-400 hover:bg-cyan-800/20"
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMenu size={22} />
          </motion.button>
        </div>
      </div>
    </header>
  );
}
