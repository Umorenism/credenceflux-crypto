import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { investmentService } from "../../api/investmentApi";

// Optional: nice orange palette helpers (you can also put in globals.css)
const orangePalette = {
  primary: "orange-600",
  primaryHover: "orange-500",
  primaryDark: "orange-700",
  darkBg: "gray-950",
  cardBg: "gray-900",
  accentText: "orange-400",
  lightText: "gray-300",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: { scale: 1.04, transition: { duration: 0.25 } },
};

export default function Investments() {
  const [investments, setInvestments] = useState([]);
  const [stats, setStats] = useState(null);
  const [todayEarnings, setTodayEarnings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [invRes, statsRes, todayRes] = await Promise.all([
          investmentService.getInvestments(),
          investmentService.getEarningsStats(),
          investmentService.getTodayEarnings(),
        ]);

        setInvestments(invRes || []);
        setStats(statsRes);
        setTodayEarnings(todayRes);
      } catch (err) {
        setError("Failed to load investment data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-${orangePalette.darkBg} text-white p-6`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center md:text-left text-orange-400"
      >
        Investments Dashboard
      </motion.h1>

      {/* Quick Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className={`bg-${orangePalette.cardBg} p-6 rounded-xl shadow-xl border border-orange-900/30`}
        >
          <h3 className="text-lg font-semibold text-gray-400">Total Earnings</h3>
          <p className={`text-3xl font-bold text-${orangePalette.accentText}`}>
            {stats?.totalEarnings ?? "—"} {/* assume has totalEarnings, adjust field */}
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className={`bg-${orangePalette.cardBg} p-6 rounded-xl shadow-xl border border-orange-900/30`}
        >
          <h3 className="text-lg font-semibold text-gray-400">Today's Earnings</h3>
          <p className={`text-3xl font-bold text-${orangePalette.accentText}`}>
            {todayEarnings?.amount ?? "0.00"}
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className={`bg-${orangePalette.cardBg} p-6 rounded-xl shadow-xl border border-orange-900/30`}
        >
          <h3 className="text-lg font-semibold text-gray-400">Active Plans</h3>
          <p className={`text-3xl font-bold text-${orangePalette.accentText}`}>
            {investments?.filter(i => i.status === "active")?.length ?? 0}
          </p>
        </motion.div>
      </motion.div>

      {/* Investment Plans List */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-orange-300">
          Your Investment Plans
        </h2>

        {investments.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No investments found. Start investing today!
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {investments.map((inv) => (
              <motion.div
                key={inv.id}
                variants={cardVariants}
                whileHover="hover"
                className={`bg-${orangePalette.cardBg} rounded-xl overflow-hidden shadow-2xl border border-orange-900/40 hover:border-orange-600/60 transition-colors`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-300 mb-2">
                    {inv.planName || `Plan #${inv.id}`}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Invested: {inv.amount} • {inv.date}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Status:</span>
                    <span
                      className={
                        inv.status === "active"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {inv.status?.toUpperCase() || "UNKNOWN"}
                    </span>
                  </div>
                </div>
                <div className={`bg-gradient-to-r from-orange-900/40 to-transparent px-6 py-4 text-right`}>
                  <button
                    className={`bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-medium transition-colors`}
                  >
                    View Earnings
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.section>

      {/* You can add more sections: Create Investment form, Earnings History table, etc. */}
    </div>
  );
}