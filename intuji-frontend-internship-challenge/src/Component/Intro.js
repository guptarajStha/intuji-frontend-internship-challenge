import React from "react";
import hand_image from "../assets/Group_686.png";
import play from "../assets/play.png";
import tick from "../assets/tick.png";
import pattern1 from '../assets/24.png'
import pattern2 from '../assets/62.png'
import pattern3 from '../assets/80.png'
const Intro = () => {
  return (
    <div className="flex w-[80%] m-auto h-full mt-[6vw]">
      <div className="w-[60%] ">
        <h2 className=" font-extrabold sm:text-[30px] md:text-[37px] lg:text-[50px] xl:text-[60px]">
          Managing freelance payments has never been easier
        </h2>
        <p className=" font-normal w-[60%] mt-[1vw] text-[8px] md:text-[10px] lg:text-[13px] xl:text-[20px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.{" "}
        </p>
        <div className="flex justify-start items-center mt-[3vw] gap-[20px] sm:gap-[50px]">
          <button className="p-[10px]  md:p-5 md:px-8 bg-[#3734A9] rounded-[40px] text-white text-[5px] md:text-[9px] lg:text-[12px] xl:text-[16px]">
            Get Started
          </button>
          <div className="flex justify-center items-center">
            <button className="p-2 md:p-5 bg-[#22D497] rounded-full items-center  flex justify-center">
              <img className="w-[10px] md:w-[14px]" src={play} alt="" />
            </button>
            <p className="text-[#3734A9] ml-[1px] text-[5px] md:text-[9px] lg:text-[12px] xl:text-[16px]">See How it Works</p>
          </div>
        </div>
          <div className="flex mt-[3vw] gap-[24px] text-[5px] md:text-[9px] lg:text-[12px] xl:text-[16px]">
            <div className=" flex items-center gap-1 md:gap-2">
              <div className="w-[9px] h-[9px] md:w-[18px] md:h-[18px] bg-[#3734A9] rounded-full flex justify-center items-center">
                <img className="md:w-[8px] w-[5px] h-[3px] md:h-[6px]" src={tick} alt="" />
              </div>
              <p>Free Register</p>
            </div>
            <div className=" flex items-center gap-1 md:gap-2">
              <div className="w-[9px] h-[9px] md:w-[18px] md:h-[18px] bg-[#3734A9] rounded-full flex justify-center items-center">
                <img className="md:w-[8px] w-[5px] h-[3px] md:h-[6px]" src={tick} alt="" />
              </div>
              <p>Great Service</p>
            </div>
           
          </div>
      </div>
      <div className="absolute left-[60%] lg:-bottom-40  z-0">
        <img className=" w-[80%] h-[300px] sm:w-[80%] sm:h-auto md:w-[80%] md:h-[500px] xl:w-[100%] lg:h-[750px] xl:h-[800px]" src={hand_image} alt="" />
      </div>
      <div className=" absolute bottom-0 -left-[20px]">
        <img className="w-[100px] h-[90px]" src={pattern1} alt="" />
      </div>
      <div className=" absolute top-[200px] -right-6  md:-right-3 lg:right-0">
        <img className="w-[60%] md:w-[80%] lg:w-[100%]" src={pattern2} alt="" />
      </div>
      <div className="absolute bottom-5 right-0 md:-bottom-8 md:-right-[30px] lg:-bottom-[160px] lg:-right-2 xl:-bottom-[220px] xl:right-0">
        <img className="w-[10%] md:w-[80%] lg:w-[95%] xl:w-[100%]" src={pattern3} alt="" />
      </div>
    </div>
  );
};

export default Intro;
