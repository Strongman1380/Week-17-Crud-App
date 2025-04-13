// src/api/api.js

import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://64b51d39f3dbab5a95c6f014.mockapi.io/api';

export const api = axios.create({
  baseURL,
});

// Optional: Add interceptors for auth/logging/failures
api.interceptors.request.use(
  (config) => {
    // Example: Add token if needed
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional global error handling
    console.error('[API ERROR]', error);
    return Promise.reject(error);
  }
);