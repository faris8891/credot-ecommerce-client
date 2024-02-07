import axiosInstance from "./axiosConfig";

export const addItemToCart = (products , quantity) => {
  return axiosInstance().post("/api/cart", { ...products,quantity });
};
export const getCart = () => {
  return axiosInstance().get("/api/cart");
};
export const updateCart = (id, data) => {
  return axiosInstance().put(`/api/cart/${id}`,{data,id});
};
