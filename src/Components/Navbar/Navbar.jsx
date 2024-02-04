import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const routes = [
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className=" w-100   d-lg-flex align-items-lg-center container">
        <NavLink className="navbar-brand font-weight-bold" to="/" exact>
          Demo
        </NavLink>
        <button
          className="navbar-toggler position-fixed end-0 me-2 top-0 mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bx bx-menu"></i>
        </button>

        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
          id="navbarSupportedContent"
        >
          <form className="form-inline my-2 mt-4 mt-lg-0 my-lg-0 d-flex gap-3 flex-lg-row">
            <input
              className="form-control mr-sm-2  "
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success  my-sm-0" type="button">
              Search
            </button>
          </form>

          <ul className="navbar-nav mr-auto ms-3">
            {routes.map((route) => (
              <li className="nav-item" key={route.name}>
                <NavLink className="nav-link" to={route.path} exact>
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
