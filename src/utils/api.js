// File: src/utils/api.js
// API configuration module
// Sets up Axios instance with base URL for API requests

import axios from 'axios';

/**
 * Configured Axios instance for API requests
 * Uses a mock API for development, should be replaced with production API in deployment
 */
export const api = axios.create({
  baseURL: 'https://64b51d39f3dbab5a95c6f014.mockapi.io/api', // Replace with your real API if different
});