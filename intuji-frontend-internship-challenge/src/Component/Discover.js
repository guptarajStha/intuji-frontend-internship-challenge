import React from "react";
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import d5 from '../assets/d5.png'
const Discover = () => {
  return (
    <div className="w-full bg-[#3734A9] rounded-[20px] text-white p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex justify-center items-center relative mb-[30px]">
      
        <img src={d1} alt="" className=" absolute right-10 bottom-10 w-[8%] md:w-[10%] lg:w-[12%] xl:w-auto hidden sm:flex" />
        <img src={d2} alt="" className=" absolute  lg:flex mt-12 -ml-6 left-64 w-[8%] md:w-[8%] lg:w-[10%] xl:w-auto hidden" />
        <img src={d3} alt="" className=" absolute right-20 top-10 w-[4%] md:w-[10%] lg:w-[12%] xl:w-auto hidden sm:flex" />
        <img src={d4} alt="" className=" absolute top-12 -ml-[46vw]  lg:flex w-[8%] md:w-[10%] lg:w-[12%] xl:w-auto hidden " />
        <img src={d5} alt="" className=" absolute bottom-10 left-20 h-[8%] md:h-[20%] lg:h-[30%] xl:h-auto hidden sm:flex" />
      <div className="w-[75%] text-center justify-center flex flex-col items-center gap-20 z-50">
        <h1 className="sm:text-[21px] md:text-[28px] lg:text-[40px] xl:text-[54px] font-extrabold  flex flex-col">Discover a better way to <span> manage spendings</span> </h1>
        <button className="bg-[#FF7F5C] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-[10px]">Get Started Now</button>
      </div>
    </div>
  );
};

export default Discover;
