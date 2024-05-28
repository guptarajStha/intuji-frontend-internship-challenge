import React from "react";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import ellipse3 from "../assets/Ellipse3.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/image4.png";
import pattern from "../assets/2.png";
import tick from "../assets/tick.png";
const WhyChooseUs = () => {
  return (
    <div className="w-[80%] m-auto pt-[60px] pb-[60px] flex gap-40">
      <div className="w-[531px] h-[480px] bg-[#DFF6FF] rounded-[20px] relative  z-10 flex flex-col justify-center items-center gap-[25px]">
        <img
          src={ellipse1}
          alt=""
          className=" absolute z-0 top-0 left-0 rounded-tl-[20px]"
        />
        <img
          src={ellipse2}
          alt=""
          className=" absolute right-0 top-[27%] z-0"
        />
        <img
          src={ellipse3}
          alt=""
          className=" absolute left-0 bottom-0 z-0 rounded-bl-[20px]"
        />
        <img src={pattern} alt="" className=" absolute -right-2 -top-5 z-20" />
        <div className="flex justify-center items-center w-full z-10 relative">
          <div className="w-[80%] flex bg-[#FFFFFF] rounded-[10px] h-[80px] items-center p-6 gap-4 shadow-lg">
            <img src={image1} alt="" />
            <div className="flex flex-col">
              <div className=" bg-[#ebebf6] w-[86px] text-[#3734A9] px-2 rounded-full">
                +$28,900
              </div>
              <p>Received from Michael V</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-10 relative ml-[300px]">
          <div className="w-[80%] flex bg-[#FFFFFF] rounded-[10px] h-[80px] items-center p-6 gap-4 shadow-lg">
            <img src={image2} alt="" />
            <div className="flex flex-col">
              <div className=" bg-[#ebebf6] w-[86px] text-[#3734A9] px-2 rounded-full">
                +$28,900
              </div>
              <p>Received from Michael V</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-10 relative ml-[200px]">
          <div className="w-[80%] flex bg-[#FFFFFF] rounded-[10px] h-[80px] items-center p-6 gap-4 shadow-lg">
            <img src={image3} alt="" />
            <div className="flex flex-col">
              <div className=" bg-[#ebebf6] w-[86px] text-[#3734A9] px-2 rounded-full">
                +$28,900
              </div>
              <p>Received from Michael V</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-10 relative">
          <div className="w-[80%] flex bg-[#FFFFFF] rounded-[10px] h-[80px] items-center p-6 gap-4 shadow-lg">
            <img src={image4} alt="" />
            <div className="flex flex-col">
              <div className=" bg-[#ebebf6] w-[86px] text-[#3734A9] px-2 rounded-full">
                +$28,900
              </div>
              <p>Received from Michael V</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="font-bold text-[#3734A9] text-[14px]">WHY TO CHOOSE US</h2>
        <h1 className="font-extrabold text-[50px]">Track your payments on the go with the best way possible</h1>
        <p className="text-[18px] text-[#505887]">
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <hr className="bg-[#C4C4C4] h-[2px]" />
        <div className=" flex items-center gap-2">
          <div className="w-[24px] h-[24px] bg-[#FDBC64] rounded-full flex justify-center items-center">
            <img className="w-[8px] h-[6px]" src={tick} alt="" />
          </div>
          <p className="text-[#505887] text-[19px]">Get Overview at a glance</p>
        </div>
        <div className=" flex items-center gap-2">
          <div className="w-[24px] h-[24px] bg-[#FDBC64] rounded-full flex justify-center items-center">
            <img className="w-[8px] h-[6px]" src={tick} alt="" />
          </div>
          <p className="text-[#505887] text-[19px]">Deoposit funds easily, securlity</p>
        </div>
        <div className=" flex items-center gap-2">
          <div className="w-[24px] h-[24px] bg-[#FDBC64] rounded-full flex justify-center items-center">
            <img className="w-[8px] h-[6px]" src={tick} alt="" />
          </div>
          <p className="text-[#505887] text-[19px]">Get Live Support</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
