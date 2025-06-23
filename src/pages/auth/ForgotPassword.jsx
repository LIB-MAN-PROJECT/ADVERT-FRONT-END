import React from 'react'
import { Link } from 'react-router'

const ForgotPassword = () => {
  return (
    <div className='flex justify-center items-start py-10 px-5 bg-gray-100'>
      <div>
        <h1 className='text-2xl font-bold mb-6 text-center'>Reset Password</h1>
        <p className='py-3'>Click "Continue" to reset your password</p>
      <button>Continue</button>
        <p><Link to="/dashboard/login">Back to Login</Link></p>
        
    </div>
      
    </div>
    
  )
}

export default ForgotPassword