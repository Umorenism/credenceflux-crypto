import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../api/authApi';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess('');

  try {
    await forgetPassword({ email: email.trim() });
    setSuccess('Password reset link sent! Check your email.');
  } catch (err) {
    setError(
      err.response?.data?.message ||
      err.response?.data?.error ||
      'Failed to send reset link.'
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800 p-8"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Forgot Password
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />

          <motion.button
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl shadow-lg"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/signup')}
            className="text-cyan-400 text-sm underline hover:text-cyan-300"
          >
            Back to Sign In
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(31,41,55,0.5);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          color: white;
        }
        .input::placeholder { color: #9ca3af; }
        .input:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 0 2px rgba(34,211,238,0.3);
        }
      `}</style>
    </div>
  );
}