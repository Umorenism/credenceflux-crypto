import { apiClient } from "./apiClient";

/**
 * Create a new withdrawal request
 * POST /api/withdrawals
 */
export const createWithdrawal = (data) => {
  return apiClient.post("/api/withdrawals", {
    amount: data.amount,               // number or string – keep consistent with backend
    cryptocurrency: data.cryptocurrency,
    walletAddress: data.walletAddress,
  });
};

/**
 * Fetch the current user's withdrawal history
 * GET /api/withdrawals
 */
export const getWithdrawals = () => {
  return apiClient.get("/api/withdrawals");
};

/**
 * Get details of a specific withdrawal
 * GET /api/withdrawals/:id
 */
export const getWithdrawalById = (id) => {
  return apiClient.get(`/api/withdrawals/${id}`);
};