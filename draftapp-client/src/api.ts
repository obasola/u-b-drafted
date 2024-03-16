// src/api.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  // Add other Axios configurations as needed
});

export default instance;
