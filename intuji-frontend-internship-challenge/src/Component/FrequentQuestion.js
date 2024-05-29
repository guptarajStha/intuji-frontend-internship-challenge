import React, { useState } from "react";
import { question } from "../Helper/Question";
import { FaPlus } from "react-icons/fa6";
import msg from '../assets/msg.png'
import pattern1 from '../assets/29.png'
import pattern2 from '../assets/69.png'

const FrequentQuestion = () => {
  const [checkIndex, setCheckIndex] = useState(null);
  return (
    <div className="py-[80px] relative ">
      <h1 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[71px] font-extrabold flex flex-col">Frequently <span>asked questions</span></h1>
      <div className="w-full flex flex-col lg:flex-row justify-between py-10 px-2">
        <div className="lg:w-[65%] flex flex-col gap-4">
          {question.map((value, index) => {
            return (
              <div
                className="w-full bg-white rounded-[10px] p-4 border-[1px] border-[#CFCFCF] "
                onClick={() => setCheckIndex(index)}
              >
                <div className="flex justify-between sm:text-[22px] font-extrabold items-center cursor-pointer">
                  <div>{value.ques}</div>
                  <FaPlus />
                </div>
                {checkIndex === index && (
                  <div className="text-[16px] mt-4">{value.ans}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className=" mt-4 lg:mt-0 gap-4 lg:gap-0 lg:w-[30%] bg-white border-[1px] border-[#CFCFCF] rounded-[10px] p-6 flex flex-col justify-between">
          <div className="flex lg:flex-col justify-center items-center text-center  gap-4 mt-8">
            <img className="w-[10%] md:w-auto" src={msg} alt="" />
            <h1 className="font-extrabold tracking-tighter lg:tracking-normal lg:text-[22px]">Do you have more questions?</h1>
            <h2 className="text-[10px] md:text-[16px] font-semibold">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </h2>
          </div>
          <button className="text-white bg-[#FF7F5C] p-4">
            Shoot a Direct Mail
          </button>
        </div>
      </div>
      <img src={pattern1} alt=""  className="w-[7%] absolute top-[105px] -right-[9.7vw]" />
      <img src={pattern2} alt="" className=" absolute top-[220px] -left-[10vw] "/>
    </div>
  );
};

export default FrequentQuestion;
