// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [quotes, setQuotes] = useState({});
  const [cryptoData, setCryptoData] = useState({});
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [activeTab, setActiveTab] = useState('Indices');
  const [earnings] = useState({ balance: 707, token: 'ZBWE', earned: 5 }); // Mock for project token

  useEffect(() => {
    // Fetch stock indices quotes (Yahoo Finance public endpoints, no key needed)
    const symbols = ['^IXIC', '^DJI', '^N225']; // Nasdaq, DJI, Nikkei
    const forexSymbols = ['EURUSD=X']; // EUR/USD
    Promise.all([
      fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(',')}`).then(res => res.json()),
      fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${forexSymbols.join(',')}`).then(res => res.json()),
      // Fetch crypto (CoinGecko, no key)
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true').then(res => res.json()),
      // Fetch Nasdaq historical for chart (1 month daily)
      fetch('https://query1.finance.yahoo.com/v8/finance/chart/^IXIC?interval=1d&range=1mo').then(res => res.json())
    ]).then(([stockRes, forexRes, cryptoRes, chartRes]) => {
      const stockQuotes = {};
      symbols.forEach(sym => {
        const quote = stockRes.quoteResponse.result.find(r => r.symbol === sym);
        if (quote) {
          stockQuotes[sym] = {
            price: quote.regularMarketPrice?.toFixed(2) || 'N/A',
            change: ((quote.regularMarketChangePercent || 0).toFixed(2)) + '%'
          };
        }
      });
      const forexQuotes = {};
      forexSymbols.forEach(sym => {
        const quote = forexRes.quoteResponse.result.find(r => r.symbol === sym);
        if (quote) {
          forexQuotes[sym] = {
            price: quote.regularMarketPrice?.toFixed(4) || 'N/A',
            change: ((quote.regularMarketChangePercent || 0).toFixed(2)) + '%'
          };
        }
      });
      setQuotes({ ...stockQuotes, ...forexQuotes });

      setCryptoData(cryptoRes);

      // Parse chart data
      const timestamps = chartRes.chart.result[0].timestamp;
      const closes = chartRes.chart.result[0].indicators.quote[0].close;
      const labels = timestamps.map(ts => new Date(ts * 1000).toLocaleDateString('short')).slice(-30); // Last 30 days
      const dataPoints = closes.slice(-30).filter(Boolean);
      setChartData({
        labels,
        datasets: [{
          label: 'Nasdaq 100',
          data: dataPoints,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.1
        }]
      });
    }).catch(console.error);
  }, []);

  const tabs = ['Indices', 'Commodities', 'Bonds', 'Forex'];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6 overflow-hidden relative">
      {/* Background subtle animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      {/* Earnings Card */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 relative z-10"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">${earnings.balance} {earnings.token}</h3>
            <p className="text-green-400">Just earned ${earnings.earned}</p>
          </div>
          <div className="text-cyan-400">❤️</div> {/* Glow heart from image */}
        </div>
      </motion.div>

      {/* Indices Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-3 gap-4 relative z-10"
      >
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">Nasdaq 100</h4>
          <p className="text-2xl font-bold">{quotes['^IXIC']?.price || 'Loading...'}</p>
          <span className={`text-sm ${quotes['^IXIC']?.change?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
            {quotes['^IXIC']?.change || 'Loading...'}
          </span>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">DJI</h4>
          <p className="text-2xl font-bold">{quotes['^DJI']?.price || 'Loading...'}</p>
          <span className={`text-sm ${quotes['^DJI']?.change?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
            {quotes['^DJI']?.change || 'Loading...'}
          </span>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">NKY</h4>
          <p className="text-2xl font-bold">{quotes['^N225']?.price || 'Loading...'}</p>
          <span className={`text-sm ${quotes['^N225']?.change?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
            {quotes['^N225']?.change || 'Loading...'}
          </span>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex space-x-1 relative z-10"
      >
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition ${activeTab === tab ? 'bg-cyan-600 text-white' : 'bg-gray-800/50 text-gray-400'}`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Chart (for active tab, here simplified to Nasdaq for Indices) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 relative z-10 h-64"
      >
        {activeTab === 'Indices' && (
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: { ticks: { color: 'white' }, grid: { color: 'gray' } },
                x: { ticks: { color: 'white' }, grid: { color: 'gray' } }
              }
            }}
          />
        )}
        {/* For other tabs, add similar charts or mock */}
      </motion.div>

      {/* Crypto & Forex Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-3 gap-4 relative z-10"
      >
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">BTC/USD</h4>
          <p className="text-2xl font-bold">${cryptoData.bitcoin?.usd?.toLocaleString() || 'Loading...'}</p>
          <span className={`text-sm ${cryptoData.bitcoin?.usd_24h_change < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {cryptoData.bitcoin?.usd_24h_change?.toFixed(2) || 'Loading...'}%
          </span>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">ETH/USD</h4>
          <p className="text-2xl font-bold">${cryptoData.ethereum?.usd?.toLocaleString() || 'Loading...'}</p>
          <span className={`text-sm ${cryptoData.ethereum?.usd_24h_change < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {cryptoData.ethereum?.usd_24h_change?.toFixed(2) || 'Loading...'}%
          </span>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <h4 className="text-sm text-gray-400">EUR/USD</h4>
          <p className="text-2xl font-bold">{quotes['EURUSD=X']?.price || 'Loading...'}</p>
          <span className={`text-sm ${quotes['EURUSD=X']?.change?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
            {quotes['EURUSD=X']?.change || 'Loading...'}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;