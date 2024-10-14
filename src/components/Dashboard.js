// src/components/Dashboard.js
import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="mt-0 bg-gray-100 flex-1 p-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome to your dashboard!</p>
      </div>
    </>
  );
};

export default Dashboard;
