// utils/axios.js
import axios from 'axios';
import { getToken } from './localStorage';

const baseURL = 'http://localhost:3000';
const token = getToken();

const customApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

export default customApi;
