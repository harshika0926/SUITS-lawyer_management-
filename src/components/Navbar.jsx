import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [showKYCModal, setShowKYCModal] = useState(false); // State to control the KYC modal

  const handleNav = () => {
    setNav(!nav);
  };

  // const handleLogin = () => {
  //   // setShowKYCModal(true); // Show the KYC modal when Login is clicked
  //   <Link to={`/register`} />;
  // };

  // const handleCloseKYCModal = () => {
  //   setShowKYCModal(false); // Close the KYC modal
  // };

  return (
    <div className="bg-black opacity-80 flex justify-between items-center h-20 w-full px-4 text-white">
      <h1 className="w-full px-4 text-3xl font-bold text-white">
        <a href="/" className=" cursor-default">
          SUITS
        </a>
      </h1>
      <ul className="hidden md:flex space-x-8 ">
        <li className="p-4 hover:text-[#f5e671]">
          <a href="/">Home</a>
        </li>
        <li className=" p-4 cursor-pointer whitespace-nowrap hover:text-[#f5e671]">
          Consult An Expert
        </li>
        <li className="p-4 cursor-pointer whitespace-nowrap hover:text-[#f5e671]">
          Find Lawyer
        </li>
        <li className="p-4 cursor-pointer hover:text-[#f5e671]">Login</li>
        <Link to={`/register`}>
          <li
            className=" p-2 cursor-pointer hover:text-[#f5e671] items-center text-center"
            onClick=""
          >
            <AiOutlineUser size={20} className="inline-block" />
            Register
          </li>
        </Link>
      </ul>

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`${
          nav ? "fixed" : "hidden"
        } right-0 top-20 w-[60%] max-h-30 bg-blue-500 rounded-sm`}
      >
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">Find Lawyer</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
