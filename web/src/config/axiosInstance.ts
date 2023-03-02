import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const axiosOption: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = Axios.create(axiosOption);

export default axiosInstance;
