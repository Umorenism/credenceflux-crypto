// src/api/userApi.js
import { apiClient } from "./apiClient";

export const userService = {
  // GET /api/users/profile
  getProfile: async () => {
    const res = await apiClient.get("/api/users/profile");
    return res.data;
  },

  // PUT /api/users/profile
  updateProfile: async (data) => {
    const res = await apiClient.put("/api/users/profile", data);
    return res.data;
  },

  // PUT /api/users/change-password
  changePassword: async ({ currentPassword, newPassword }) => {
    const res = await apiClient.put("/api/users/change-password", {
      currentPassword,
      newPassword,
    });
    return res.data;
  },

  // GET /api/users/dashboard → dashboard summary
  getDashboardSummary: async () => {
    const res = await apiClient.get("/api/users/dashboard");
    return res.data;
  },

  // GET /api/users/transactions → transaction history
  getTransactions: async () => {
    const res = await apiClient.get("/api/users/transactions");
    return res.data;
  },

  // GET /api/users/referrals → referral stats & list
  getReferrals: async () => {
    const res = await apiClient.get("/api/users/referrals");
    return res.data;
  },
};