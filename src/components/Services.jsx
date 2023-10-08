import React from "react";
import icon from "../assets/balance.svg";
const Services = () => {
  return (
    <div className="w-full bg-[#0e1c2d] py-20 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-4">
        <div className="flex flex-col justify-center">
          <p className=" text-[#eab517] text-lg font-bold my-2">Our Services</p>
          <p className=" text-gray-200 mb-4 text-3xl">
            We Specialize In <br /> All Issues & Disputes
          </p>
          <hr className="w-[15%] border-[#eab517] mb-4 border-2  " />
          <button className="bg-transparent text-white border-2 border-white w-[200px] hover:bg-gray-800 hover:text-white rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3">
            All Services
          </button>
        </div>
        <div className=" border-2 border-white p-8 flex flex-col md:flex-row items-center">
          <div>
            <p className="text-2xl font-bold mb-4">Why Choose SUITS?</p>
            <div className="my-4 text-justify">
              <ul className=" list-disc">
                <li className="my-1">
                  Search and discover legal service providers based on your
                  specific needs
                </li>
                <li className="my-1">
                  Our providers are vetted and trusted for their expertise and
                  professionalism
                </li>
                <li className="my-1">
                  Read real user reviews and ratings to make informed decisions
                </li>
                <li className="my-1">
                  Book appointments or request services at your convenience
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={icon} alt="icon" className="w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
