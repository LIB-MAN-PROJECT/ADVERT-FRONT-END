import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';

const Login = () => {
    const [formData, setformData] = useState({email: '', password:''});

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup data:", formData);
    }
  return (
    

     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

         <p><Link to="/forgot-password">Forgot Password?</Link></p>

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Log In
        </button>

        

        <p>Don't have an account, <Link to="/sign-up">Sign Up</Link></p>
        
      </form>
       </div>
    
  )
}

export default Login;