import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Register = () => {
  return (
    <div className="bg-blue-500">
      <Navbar />
      <div className=" my-[3%] mx-auto w-[70%] h-full bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border-2 border-black">
          <h2 className="text-xl font-semibold mb-4 text-black">KYC Details</h2>
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
          <button className="bg-black text-white rounded-md font-medium w-full py-2">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
