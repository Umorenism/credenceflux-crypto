
import React, { useState } from 'react';
import { createWithdrawal } from '../../api/walletapi'; // Adjust path if needed

export default function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('BTC');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // List of supported cryptocurrencies
  const cryptoOptions = [
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'USDT', label: 'Tether (USDT)' },
    { value: 'BNB', label: 'Binance Coin (BNB)' },
    { value: 'SOL', label: 'Solana (SOL)' },
    { value: 'XRP', label: 'Ripple (XRP)' },
    { value: 'ADA', label: 'Cardano (ADA)' },
    { value: 'DOGE', label: 'Dogecoin (DOGE)' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await createWithdrawal({
        amount: parseFloat(amount),
        cryptocurrency,
        walletAddress: address.trim(),
      });

      // Assuming success if no error is thrown
      setMessage('Withdrawal request submitted successfully! 🚀');
      setAmount('');
      setAddress('');
      setCryptocurrency('BTC');
      console.log('Withdrawal response:', response.data); // Optional: log response
    } catch (err) {
      console.error('Withdrawal error:', err);

      // Handle different error types
      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        'Withdrawal failed. Please check your details and try again.';

      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-cyan-500/30 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-cyan-500/50">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-6 animate-pulse">
          CREDENCEFLUX Withdrawal Portal
        </h1>
        <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
          Securely transfer your crypto assets. Enter details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-cyan-300 mb-2">
              Amount
            </label>
            <input
              type="number"
              step="any"
              min="0"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 0.005"
              className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
            <p className="mt-1 text-xs text-gray-400">
              You are withdrawing {amount || '0'} {cryptocurrency}
            </p>
          </div>

          <div>
            <label htmlFor="cryptocurrency" className="block text-sm font-medium text-cyan-300 mb-2">
              Cryptocurrency
            </label>
            <select
              id="cryptocurrency"
              value={cryptocurrency}
              onChange={(e) => setCryptocurrency(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            >
              {cryptoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-cyan-300 mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter recipient wallet address"
              className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !amount || !address || amount <= 0}
            className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              isLoading || !amount || !address || amount <= 0
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Initiate Withdrawal'
            )}
          </button>
        </form>

        {message && (
          <div className="mt-6 text-center text-green-400 font-semibold animate-fade-in">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 text-center text-red-400 font-semibold animate-fade-in">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}