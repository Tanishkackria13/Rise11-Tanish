"use client"

import React from "react";

const NavBar: React.FC = () => {
  const performOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Button clicked!");
  };

  return (
    <nav className="flex justify-between items-center bg-slate-50 shadow-2xl py-3 px-12">
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="Jur Logo" className="w-10 h-10 cursor-pointer" />
        <h1 className="text-3xl font-extrabold text-gray-700 cursor-pointer">Jur</h1>
      </div>
      <div className="flex items-center space-x-6">
        <button onClick={performOnClick}>
          <img src="/user.svg" alt="User Icon" className="w-6 h-6" />
        </button>
        <button onClick={performOnClick}>
          <img
            src="/notification.svg"
            alt="Notification Icon"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
