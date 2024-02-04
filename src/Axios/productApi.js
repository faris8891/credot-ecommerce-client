import axiosInstance from "./axiosConfig";

export const addProduct = (products) => {
  return axiosInstance().post("/api/products", { ...products });
};
export const addCategory = (category) => {
  return axiosInstance().post("/api/categories", { ...category });
};
export const getProducts = (query) => {
  return axiosInstance().get("/api/products", { params: query });
};
export const getCategories = () => {
  return axiosInstance().get("/api/categories");
};
