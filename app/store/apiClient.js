import axios from 'axios';
import { api } from '../constants';

const restClient = axios.create({
  baseURL: api.BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default restClient;
