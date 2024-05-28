import React from "react";
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import d5 from '../assets/d5.png'
const Discover = () => {
  return (
    <div className="w-full bg-[#3734A9] rounded-[20px] text-white p-20 flex justify-center items-center relative">
        <img src={d1} alt="" className=" absolute right-10 bottom-10" />
        <img src={d2} alt="" className=" absolute mt-12 -ml-6 left-64" />
        <img src={d3} alt="" className=" absolute right-20 top-10" />
        <img src={d4} alt="" className=" absolute top-12 -ml-[46vw]" />
        <img src={d5} alt="" className=" absolute bottom-10 left-20" />
      <div className="w-[75%] text-center justify-center flex flex-col items-center gap-20 z-50">
        <h1 className="text-[56px] font-extrabold ">Discover a better way to manage spendings</h1>
        <button className="bg-[#FF7F5C] px-10 py-5 rounded-[10px]">Get Started Now</button>
      </div>
    </div>
  );
};

export default Discover;
