import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="py-20 px-4 bg-[#0e1c2d]">
      {" "}
      {/* Added bg-blue-500 for blue background */}
      <div className="max-w-6xl mx-auto grid-cols-1 p-4 grid md:grid-cols-3 gap-12">
        <div className="bg-[#1d406a] hover:bg-blue-200 text-center items-center w-full shadow-lg hover:shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="p-6">
            <img
              className="w-20 mx-auto -mt-8 p-1 rounded-md bg-transparent "
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center mt-6 py-8">
              Lawyer 1
            </h2>
            <p className="text-center text-4xl font-bold mt-4">14009</p>
            <div className="text-center font-medium mt-6">
              <p className="py-2 border-b ">Legal Cases Won </p>
              <p className="py-2 border-b ">Cases lost</p>
              <p className="py-2 border-b">Cases Won</p>
            </div>
            <button className="bg-[#00df9a]  hover:bg-[#00df59] rounded-md font-medium my-6 mx-auto px-16 py-3">
              Fight Case
            </button>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl bg-gray-100 text-center items-center w-full flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 md:-mt-4">
          <div className="p-6">
            <img
              className="w-20 mx-auto -mt-8 p-1 bg-transparent"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center mt-6 py-8">
              Fight Case
            </h2>
            <p className="text-center text-4xl font-bold mt-4">149</p>
            <div className="text-center font-medium mt-6">
              <p className="py-2 border-b border-gray-500">Lawyer 2</p>
              <p className="py-2 border-b border-gray-500">Case Lost: 39</p>
              <p className="py-2 border-b border-gray-500">Case Won: 110</p>
            </div>
            <button className="bg-black text-white hover:bg-gray-300 hover:border-black hover:border-2 hover:text-black rounded-md font-medium my-6 mx-auto px-16 py-3">
              Hire
            </button>
          </div>
        </div>
        <div className="bg-blue-400 hover:bg-blue-200 text-center items-center w-full shadow-lg hover:shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="p-6">
            <img
              className="w-20 mx-auto -mt-8 p-1 rounded-md bg-transparent "
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center mt-6 py-8">Legal</h2>
            <p className="text-center text-4xl font-bold mt-4">1409</p>
            <div className="text-center font-medium mt-6">
              <p className="py-2 border-b ">Fight </p>
              <p className="py-2 border-b ">Case Won: 79</p>
              <p className="py-2 border-b">Case Lost: 70</p>
            </div>
            <button className="bg-[#00df9a]  hover:bg-[#00df59] rounded-md font-medium my-6 mx-auto px-16 py-3">
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
