import { NavLink } from "react-router-dom";
import Banners from "../../../Components/Home/Banners";
import Carousel from "../../../Components/Home/Carousel";
import TopBrands from "../../../Components/Home/TopBrands";
import LargeProductCard from "../../../Components/Products/LargeProductCard";
import MediumProductCard from "../../../Components/Products/MediumProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../Services/productServices";

function HomePage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const products = async () => {
      const query = {
        limit: 7,
      };
      const res = await fetchProducts(query);
      setProduct(res.data.products);
    };

    products();
  }, []);
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="container my-3">
        <Banners />
        <div>
          <div className=" d-flex justify-content-between w-100 my-4">
            <p className="h4">Products</p>
            <NavLink className={"text-decoration-none"} to={"/products"} exact>
              View All Products
            </NavLink>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 p-0 m-0  ">
            <div className="col-lg-4 border">
              <LargeProductCard product={product[0]} />
            </div>
            <div className="col-lg-8 row row-cols-1 row-cols-lg-3 p-0 m-0  ">
              {product &&
                product.map((element, index) => {
                  if (index !== 0) {
                    return (
                      <div key={element._id} className="border">
                        <MediumProductCard product={element} />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="h5">TOP BRAND</p>
          <TopBrands />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
