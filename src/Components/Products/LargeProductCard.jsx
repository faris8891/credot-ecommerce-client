import { addToCart } from "../../Services/cartServices";

function LargeProductCard({ product }) {
  addToCart;
  const handleAddToCart = async (product) => {
    const res = await addToCart(product);
  };
  return (
    <div className="d-flex text-center flex-column align-items-center py-5">
      <div
        style={{ width: "225px", height: "310px", overflow: "hidden" }}
        className=" m-4 d-flex justify-content-center align-items-center border-bottom "
      >
        <img width={"100%"} height={"100%"} style={{objectFit:"contain"}} src={product?.defaultImage} alt="Product image" />
      </div>
      <p className="text-info fw-semibold ">{product?.category?.name}</p>
      <p
        title={product?.name}
        className="fw-bold text w-75"
        style={{
          height: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {product?.name}
      </p>

      <p className="text-secondary">
        OMR <span className="fw-bold text-dark p-2">{product?.price} </span>
        <span>
          <s> {product?.price + product?.price / 2}</s>
        </span>
      </p>
      <button
        onClick={() => handleAddToCart(product)}
        className=" bg-tealBlue border-0 py-2 px-5 my-2 text-light fw-semibold cartBtn"
      >
        Add to cart
      </button>
    </div>
  );
}

export default LargeProductCard;
