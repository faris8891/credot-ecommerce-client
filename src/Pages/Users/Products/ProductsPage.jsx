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
  useEffect(() => {
    const categories = async () => {
      const res = await fetchCategories();
      setCategory(res?.data?.categories);
    };
    categories();
  }, []);

  useEffect(() => {
    const products = async () => {
      const res = await fetchProducts();
      setProducts(res?.data?.products);
    };
    products();
  }, []);
  return (
    <div className="container my-4">
      <div className="w-100 d-flex justify-content-end gap-4">
        <AddCategory />
        <AddProduct category={category} />
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
