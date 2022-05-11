import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",  
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
export default axiosInstance;
