import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const axiosOption: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: {
    host: process.env.REACT_APP_API_SERVER || 'http://172.28.1.10',
    port:
      typeof process.env.REACT_APP_API_PORT === 'string'
        ? Number(process.env.REACT_APP_API_PORT)
        : 3000,
  },
};

const axiosInstance: AxiosInstance = Axios.create(axiosOption);

export default axiosInstance;
