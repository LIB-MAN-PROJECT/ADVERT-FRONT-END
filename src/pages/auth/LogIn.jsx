import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  
const isError = Object.keys(errors).length > 0;

  const [showPassword, setShowPassword] = useState(false);
  // const [state, setState] = useState("vendor");

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      email: data.email,
      password: data.password,
    };
    setIsSubmitting(true);

    try {
      const res = await apiLogin(payload);
      console.log(res);
      localStorage.setItem("accessToken", res.data.token);
      const userRole = res.data.user.role;
      toast.success(res.data.message || "Logged In Successfully!");

      if (userRole =="vendor") {
        navigate("/dashboard");
      } else {
          navigate("/")
        }
      
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Failed Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [formData, setformData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    const isError = Object.keys(errors).length > 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Signup data:", formData);
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          // onChange={handleChange}
          className="w-full p-2 border rounded"
          {...register("email", { required: "Email address required" })}
        />
        {errors?.email && (
          <span className="text-red-500">{errors.Email.message}</span>
        )}
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          {...register("password", { required: "password is required" })}
        />
        {errors?.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <button
          type="submit"
          disabled={isError}
          className={`${
            isError ? "bg-gray-200 cursor-not-allowed" : "bg-gray-500 w-full"
          } w-full bg-green-600 text-white p-2 rounded hover:bg-green-700`}
        >
          {isSubmitting ? "Login In..." : "Login"}
        </button>

        <p>
          Don't have an account, <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
