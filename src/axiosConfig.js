// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add the token to the headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;

