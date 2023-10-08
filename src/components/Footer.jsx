import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto py-12 px-12 grid lg:grid-cols-3 gap-8 text-gray-800 bg-white">
        <div className="p-4">
          <h1 className="w-full text-4xl font-bold text-black">SUITS</h1>
          <p className="py-4 text-xl font-semibold text-gray-800">
            Empowering Legal Access!
          </p>
          <div className="flex justify-between md:w-[65%] my-4">
            <FaFacebookSquare size={30} color="black" />
            <FaInstagram size={30} color="black" />
            <FaTwitterSquare size={30} color="black" />
            <FaGithubSquare size={30} color="black" />
          </div>
        </div>
        {/* <div className="text-black">
        <p className="my-2 text-3xl font-semibold">Quick Links</p>
          <p className="my-2">Home</p>
          <p className="my-2">Consult an Expert</p>
          <p className="my-2">Find Lawyer</p>
      </div> */}
        <div className="lg:col-span-2 flex justify-around mt-6">
          <div className="">
            <h6 className="font-semibold py-2 text-xl text-black">
              Quick Links
            </h6>
            <ul>
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">Consult an Expert</li>
              <li className="py-2 text-sm">Find Lawyer</li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold py-2 text-xl text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Privacy Policy</li>
              <li className="py-2 text-sm">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold bg-[#0e1c2d] text-white">
        <p>© 2023 SUITS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
