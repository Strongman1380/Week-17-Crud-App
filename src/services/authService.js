// src/services/authService.js

const AUTH_URL = "https://your-auth-api.com/login";

// Simulated login with external API call
export const login = async (email, password) => {
  try {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      return data;
    } else {
      throw new Error(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem("token"));
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch (err) {
    console.warn("Unable to decode token:", err);
    return null;
  }
};