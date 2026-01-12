import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../api/authApi';
import toast, { Toaster } from 'react-hot-toast';

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
      await forgetPassword(email.trim());
      setSuccess('Password reset link sent! Check your email.');
      toast.success('Reset link sent!');
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Failed to send reset link. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Animated Robotic Orange Grid Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, orange 1px, transparent 1px), radial-gradient(circle at 90% 80%, orange 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating orange glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-orange-900/50 shadow-2xl p-8 md:p-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-400 mb-3">
            Reset Password
          </h2>
          <p className="text-gray-400">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-900/40 border border-red-700/50 rounded-xl text-red-300 text-center text-sm"
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-900/40 border border-green-700/50 rounded-xl text-green-300 text-center text-sm"
          >
            {success}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading || success}
            className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-orange-800/50 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
          />

          <motion.button
            whileHover={{ scale: loading || success ? 1 : 1.03 }}
            whileTap={{ scale: loading || success ? 1 : 0.98 }}
            disabled={loading || success || !email.trim()}
            type="submit"
            className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : success ? 'Link Sent' : 'Send Reset Link'}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/signup')}
            className="text-orange-400 hover:text-orange-300 text-sm font-medium transition"
          >
            ← Back to Sign In
          </button>
        </div>
      </motion.div>
    </div>
  );
}