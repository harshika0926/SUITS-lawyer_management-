import React from "react";
import icon from "../assets/lawyers.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-20 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-4">
        <img className="w-[500px] rounded-md mx-auto my-4" src={icon} alt="/" />
        <div className="flex flex-col justify-center">
          <p className=" text-stone-800 text-2xl font-bold my-2">
            CONNECT WITH LAWYERS
          </p>
          <hr className="w-[15%] border-stone-800 mb-4 border-2  " />
          <p className=" text-gray-600 mb-4">
            Are you in need of legal assistance? Look no further. Our platform
            is designed to help you find the right lawyer for your specific
            legal needs. Whether it's a personal injury case, family law
            matters, or business-related issues, our extensive network of
            experienced attorneys is here to guide you. Take the first step
            towards resolving your legal concerns today.
          </p>
          <button className="bg-white text-black border-2 border-black w-[200px] hover:bg-black hover:text-white rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
