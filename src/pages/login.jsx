import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../components/user-login";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          navigate("/", { replace: true });
          toast.success("Registration successful!");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration failed. Please check your inputs.");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {open ? (
        <UserLogin />
      ) : (
        <div className="w-full max-w-xs">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          <form onSubmit={handleSubmit(registerUser)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <input
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <input
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
          <button
            onClick={() => setOpen(!open)}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            {open ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

