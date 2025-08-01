import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
    // Optional: Set default headers, timeout, etc.
    // headers: {
    //   Authorization: `Bearer YOUR_TOKEN`
    // }
});

export default axiosInstance;
