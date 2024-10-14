// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-5 relative flex h-16 items-center">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center bg-white p-1 rounded-md">
            <img
              className="h-6 w-auto "
              src="https://avatars.githubusercontent.com/u/171466913?s=200&v=4"
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link
                to="/dashboard"
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Profile
              </Link>
              <Link
                to="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-end">
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
