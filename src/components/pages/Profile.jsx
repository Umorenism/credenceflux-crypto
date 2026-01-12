// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, EnvelopeIcon, KeyIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { userService } from '../../api/userApi';

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    joined: '',
    kycStatus: 'Not Verified',
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '' });
  const [passwordForm, setPasswordForm] = useState({ current: '', newPass: '', confirm: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await userService.getProfile();
        setProfile({
          fullName: data.fullName || 'User',
          email: data.email || '',
          joined: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : '',
          kycStatus: data.kycVerified ? 'Verified' : 'Not Verified',
        });
        setForm({ fullName: data.fullName || '', email: data.email || '' });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      await userService.updateProfile(form);
      setProfile(prev => ({ ...prev, ...form }));
      setEditMode(false);
      setMessage('Profile updated successfully');
      setTimeout(() => setMessage(''), 4000);
    } catch (err) {
      setMessage('Failed to update profile');
    }
  };

  const handleChangePassword = async () => {
    if (passwordForm.newPass !== passwordForm.confirm) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await userService.changePassword({
        currentPassword: passwordForm.current,
        newPassword: passwordForm.newPass,
      });
      setPasswordForm({ current: '', newPass: '', confirm: '' });
      setMessage('Password changed successfully');
      setTimeout(() => setMessage(''), 4000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to change password');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-orange-400 text-center"
      >
        My Profile
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 p-8 rounded-2xl border border-orange-900/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <UserCircleIcon className="w-28 h-28 text-orange-500" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-orange-300">{profile.fullName}</h2>
              <p className="text-gray-300 mt-1">{profile.email}</p>
              <p className="text-sm text-gray-500 mt-2">
                Member since {profile.joined}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-xl">
              <h3 className="text-lg font-semibold text-orange-300 mb-3">KYC Status</h3>
              <p className={`font-medium ${profile.kycStatus === 'Verified' ? 'text-green-400' : 'text-orange-400'}`}>
                {profile.kycStatus}
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl">
              <h3 className="text-lg font-semibold text-orange-300 mb-3">Security</h3>
              <p className="text-green-400 font-medium">2FA • Enabled</p>
            </div>
          </div>

          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="mt-8 w-full py-4 bg-orange-700 hover:bg-orange-600 rounded-xl font-medium transition"
            >
              Edit Profile
            </button>
          ) : (
            <div className="mt-8 space-y-5">
              <input
                type="text"
                value={form.fullName}
                onChange={e => setForm({...form, fullName: e.target.value})}
                placeholder="Full Name"
                className="w-full p-4 bg-gray-800 border border-orange-800 rounded-xl focus:border-orange-500 outline-none"
              />
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                placeholder="Email"
                className="w-full p-4 bg-gray-800 border border-orange-800 rounded-xl focus:border-orange-500 outline-none"
              />

              <div className="flex gap-4">
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-medium"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Change Password */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-2xl border border-orange-900/50"
        >
          <h2 className="text-2xl font-semibold mb-6 text-orange-300 flex items-center gap-3">
            <KeyIcon className="w-7 h-7" />
            Change Password
          </h2>

          <div className="space-y-5">
            <input
              type="password"
              placeholder="Current Password"
              value={passwordForm.current}
              onChange={e => setPasswordForm({...passwordForm, current: e.target.value})}
              className="w-full p-4 bg-gray-800 border border-orange-800 rounded-xl focus:border-orange-500 outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwordForm.newPass}
              onChange={e => setPasswordForm({...passwordForm, newPass: e.target.value})}
              className="w-full p-4 bg-gray-800 border border-orange-800 rounded-xl focus:border-orange-500 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwordForm.confirm}
              onChange={e => setPasswordForm({...passwordForm, confirm: e.target.value})}
              className="w-full p-4 bg-gray-800 border border-orange-800 rounded-xl focus:border-orange-500 outline-none"
            />

            <button
              onClick={handleChangePassword}
              className="w-full py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-medium transition mt-4"
            >
              Update Password
            </button>
          </div>
        </motion.div>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg font-medium text-green-400"
          >
            {message}
          </motion.p>
        )}
      </div>
    </div>
  );
}