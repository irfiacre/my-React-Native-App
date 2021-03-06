import axios from 'axios';
import {API_BASE_URL} from './env';

export default axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});
