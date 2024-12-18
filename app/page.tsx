import ClaimForm from "@/components/Form";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import SideBar from "@/components/SideBar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-5 overflow-hidden bg-gray-100 rounded-2xl">
          <ProgressBar currentStep={3} />
          <ClaimForm />
        </div>
      </div>
    </div>
  );
};
export default Home;
