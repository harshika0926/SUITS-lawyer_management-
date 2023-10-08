import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white mt-8 ">
      <div className="w-full h-screen -mt-8 mb-0 text-center flex flex-col justify-center bg-black bg-opacity-60  ">
        <p className="font-bold p-1 text-3xl">Find lawyer</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          {/* Added line breaks */}
          Legal <br /> Marketplace
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Find solution for
          </p>
          {/* Added line breaks */}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Business Setup",
              "Tax-Compliance",
              "Trademark & IP",
              "Documentation",
              "Others",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-black border-[1px] hover:bg-gray-100 hover:text-black hover:border-2 hover:border-gray-900 w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-white">
          Find Legal Help
        </button>
      </div>
    </div>
  );
};

export default Hero;
