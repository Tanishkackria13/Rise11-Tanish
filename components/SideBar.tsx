import React from "react";

const SideBar: React.FC = () => {
  const Items: string[] = [
    "Dashboard",
    "My Cases",
    "Activities",
    "Calender",
    "Files",
    " Open a dispute",
  ];
  return (
    <div className="bg-slate-50 flex flex-col shadow-lg h-screen w-[19%]">
      <h2 className="text-2xl font-extrabold p-5 text-center">Jur</h2>
      <ul className=" flex-1">
        {Items.map((item) => (
          <li className="p-4 cursor-pointer text-gray-400 hover:bg-gray-100" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className="relative">
        <img
          src="/SidebarImage.png"
          alt=""
          className="w-full m-2 h-[18rem] object-cover rounded-2xl"
        />
        <p className="absolute top-10 left-1/2 transform -translate-x-1/3 text-black  font-bold px-3 py-1 ">
          Get Justice on every claim
        </p>
      </div>
    </div>
  );
};

export default SideBar;
