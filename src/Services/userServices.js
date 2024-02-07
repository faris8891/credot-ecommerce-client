import toast from "react-hot-toast";
import { login, register } from "../Axios/userApi";
import { addItemToCart } from "../Axios/cartApi";

export async function userLogin(loginCredentials) {
  try {
    const res = await login(loginCredentials);
    const token = res.data?.accessToken;
    localStorage.setItem("accessToken", token);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length !== 0) {
      const data = cart.map(async (element) => {
        const res = await addItemToCart(element?.productId, element.quantity);
        return res;
      });
    }
    localStorage.removeItem("cart");
    return token ? true : false;
  } catch (error) {
    toast.error(error?.errorMessage, {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}

export async function userRegister(userCredentials) {
  try {
    const res = await register(userCredentials);
    return res;
  } catch (error) {
    toast.error(error?.errorMessage || "Something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}
