import React from "react";
import symbol from '../assets/“.png'

const SectionHeading = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col lg:flex-row justify-between pt-[60px] mb-[60px] items-center gap-20 lg:justify-between">
      <div>
        <h1 className=" font-extrabold text-[58px]">
          Automated portfolio tracking
        </h1>
        <p className="text-[16px] font-normal w-[448px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.{" "}
        </p>
      </div>
      <div className=" font-semibold text-[15px]">
        <div className="w-[400px] h-[175px] bg-[#C4C4C4] justify-center flex flex-col p-6 rounded-[20px] relative" >
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
