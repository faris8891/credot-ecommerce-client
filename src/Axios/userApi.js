import axiosInstance from "./axiosConfig";

export const login = (loginData) => {
  return axiosInstance().post("/api/auth/login", { ...loginData });
};
export const register = (userCredentials) => {
  return axiosInstance().post("/api/users/user", { ...userCredentials });
};
