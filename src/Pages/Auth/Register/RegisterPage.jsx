import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userRegister } from "../../../Services/userServices";

function RegisterPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/login");
    }
  }, [navigate]);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const namedRef = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    const userCredentials = {
      name: namedRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const register = await userRegister(userCredentials);
    if (register) {
      navigate("/login");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column py-5 ">
      <p className={"fw-bold fs-3 text-center"}>Register</p>
      <form
        onSubmit={handleRegister}
        className="d-flex flex-column gap-3 border  rounded-3 p-5"
      >
        <input
          type="text"
          name="name"
          ref={namedRef}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <div className="d-flex gap-4 pt-3 ">
          <button type="submit" className="border-0 px-4 py-1 social-button">
            Register
          </button>
          <NavLink to={"/login"} exact>
            <button type="button" className="border-0 px-3 py-1 social-button">
              Login
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
