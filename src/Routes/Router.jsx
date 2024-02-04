import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Users/Home/HomePage";
import Layout from "../Components/Layout/Layout";
import ProductsPage from "../Pages/Users/Products/ProductsPage";
import ProductPage from "../Pages/Users/Products/Product/ProductPage";
import CartPage from "../Pages/Users/Cart/CartPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import RegisterPage from "../Pages/Auth/Register/RegisterPage";
import LoginPage from "../Pages/Auth/Login/LoginPAge";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);
