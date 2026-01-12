// src/api/walletApi.js
import { apiClient } from "./apiClient";

export const createWithdrawal = (data) => {
  return apiClient.post("/api/withdrawals", {
    amount: data.amount,
    cryptocurrency: data.cryptocurrency,
    walletAddress: data.walletAddress,
  });
};

export const getWithdrawals = () => {
  return apiClient.get("/api/withdrawals");
};

export const getWithdrawalById = (id) => {
  return apiClient.get(`/api/withdrawals/${id}`);
};


export const cancelWithdrawal = (id) => {
  return apiClient.post(`/api/withdrawals/${id}/cancel`);
};

