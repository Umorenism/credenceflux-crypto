import React, { useState } from 'react';

export default function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call with delay
    setTimeout(() => {
      setIsLoading(false);
      setMessage('Withdrawal processed successfully! 🚀');
      setAmount('');
      setAddress('');
    }, 1500);
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
              Amount (e.g., 0.5 BTC)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
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
              placeholder="Enter recipient address"
              className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
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
      </div>
    </div>
  );
}