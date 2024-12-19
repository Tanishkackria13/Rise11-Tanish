"use client";
import React, { useState } from "react";
import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import SideBar from "@/components/SideBar";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Manage the sidebar open state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close
  };

  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar
          isOpen={isOpen}
          closeSidebar={toggleSidebar} 
          className="bg-white shadow-lg w-64" 
        />

        <div className="flex-1 p-4 sm:p-5  bg-gray-100 rounded-2xl">
          <ProgressBar currentStep={3} />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
