import React from "react";
import { FaTachometerAlt, FaFolder, FaTasks, FaCalendarAlt, FaFileAlt, FaGavel } from "react-icons/fa";

export const Items: { name: string; icon: React.ReactNode }[] = [
  { name: "Dashboard", icon: <FaTachometerAlt size={20} /> },
  { name: "My Cases", icon: <FaFolder size={20} /> },
  { name: "Activities", icon: <FaTasks size={20} /> },
  { name: "Calendar", icon: <FaCalendarAlt size={20} /> },
  { name: "Files", icon: <FaFileAlt size={20} /> },
  { name: "Open a Dispute", icon: <FaGavel size={20} /> },
];

interface SideBarProps {
  isOpen: boolean;  // Sidebar visibility state
  closeSidebar: () => void;  // Close sidebar function
}

const SideBar: React.FC<{ isOpen: boolean; closeSidebar: () => void; className?: string }> = ({
  isOpen,
  closeSidebar,
  className,
}) => {
  return (
    <div
      className={`fixed inset-0 z-40 transform bg-slate-50 shadow-lg transition-transform lg:relative lg:translate-x-0 lg:z-10 lg:w-72 ${className} ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button for small/medium screens */}
      <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={closeSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      {/* Sidebar Items */}
      <ul className="flex-1">
        {Items.map((item, index) => (
          <li
            key={index}
            className="p-4 cursor-pointer text-gray-400 hover:bg-gray-100 flex items-center space-x-3"
          >
            <span className="text-gray-600">{item.icon}</span>
            <span className="text-sm md:text-base">{item.name}</span>
          </li>
        ))}
      </ul>
      {/* Sidebar Footer Image */}
      <div className="relative hidden lg:block">
        <img
          src="/SidebarImage.png"
          alt="Sidebar Footer"
          className="w-full m-2 h-[14rem] lg:h-[18rem] object-cover rounded-2xl"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold px-3 py-1 text-sm lg:text-base">
          Get Justice on every claim
        </p>
      </div>
    </div>
  );
};




export default SideBar;
