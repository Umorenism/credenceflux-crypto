import { apiClient } from "./apiClient";

/**
 * Create a new deposit payment request
 * POST /api/deposits
 * body: { amount: number }
 */
export const createDeposit = (amount) => {
  return apiClient.post("/api/deposits", { amount });
};

/**
 * Get deposit history of the current user
 * GET /api/deposits
 */
export const getDepositHistory = () => {
  return apiClient.get("/api/deposits");
};

/**
 * Check status of a specific deposit payment
 * GET /api/deposits/check/:paymentId
 */
export const checkDepositStatus = (paymentId) => {
  return apiClient.get(`/api/deposits/check/${paymentId}`);
};

/**
 * Get details of a single deposit
 * GET /api/deposits/:id
 */
export const getDepositById = (id) => {
  return apiClient.get(`/api/deposits/${id}`);
};