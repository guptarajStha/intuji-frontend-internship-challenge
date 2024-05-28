import React from "react";
import imagee from "../assets/81.png";
import symbol from "../assets/“.png";
import girl from "../assets/girl.png";
const Testimonials = () => {
  return (
    <div className="w-full bg-[#FAFBFF] py-[80px]">
      <div className="w-[80%] m-auto">
        <div className="flex justify-start items-center">
          <div className="w-[max(50%)] flex flex-col gap-8">
            <h1 className="text-[71px] font-extrabold">Testimonials</h1>
            <p className="text-[16px]">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          <div className="w-[50%]  flex justify-center items-center mt-10">
            <img src={imagee} alt="" className="w-[20%] h-[10%]" />
          </div>
        </div>
        <div className="flex justify-between gap-10 mt-[80px]">
          <div className="w-[50%] bg-white border-[1px]  border-[#CFCFCF] rounded-[10px] relative flex p-4">
            <div className="w-[57px] h-[57px] rounded-full bg-black flex justify-center items-center absolute -top-7 left-8">
              <img src={symbol} alt="" />
            </div>
            <div className="px-2 py-10 flex flex-col gap-4">
              <h2 className=" font-semibold text-[25px] ">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows . Blessing
                welcomed ladyship.
              </h2>
              <h2 className="font-semibold text-[20px]">
                - Mike Taylor, Web Designer
              </h2>
            </div>
            <img src={girl} alt="" className="w-[30%]" />
          </div>
          <div className="w-[50%] bg-white border-[1px]  border-[#CFCFCF] rounded-[10px] relative flex p-4">
            <div className="w-[57px] h-[57px] rounded-full bg-black flex justify-center items-center absolute -top-7 left-8">
              <img src={symbol} alt="" />
            </div>
            <div className="px-2 py-10 flex flex-col gap-4">
              <h2 className=" font-semibold text-[25px] ">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows . Blessing
                welcomed ladyship.
              </h2>
              <h2 className="font-semibold text-[20px]">
                - Mike Taylor, Web Designer
              </h2>
            </div>
            <img src={girl} alt="" className="w-[30%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
