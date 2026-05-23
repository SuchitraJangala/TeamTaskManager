import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const createTask = (data, token) =>
  axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });

export const getTasks = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
