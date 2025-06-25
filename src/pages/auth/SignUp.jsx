import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { span } from "framer-motion/client";
import { apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState("vendor");

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      username: data.username,
      email: data.Email,
      password: data.password,
      role: state,
      // confirmPassword: data.confirmPassword,
      // country: data.location,
    };
    setIsSubmitting(true);

    try {
      const res = await apiSignUp(payload);
      console.log(res);
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Error Occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isError = Object.keys(errors).length > 0;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <div className="flex justify-center mb-6">
        <button
          type="button"
          className={`py-2 px-6 text-sm font-medium focus:outline-none transition ${
            state === "vendor"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setState("vendor")}
        >
          Vendor
        </button>
        <button
          type="button"
          className={`py-2 px-4 rounded ${
            state === "customer"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setState("user")}
        >
          Buyer
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor="name"
          >
            User Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("username", { required: "username is required" })}
          />
          {errors?.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>

        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder=" Enter Your Email"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("Email", { required: "Email is required" })}
          />
          {errors?.Email && (
            <span className="text-red-500">{errors.Email.message}</span>
          )}
        </div>
        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor="phone number"
          >
            Phone Number
          </label>
          <input
            type="phone"
            name="phone number"
            placeholder="+233"
            // onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phonenumber", {
              required: "phonenumber is required",
            })}
          />
          {errors?.phonenumber && (
            <span className="text-red-500">{errors.phonenumber.message}</span>
          )}
        </div>

        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor="location"
          >
            {" "}
            Location{" "}
          </label>

          {state === "vendor" ? (
            <input
              type="location"
              placeholder="select a country"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("location", {
                required: "location is required",
              })}
            />
          ) : null}
          {errors?.Email && (
            <span className="text-red-500">{errors.Email.message}</span>
          )}
        </div>

        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            // onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors?.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="relative mt-6">
          <label
            className="absolute -top-3 bg-white left-4 px-3"
            htmlFor=" password"
          >
            {" "}
            Confirm Password
          </label>
          <input
            type=" password"
            placeholder="Confirm Password"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("confirmPassword", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors?.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
        </div>

        <p>
          By Signing Up, you agree to our{" "}
          <Link
            to="/privacy-policy"
            className="hover:underline text-purple-600"
          >
            Privacy Policy.
          </Link>{" "}
        </p>

        <button
          type="submit"
          disabled={isError}
          className={`${
            isError ? "bg-gray-200 cursor-not-allowed" : "bg-pink-500 w-full"
          } w-full  bg-blue-600  text-white p-2 rounded hover:bg-blue-700`}
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
