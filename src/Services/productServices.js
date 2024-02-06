import toast from "react-hot-toast";
import axios from "axios";
import { addCategory, getCategories, getProducts } from "../Axios/productApi";

const baseURL = import.meta.env.VITE_SERVER_URL;

export async function createProduct(product, file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    Object.entries(product).forEach(([key, value]) => {
      if (key != "defaultImage") {
        formData.append(key, product[key]);
      }
    });
    const token = localStorage.getItem("accessToken");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const res = await axios.post(`${baseURL}/api/products`, formData, {
      headers,
    });
    if (res) {
      toast.success(res?.data?.message, {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
    return res;
  } catch (error) {
    toast.error(error?.errorMessage || "something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}
export async function createCategory(categoryData) {
  try {
    const res = await addCategory(categoryData);
    if (res) {
      toast.success(res?.message, {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
    return res;
  } catch (error) {
    toast.error(error?.errorMessage || "something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}

export async function fetchCategories() {
  try {
    const res = await getCategories();
    return res;
  } catch (error) {
    toast.error(error?.errorMessage || "something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}

export async function fetchProducts(query = {}) {
  try {
    const res = await getProducts(query);
    return res;
  } catch (error) {
    toast.error(error?.errorMessage || "something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}
