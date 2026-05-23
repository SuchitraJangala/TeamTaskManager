import axios from 'axios';

const API_URL = 'http://localhost:5000/api/projects';

export const createProject = (data, token) =>
  axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });

export const getProjects = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
