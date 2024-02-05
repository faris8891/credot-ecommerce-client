function CartItemCard({ cart }) {
  return (
    <div className="w-100 border row row-cols-4 p-3 m-0  my-4">
      <div className="col-6 d-flex justify-content-start align-items-top gap-4">
        <img
          width={"100px"}
          height={"100px"}
          src={cart?.productId.defaultImage}
        />
        <p className="fw-bold m-0">{cart?.productId?.name}</p>
      </div>
      <div className="col-2 d-flex justify-content-end align-items-center">
        <p className=" m-0">Rs {cart?.productId?.price}</p>
      </div>
      <div className="col-2 d-flex justify-content-end align-items-center">
        <p className="fw-bold m-0">Qty {cart?.quantity}</p>
      </div>
      <div className="col-2 d-flex justify-content-end align-items-center">
        <p className="fw-bold m-0">
          Rs {cart?.quantity * cart?.productId?.price}
        </p>
      </div>
    </div>
  );
}

export default CartItemCard;
