import axiosInstance from "./axiosConfig";

export const addItemToCart = (products) => {
  return axiosInstance().post("/api/cart", { ...products });
};
export const getCart = () => {
  return axiosInstance().get("/api/cart");
};
