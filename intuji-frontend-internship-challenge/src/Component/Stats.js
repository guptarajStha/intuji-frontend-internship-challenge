import React from "react";
import icons from '../assets/icon.png'
import { FaStar,FaUser } from "react-icons/fa";

import curve from '../assets/44.png'
const Stats = () => {

  return (
    <div className="w-full bg-[#3734A9] relative text-white">
      <div className="w-[80%] m-auto flex p-2 md:p-4 lg:p-6 xl:p-8 justify-between">
        <div className="text-[8px] sm:text-[10px] md:text-[14px] g:text-[16px] xl:text-[19px] text-white w-[100px] md:w-[143px] flex items-center justify-center border-r-[2px] border-black">We speak with our powerfull statistics</div>
        <div>
            <h1 className=" font-extrabold text-[18px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[72px]">1M+</h1>
            <p className="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-[18px] lg:text-[25px] xl:text-[30px]"><FaUser  className="text-[#B1CA16]"/> Active Users</p>
        </div>
        <div>
            <h1 className=" font-extrabold text-[18px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[72px]">30K+</h1>
            <p className="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-[18px] lg:text-[25px] xl:text-[30px]"><FaStar  className="text-[#B1CA16]"/>5-Stars Reviews</p>
        </div>
        <div>
            <h1 className=" font-extrabold text-[18px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[72px]">$252M</h1>
            <p className="flex items-center justify-center gap-2 text-[10px] sm:text-[12px] md:text-[18px] lg:text-[25px] xl:text-[30px]"><FaStar  className="text-[#B1CA16]"/> Transactions</p>
        </div>
       
      </div>
      {/* <div className="h-full border-r-[1px] border-black bg-green-400 absolute top-0 xl:left-[22vw]">

      </div> */}
      <img src={curve} alt="" className="absolute right-0 top-0 w-[3%] md:w-[4%] lg:w-auto" />
    </div>
  );
};

export default Stats;
