import { FaTachometerAlt, FaFolder, FaTasks, FaCalendarAlt, FaFileAlt, FaGavel } from "react-icons/fa"; // Import icons
import React from "react";
export const Items: { name: string; icon: React.ReactNode }[] = [
  { name: "Dashboard", icon: <FaTachometerAlt size={20} /> },
  { name: "My Cases", icon: <FaFolder size={20} /> },
  { name: "Activities", icon: <FaTasks size={20} /> },
  { name: "Calendar", icon: <FaCalendarAlt size={20} /> },
  { name: "Files", icon: <FaFileAlt size={20} /> },
  { name: "Open a Dispute", icon: <FaGavel size={20} /> },
];

const SideBar: React.FC = () => {
  return (
    <div className="bg-slate-50 flex flex-col shadow-lg w-[19%]">
      <ul className="flex-1">
        {Items.map((item, index) => (
          <li
            key={index}
            className="p-4 cursor-pointer text-gray-400 hover:bg-gray-100 flex items-center space-x-3"
          >
            <span className="text-gray-600">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="relative">
        <img
          src="/SidebarImage.png"
          alt=""
          className="w-full m-2 h-[18rem] object-cover rounded-2xl"
        />
        <p className="absolute top-10 left-1/2 transform -translate-x-1/3 text-black font-bold px-3 py-1">
          Get Justice on every claim
        </p>
      </div>
    </div>
  );
};

export default SideBar;
