import React from "react";
import accident from "../assets/accident.png";
import civil from "../assets/civil-law.png";
import criminal from "../assets/criminal.png";
import employment from "../assets/employment.png";
import family from "../assets/family-law.png";
import insurance from "../assets/insurance.png";
import more from "../assets/more.png";
import tax from "../assets/tax.png";
const Areas = () => {
  return (
    <div className="px-4 py-16">
      <div className="text-center my-8">
        <p className="text-3xl mb-4 text-center">Our Legal Practice Areas</p>
        <hr className="ml-[45%] align-middle items-center w-[10%] border-[#eab517] mb-4 border-2 " />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className=" py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={accident} alt="injury" />
            <p className="p-4 font-semibold">Accident and Injuries</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={civil} alt="civil" />
            <p className="p-4 font-semibold">Civil Law</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={criminal} alt="crminal" />
            <p className="p-4 font-semibold">Criminal Law</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={employment} alt="injury" />
            <p className="p-4 font-semibold">Employment and Workers Law</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={family} alt="family" />
            <p className="p-4 font-semibold">Family Laws</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={insurance} alt="insurance" />
            <p className="p-4 font-semibold">Insurance Law</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={tax} alt="tax" />
            <p className="p-4 font-semibold">Tax Law</p>
          </div>
          <div className="py-6 px-4 flex flex-col justify-center items-center border-[3px]">
            <img src={more} alt="more" />
            <p className="p-4 font-semibold">More...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Areas;
