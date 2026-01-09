// src/api/depositApi.js
import { apiClient } from "./apiClient";

// Get list of supported cryptocurrencies for deposit
export const getSupportedWallets = () => {
  return apiClient.get("/api/deposite/wallets/");
};

// Get deposit wallet address for a specific cryptocurrency
export const getDepositAddress = (cryptocurrency) => {
  return apiClient.get(`/api/deposit/wallet-address/${cryptocurrency}`);
};

// Check current balance for a cryptocurrency
export const checkBalance = (cryptocurrency) => {
  return apiClient.get(`/api/deposite/check-balance/${cryptocurrency}`);
};