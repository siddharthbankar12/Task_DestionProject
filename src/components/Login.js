// src/components/Login.js
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Login = () => {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6 text-right">
              <a href="/forgot-password" className="text-sm text-blue-500">
                Forgot Password?
              </a>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Login
            </button>
          </form>
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
