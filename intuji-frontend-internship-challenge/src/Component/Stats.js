import React from "react";
import icons from '../assets/icon.png'
import { FaStar } from "react-icons/fa";
import curve from '../assets/44.png'
const Stats = () => {

  return (
    <div className="w-full bg-[#3734A9] relative text-white">
      <div className="w-[80%] m-auto flex p-8 justify-between">
        <div className="text-[19px] text-white w-[143px] flex items-center justify-center">We speak with our powerfull statistics</div>
        <div>
            <h1 className=" font-extrabold text-[72px]">1M+</h1>
            <p className="flex items-center justify-center gap-2 text-[30px]"><img src={icons} alt=""/> Active Users</p>
        </div>
        <div>
            <h1 className=" font-extrabold text-[72px]">30K+</h1>
            <p className="flex items-center justify-center gap-2 text-[30px]"><FaStar  className="text-[#B1CA16]"/>5-Stars Reviews</p>
        </div>
        <div>
            <h1 className=" font-extrabold text-[72px]">$252M</h1>
            <p className="flex items-center justify-center gap-2 text-[30px]"><FaStar  className="text-[#B1CA16]"/> Transactions</p>
        </div>
       
      </div>
      <div className="h-full border-r-[1px] border-black bg-green-400 absolute top-0 left-[21rem]">

      </div>
      <img src={curve} alt="" className="absolute right-0 top-0" />
    </div>
  );
};

export default Stats;
