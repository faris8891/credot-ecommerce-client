import toast from "react-hot-toast";
import { addItemToCart, getCart, updateCart } from "../Axios/cartApi";

export async function addToCart(data = {}) {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const res = await addItemToCart({ productId: data?._id });
      toast.success(res?.message, {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
      return res;
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart?.length === 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            { sellerId: data?.sellerId, productId: data, quantity: 1 },
          ])
        );
      }

      const isExist = cart.filter(
        (element) => element?.productId?._id === data._id
      );
      if (isExist.length === 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...cart,
            { sellerId: data.sellerId, productId: data, quantity: 1 },
          ])
        );
      } else {
        const update = cart?.map((element) => {
          if (isExist[0]?.productId?._id === element?.productId?._id) {
            element.quantity++;
          }
          return element;
        });

        localStorage.setItem("cart", JSON.stringify(update));
      }

      toast.success("Successfully added to cart", {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
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

export function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

export function calculateCartTotal(cart) {
  let totalAmount = 0;
  cart?.forEach((element) => {
    totalAmount = totalAmount + element?.quantity * element?.productId?.price;
  });
  return totalAmount;
}

export async function updateQuantity(id, value, quantity) {
  const token = getToken();
  if (token) {
    value ? quantity++ : quantity--;
    const res = await updateCart(id, quantity);
  } else {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedQuantity = cart.map((element) => {
      if (element?.productId?._id === id) {
        value ? element.quantity++ : element.quantity--;
      }
      return element;
    });

    localStorage.setItem("cart", JSON.stringify(updatedQuantity));
  }
}
