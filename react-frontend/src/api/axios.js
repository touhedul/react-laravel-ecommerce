import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// ✅ Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Skip adding token for specific endpoints (e.g., login or register)
        const noAuthRoutes = ['/login', '/register']; // Add more routes as needed
        const isNoAuth = noAuthRoutes.some(route => config.url.includes(route));

        if (!isNoAuth) {
            const token = localStorage.getItem('token'); // Or sessionStorage
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
