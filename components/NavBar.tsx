"use client";

import React, { useState } from "react";
import SideBar from "./SideBar";

const NavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-slate-50 shadow-2xl py-3 px-6 sm:px-12">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.svg"
            alt="Jur Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer"
          />
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-700 cursor-pointer">
            Jur
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
          <button className="p-2 rounded hover:bg-gray-100">
            <img
              src="/user.svg"
              alt="User Icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <img
              src="/notification.svg"
              alt="Notification Icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded hover:bg-gray-100"
        >
          <img
            src="/menu.svg"
            alt="Menu Icon"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </button>
      </nav>
    </>
  );
};

export default NavBar;