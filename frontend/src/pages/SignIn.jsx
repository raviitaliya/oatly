import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" >
      <div className="bg-white  w-full max-w-3xl relative border-2 border-dashed border-gray-300">

        

        <div className="p-8">
         
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
          Welcome Back
          </h2>

          <h2 className='text-2xl  text-center font-font2  mb-6'>Rejoin the plant-based revolution and access your favorite dairy-free delights</h2>

          
          <form className="space-y-6">
         
            <div>
              <label className="block text-2xl font-font2 mb-1">
                Username or Email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                placeholder="Enter your username or email"
              />
            </div>

            
            <div>
              <label className="block text-2xl font-font2 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                placeholder="Enter your password"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors "
            >
              SUBMIT
            </button>

            
            <div className="text-center">
              <p className="text-md text-gray-600">
                Don't have an account?{' '}
                <Link to="/signUp" className="text-black hover:underline font-medium">
                  Sign up
                </Link>
              </p>
              <p className="text-md text-gray-600">
              Forgot your password?{' '}
                <Link to="/reset-password" className="text-black hover:underline font-medium">
                  Reset It
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn