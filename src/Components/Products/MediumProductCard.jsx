function MediumProductCard({ product }) {
  return (
    <div className="d-flex flex-column align-items-start px-2 py-2 position-relative ">
      <p className="bg-olive px-2 fs-6 rounded-3 text-light p-0 m-0 position-absolute top-0 start-0 mt-2">
        Hot
      </p>
      <div className="d-flex justify-content-center w-100">
        <img
          className="my-2  "
          width={"130px"}
          height={"175px"}
          src={product?.defaultImage}
          alt=""
        />
      </div>
      <p className="text-info fw-semibold fs-6 m-0 ">
        {product?.category?.name}
      </p>
      <p className="fw-bold text w-75 m-0">{product?.name}</p>
      <div className="d-flex justify-content-between w-100 text-center">
        <p className="text-secondary">
          OMR <span className="fw-bold text-dark p-2 ">{product?.price} </span>
          <span>
            <s> {product?.price + product?.price / 2}</s>
          </span>
        </p>
        <i className=" bx bxs-cart-add h2 btn-gray  rounded-circle cartIcon"></i>
      </div>
    </div>
  );
}

export default MediumProductCard;
