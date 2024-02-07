import { useEffect, useState, useMemo, useCallback } from "react";
import CartItemCard from "../../../Components/Cart/CartItemCard";
import {
  calculateCartTotal,
  getCartItems,
  getToken,
  updateQuantity,
} from "../../../Services/cartServices";

function CartPage() {
  const [trigger, setTrigger] = useState(false);
  const [cartItems, setCartItems] = useState({ cartItems: [], totalAmount: 0 });
  const token = getToken();
  useEffect(() => {
    const cart = async () => {
      if (token) {
        const res = await getCartItems();
        setCartItems({
          cartItems: res?.data?.cart,
          totalAmount: res.totalAmount,
        });
      } else {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalAmount = calculateCartTotal(cart);
        setCartItems({ cartItems: cart, totalAmount: totalAmount });
      }
    };
    cart();
  }, [trigger]);

  const handleUpdateQty = async (item, action) => {
    if (token) {
      updateQuantity(item?._id, action, item?.quantity);
      setTrigger(!trigger);
    } else {
      updateQuantity(item?.productId?._id, action);
      setTrigger(!trigger);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <div>
          <p className="m-0 fs-4">Cart Total</p>
          <p className="fs-3 fw-bold ">Rs {cartItems?.totalAmount}</p>
        </div>
        <div>
          <button className="px-5 py-2 fw-bold fs-4 border-0 cartBtn bg-tealBlue text-light">
            Pay
          </button>
        </div>
      </div>
      <hr />
      <div>
        {cartItems &&
          cartItems.cartItems?.map((element) => (
            <CartItemCard
              key={element?._id}
              cart={element}
              handleUpdateQty={handleUpdateQty}
            />
          ))}
      </div>
    </div>
  );
}

export default CartPage;
