function LargeProductCard({ product }) {
  console.log(product);
  return (
    <div className="d-flex text-center flex-column align-items-center py-5">
      <img
        className="m-4 "
        width={"225px"}
        height={"310px"}
        src={product?.defaultImage}
        alt="Product image"
      />
      <p className="text-info fw-semibold ">{product?.category?.name}</p>
      <p className="fw-bold text w-50 ">{product?.name}</p>
      <p className="text-secondary">
        OMR <span className="fw-bold text-dark p-2">{product?.price} </span>
        <span>
          <s> {product?.price + product?.price / 2}</s>
        </span>
      </p>
      <button className=" bg-tealBlue border-0 py-2 px-5 my-2 text-light fw-semibold cartBtn">
        Add to cart
      </button>
    </div>
    // =====================================BACKUP==================
    // <div className="d-flex text-center flex-column align-items-center py-5">
    //   <img
    //     className="m-4"
    //     width={"225px"}
    //     src="https://res.cloudinary.com/dknozjmje/image/upload/v1707044971/Credot/static/ziow04kvrbazaaxlkwkq.png"
    //     alt=""
    //   />
    //   <p className="text-info fw-semibold ">AUDIO AMPLIFIER, HDMI PROJECTORS</p>
    //   <p className="fw-bold text w-50 ">
    //     iPhone 14 Pro max 256GB - Deep Purple
    //   </p>
    //   <p className="text-secondary">
    //     OMR <span className="fw-bold text-dark p-2">4,699.00 </span>
    //     <span>
    //       <s>4,699.00</s>
    //     </span>
    //   </p>
    //   <button className=" bg-tealBlue border-0 py-2 px-5 my-2 text-light fw-semibold cartBtn">Add to cart</button>
    // </div>
  );
}

export default LargeProductCard;
