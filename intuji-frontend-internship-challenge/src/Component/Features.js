import React from "react";
import pattern from "../assets/61.png";
const Features = () => {
  return (
    <div className="bg-[#C9E7F2] w-full relative">
      <div className="w-[80%] m-auto py-[80px] flex flex-col gap-4">
        <h1 className="font-extrabold text-[30px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[71px] ">
          Features that blows mind
        </h1>
        <p className="text-[14px] md:text-[16px] w-[max(46%)]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="flex flex-col xl:flex-row justify-between gap-6  w-full mt-10 z-40">
          <div className="flex flex-col w-[80%]  md:flex-row md:w-auto gap-8 md:justify-between">
            <div className=" pb-8 p-4 bg-[#FFFFFF] border-[1px] border-[#ABC8D2] rounded-[20px] flex justify-start relative">
              <div className="flex flex-col justify-start text-start w-[270px] py-[40px] px-[10px]">
                <div className="flex flex-col gap-1">
                  <div className="w-[39px] h-[10px] bg-black"></div>
                  <div className="w-[50px] h-[30px] bg-[#FF7F5C]"></div>
                </div>
                <h2 className="text-[18px] lg:text-[30px] font-extrabold mt-[34px]">
                  Really boy law county she unable her sister
                </h2>
                <p className=" font-normal text-[14px] text-[#757095] bg-gradient-to-[#64607D] mt-[17px]">
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.
                </p>
              </div>
            </div>
            <div className=" pb-8 p-4 bg-[#FFFFFF] border-[1px] border-[#ABC8D2] rounded-[20px] flex justify-start relative">
              <div className="flex flex-col justify-start text-start w-[270px] py-[40px] px-[10px]">
                <div className="flex flex-col gap-1">
                  <div className="w-[39px] h-[10px] bg-black"></div>
                  <div className="w-[50px] h-[30px] bg-[#3734A9]"></div>
                </div>
                <h2 className="text-[18px] lg:text-[30px] font-extrabold mt-[34px]">
                  Among sex are leave law built now
                </h2>
                <p className=" font-normal text-[14px] text-[#757095] bg-gradient-to-[#64607D] mt-[17px]">
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.
                </p>
              </div>
            </div>
          </div>
          <div className="  flex sm:flex-col sm:w-[80%] md:flex-row md:w-auto xl:flex-col justify-between gap-6">
            <div className="font-extrabold text-[16px] lg:text-[18px] xl:text-[22px] bg-white rounded-[10px] border-[1px] border-[#ABC8D2] w-full h-[150px] flex items-center pl-8  ">
              Merits behind on afraid or warmly
            </div>
            <div className="font-extrabold text-[16px] lg:text-[18px] xl:text-[22px] bg-white rounded-[10px] border-[1px] border-[#ABC8D2] items-center flex w-full h-[150px]  pl-8 z-40">
              Believing neglected so so allowance existence
            </div>
          </div>
        </div>
      </div>
      <img src={pattern} alt="" className=" absolute bottom-12" />
    </div>
  );
};

export default Features;
