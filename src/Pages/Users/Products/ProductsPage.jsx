import { useEffect, useState } from "react";
import AddCategory from "../../../Components/Products/AddCategory";
import AddProduct from "../../../Components/Products/AddProduct";
import {
  fetchCategories,
  fetchProducts,
} from "../../../Services/productServices";
import LargeProductCard from "../../../Components/Products/LargeProductCard";

function ProductsPage() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    const categories = async () => {
      const res = await fetchCategories();
      setCategory(res?.data?.categories);
    };
    categories();
  }, []);

  useEffect(() => {
    const filters = {
      category: filter,
    };
    const products = async () => {
      const res = await fetchProducts(filters);
      setProducts(res?.data?.products);
    };
    products();
  }, [filter]);
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start gap-5">
          <p className="fs-4 fw-bold">Products</p>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="category"
            className="w-100 h-75 "
          >
            <option value={""}>All Category</option>
            {category &&
              category?.map((element) => (
                <option key={element?._id} value={element?._id}>
                  {element?.name}
                </option>
              ))}
          </select>
        </div>
        <div className=" d-flex justify-content-end gap-4">
          <AddCategory />
          <AddProduct category={category} />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-4  ">
        {products &&
          products?.map((product) => (
            <LargeProductCard key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductsPage;
