import { useEffect, useState } from "react";
import CartItemCard from "../../../Components/Cart/CartItemCard";
import { getCartItems } from "../../../Services/cartServices";

function CartPage() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const cart = async () => {
      const res = await getCartItems();
      setTotalAmount(res.totalAmount);
      setCartItems(res?.data?.cart);
    };
    cart();
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <div>
          <p className="m-0 fs-4">Cart Total</p>
          <p className="fs-3 fw-bold ">Rs {totalAmount}</p>
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
          cartItems?.map((element) => (
            <CartItemCard key={element?._id} cart={element} />
          ))}
      </div>
    </div>
  );
}

export default CartPage;
