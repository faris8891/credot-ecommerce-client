import toast from "react-hot-toast";
import { login, register } from "../Axios/userApi";

export async function userLogin(loginCredentials) {
  try {
    const res = await login(loginCredentials);
    const token = res.data?.accessToken;
    localStorage.setItem("accessToken", token);
    return token ? true : false;
  } catch (error) {
    toast.error(error?.errorMessage, {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}

export async function userRegister(userCredentials) {
  try {
    const res = await register(userCredentials);
    return res;
  } catch (error) {
      console.log(error);
    toast.error(error?.errorMessage || "Something went wrong", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
  }
}
