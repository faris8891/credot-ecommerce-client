import toast from "react-hot-toast";
import { addItemToCart, getCart } from "../Axios/cartApi";

export async function addToCart(data = {}) {
  try {
    const res = await addItemToCart(data);
    toast.success(res?.message, {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
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

export async function getCartItems() {
  try {
    let totalAmount = 0;
    const res = await getCart();
    res &&
      res?.data?.cart?.forEach((element) => {
        totalAmount =
          totalAmount + element?.quantity * element?.productId?.price;
      });
    return { ...res, totalAmount: totalAmount };
  } catch (error) {
    toast.error(error?.errorMessage || "something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}
