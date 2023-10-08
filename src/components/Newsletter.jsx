import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-[#0e1c2d]">
      {" "}
      {/* Changed text-black to bg-blue-500 */}
      <div className="w-[90%] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to Register as a Legal Service Provider?
          </h1>
          <p>
            Provide your email and we will contact you regarding further
            process.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#eab517] hover:text-[#f5e671] cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
