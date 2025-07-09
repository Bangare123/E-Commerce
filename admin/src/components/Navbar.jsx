//import React from "react";
//import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      {/* <img className="w-[max(10%,80px)]" src={assets.logo} alt="" /> */}
      <h1
        style={{
          fontSize: "2rem",
          fontFamily: "'Eater', serif",
          marginBottom: "15px",
        }}
      >
        Fashion
      </h1>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
