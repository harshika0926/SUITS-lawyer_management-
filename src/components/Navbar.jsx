import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false); // State to control the KYC modal

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    setShowKYCModal(true); // Show the KYC modal when Login is clicked
  };

  const handleCloseKYCModal = () => {
    setShowKYCModal(false); // Close the KYC modal
  };

  return (
    <div className="bg-blue-500 flex justify-between items-center h-20 w-full px-6 text-white">
      <h1 className="w-full ml-[2%] text-3xl font-bold text-white">SUITS</h1>
      <ul className="hidden md:flex space-x-8 ">
        <li className="p-4">Home</li>
        <li className=" p-4 whitespace-nowrap">Consult An Expert</li>
        <li className="p-4 whitespace-nowrap">Find Lawyer</li>
        <li className="p-4 cursor-pointer">Login</li>
        <li className=" p-2 cursor-pointer" onClick={handleLogin}>
          <AiOutlineUser size={20} className="inline-block mr-2" />
          Register
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`${
          nav ? "fixed" : "hidden"
        } right-0 top-20 w-[60%] max-h-30 bg-blue-500 rounded-sm`}
      >
        {/* <h1 className="text-3xl font-bold text-[black] m-4">REACT.</h1> */}
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">Find Lawyer</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* KYC Modal */}

      {showKYCModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-yellow-200 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">
              KYC Details
            </h2>
            {/* Add input fields for KYC details */}
            <input
              type="text"
              placeholder="Name"
              className="mb-2 w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="mb-2 w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Address"
              className="mb-2 w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Government ID Number"
              className="mb-2 w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Kind of Case"
              className="mb-2 w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Budget"
              className="mb-2 w-full p-2 rounded"
            />
            <button
              onClick={handleCloseKYCModal}
              className="bg-black text-white rounded-md font-medium w-full py-2"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
