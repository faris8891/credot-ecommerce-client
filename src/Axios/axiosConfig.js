import axios from "axios";

const axiosInstance = (tokenName = "accessToken") => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((request) => {
    const token = localStorage.getItem(tokenName);
    request.headers.Authorization = token;
    return request;
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response.data)
  );

  return instance;
};
export default axiosInstance;
