import axios from 'axios';
import appConfig from '../config/config';

const axiosInstance = axios.create({
  baseURL: appConfig.baseURL,
});

axiosInstance.interceptors.request.use(config => {
  config.headers['X-Api-Key'] = appConfig.newsAPIKey;
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error?.response?.data);
  },
);

export default axiosInstance;
