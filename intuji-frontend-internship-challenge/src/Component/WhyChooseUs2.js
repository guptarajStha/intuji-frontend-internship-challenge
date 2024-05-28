import React from "react";
import symbol from "../assets/“.png"
import pattern from '../assets/46.png'
import hand_with_card from '../assets/single_hand.png'
import chart from '../assets/graph.png'
const WhyChooseUs2 = () => {
  return (
    <div className="w-[80%] m-auto flex justify-between mt-[80px]">
      <div className="flex flex-col justify-between gap-4 xl:w-[max(50%)]">
        <h2 className="font-bold text-[#3734A9] text-[14px]">
          WHY TO CHOOSE US
        </h2>
        <h1 className="font-extrabold text-[50px]">
          Save money with proper transaction
        </h1>
        <p className="text-[18px] text-[#505887]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className=" font-semibold text-[15px] mt-20">
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
      <div className="bg-[#DBF1FA] w-[40%] hidden xl:flex rounded-[20px] relative">
        <img src={pattern} alt="" className=" absolute -left-12 top-16" />
        <img src={hand_with_card} alt="" className=" absolute bottom-0" />
        <img src={chart} alt="" className=" absolute -left-28 shadow-xl bottom-10" />

      </div>
    </div>
  );
};

export default WhyChooseUs2;
