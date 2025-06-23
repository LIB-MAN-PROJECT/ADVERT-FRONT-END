import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState("vendor");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup data:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <div className="flex justify-between item-center">
        <button
          type="button"
          className={`py-2 px-4 rounded ${
            state === "vendor"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
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
          onClick={() => setState("customer")}
        >
          Buyer
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4"> 
        <div className="relative mt-6">
        <label className="absolute -top-3 bg-white left-4 px-3" htmlFor="name">Full Name</label>
        
        <input
          type="text"
          name="name"
          // placeholder="Full Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-2xl"
          required
        />
        </div>

        <div className="relative mt-6">
          <label className="absolute -top-3 bg-white left-4 px-3" htmlFor="phone number">Phone Number</label>
          <input
            type="phone"
            name="phone number"
            // placeholder="+233"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-2xl"
            required
          />
        </div>
        <div className="relative mt-6">
          <label className="absolute -top-3 bg-white left-4 px-3" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            // placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-2xl"
            required
          />
        </div>
       <div className="relative mt-6">
         <label className="absolute -top-3 bg-white left-4 px-3" htmlFor="phone number">Phone Number</label>
         <input
          type="phone"
          name="phone number"
          // placeholder="+233"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-2xl"
        />
       </div>
       
        {state === "vendor" ? (
          <input
            type="number"
            name="number"
            placeholder="enter account number"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            min={1}
          />
        ) : null}
        <div className="relative mt-6">
          <input
          type="password"
          name="password"
          // placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-2xl"
          required
          minLength={8}
        />
        </div>
        
        <input
          type="password"
          name="confirm password"
          // placeholder="Confirm Password"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-2xl"
          required
          minLength={8}
        />
        <p>
          By Signing Up, you agree to our <Link to='/privacy-policy'>Privacy Policy</Link>  and Terms and
          Conditions.
        </p>

        <Link to="/sign-up">
          <button
            type="submit"
            className="w-full  bg-blue-600  text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
