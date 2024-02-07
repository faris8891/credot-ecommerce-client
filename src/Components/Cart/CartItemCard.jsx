function CartItemCard({ cart, handleUpdateQty }) {
  return (
    <div className="w-100 border row row-cols-4 p-3 m-0  my-4">
      <div className="col-12 col-lg-6 row row-cols-6 mb-4 mb-lg-0 ">
        <div
          style={{ minHeight: "160px" }}
          className=" container-sm col-6 col-lg-3 h-full mb-4 mb-lg-0 "
        >
          <img
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "contain",
            }}
            src={cart?.productId?.defaultImage}
            alt="Product image"
          />
        </div>

        <p className="fw-bold m-0 col-12 col-lg-9  ">{cart?.productId?.name}</p>
      </div>
      <div className="col-lg-2 col-6  d-flex justify-content-lg-end justify-content-start  align-items-center">
        <p className=" m-0">Rs {cart?.productId?.price}</p>
      </div>
      <div className="col-lg-2 col-6 d-flex justify-content-end align-items-center">
        <p className="fw-bold m-0">
          <button
            disabled={cart?.quantity <= 1}
            onClick={() => handleUpdateQty(cart, false)}
            className="py-1 px-2 border-0 rounded cartBtn bg-silver mx-2 "
          >
            <i className="bx bx-minus"></i>
          </button>{" "}
          {cart?.quantity}{" "}
          <button
            onClick={() => handleUpdateQty(cart, true)}
            className="py-1 px-2 border-0 rounded cartBtn bg-silver mx-2"
          >
            <i className="bx bx-plus"></i>
          </button>
        </p>
      </div>
      <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-lg-start justify-content-end mt-3 mt-lg-0  align-items-center">
        <p className="fw-bold m-0">
          Rs {cart?.quantity * cart?.productId?.price}
        </p>
      </div>
    </div>
  );
}

export default CartItemCard;
