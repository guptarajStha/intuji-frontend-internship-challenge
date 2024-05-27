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
      <div className="w-[50%] ">
        <h2 className=" font-extrabold text-[60px]">
          Managing freelance payments has never been easier
        </h2>
        <p className=" font-normal w-[60%] mt-[1vw]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.{" "}
        </p>
        <div className="flex justify-start items-center mt-[3vw] gap-[50px]">
          <button className="w-[162px] h-[60px] bg-[#3734A9] rounded-full text-white">
            Get Started
          </button>
          <div className="flex justify-center items-center">
            <button className="w-[60px] h-[60px] bg-[#22D497] rounded-full items-center  flex justify-center">
              <img src={play} sizes={25} alt="" />
            </button>
            <p className="text-[#3734A9] ml-[1px]">See How it Works</p>
          </div>
        </div>
          <div className="flex mt-[3vw] gap-[24px]">
            <div className=" flex items-center">
              <div className="w-[18px] h-[18px] bg-[#3734A9] rounded-full flex justify-center items-center">
                <img className="w-[8px] h-[6px]" src={tick} alt="" />
              </div>
              <p>Free Register</p>
            </div>
            <div className=" flex items-center">
              <div className="w-[18px] h-[18px] bg-[#3734A9] rounded-full flex justify-center items-center">
                <img className="w-[8px] h-[6px]" src={tick} alt="" />
              </div>
              <p>Free Register</p>
            </div>
          </div>
      </div>
      <div className="absolute left-[55%]  z-0 -bottom-[150px]">
        <img className="w-[100%] h-[800px]" src={hand_image} alt="" />
      </div>
      <div className=" absolute bottom-0 -left-[20px]">
        <img className="w-[100px] h-[90px]" src={pattern1} alt="" />
      </div>
      <div className=" absolute top-[200px] right-0">
        <img className="" src={pattern2} alt="" />
      </div>
      <div className=" absolute -bottom-[250px] right-0">
        <img className="" src={pattern3} alt="" />
      </div>
    </div>
  );
};

export default Intro;
