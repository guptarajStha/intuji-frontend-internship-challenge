import React from "react";
import symbol from '../assets/“.png'

const SectionHeading = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col lg:flex-row justify-between pt-[60px] mb-[60px] items-center gap-20 lg:justify-between">
      <div className="w-full">
        <h1 className=" xl:w-[95%] font-extrabold text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[56px]">
          Automated portfolio tracking
        </h1>
        <p className="text-[14px] sm:text-[16px] font-normal lg:w-[448px] ">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.{" "}
        </p>
      </div>
      <div className=" sm:w-[70%] lg:w-full font-semibold text-[15px]">
        <div className="  bg-[#C4C4C4] justify-center flex flex-col p-8 rounded-[20px] relative" >
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-black text-white absolute -top-5"><img src={symbol} alt="" /></div>
          <p className="mt-3">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows adapted sir. Wrong
            widen.
          </p>
          <p className="mt-6">- Mike Taylor, Web Designer</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
