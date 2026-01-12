import { apiClient } from './apiClient';

export const getCryptoChart = (cryptoId) => {
  return apiClient.get(`/api/crypto/${cryptoId}/chart`);
};

// Optional — if you want dynamic crypto list later
export const getCryptoPrices = () => {
  return apiClient.get('/api/crypto/prices');
};

// Optional — price conversion
export const convertUsdToCrypto = (amount, cryptoId) => {
  return apiClient.post('/api/crypto/convert', {
    amount,
    cryptoId,
    direction: 'usdToCrypto',
  });
};