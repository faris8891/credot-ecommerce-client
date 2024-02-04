import Banners from "../../../Components/Home/Banners";
import Carousel from "../../../Components/Home/Carousel";
import TopBrands from "../../../Components/Home/TopBrands";
import LargeProductCard from "../../../Components/Products/LargeProductCard";
import MediumProductCard from "../../../Components/Products/MediumProductCard";

function HomePage() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="container my-3">
        <Banners />
        <div>
          <div className=" d-flex justify-content-between w-100 my-4">
            <p className="h5">Products</p>
            <div className="d-flex gap-4 gap-lg-5">
              <p>Add Products</p>
              <p>view all products</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 p-0 m-0  ">
            <div className="col-lg-4 border">
              <LargeProductCard />
            </div>
            <div className="col-lg-8 row row-cols-1 row-cols-lg-3 p-0 m-0  ">
              <div className="border">
                <MediumProductCard />
              </div>
              <div className="border">
                <MediumProductCard />
              </div>
              <div className="border">
                <MediumProductCard />
              </div>
              <div className="border">
                <MediumProductCard />
              </div>
              <div className="border">
                <MediumProductCard />
              </div>
              <div className="border">
                <MediumProductCard />
              </div>
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
