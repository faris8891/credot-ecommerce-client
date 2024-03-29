import { useEffect, useRef } from "react";
import { userLogin } from "../../../Services/userServices";
import { NavLink, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginCredentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const login = await userLogin(loginCredentials);
    if (login) {
      navigate("/");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column py-5 ">
      <p className={"fw-bold fs-3 text-center"}>Login</p>
      <form
        onSubmit={handleLogin}
        className="d-flex flex-column gap-3 border  rounded-3 p-5"
      >
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
            Login
          </button>
          <NavLink to={"/register"} exact>
            <button type="button" className="border-0 px-3 py-1 social-button">
              Register
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
