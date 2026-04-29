// src/api/auth.js
// Simple auth API for 5ense Studios frontend

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api/auth';

async function safeJson(res) {
  try {
    return await res.json();
  } catch (err) {
    return null;
  }
}

export async function register(email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });
  const data = await safeJson(res);
  if (!res.ok) {
    return { error: data?.error || data?.message || 'Registration failed' };
  }
  return data || {};
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });
  const data = await safeJson(res);
  if (!res.ok) {
    return { error: data?.error || data?.message || 'Login failed' };
  }
  return data || {};
}

export function saveToken(token) {
  localStorage.setItem('authToken', token);
}

export function getToken() {
  return localStorage.getItem('authToken');
}

export function logout() {
  localStorage.removeItem('authToken');
}

export async function me() {
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await fetch(`${API_BASE}/me`, {
    headers,
    credentials: 'include'
  });
  if (!res.ok) return null;
  return safeJson(res);
}