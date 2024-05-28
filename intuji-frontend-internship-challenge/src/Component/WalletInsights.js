import React from "react";

const WalletInsights = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row  justify-between pb-[20px]">
      <div className="lg:w-[30%]   px-4 pt-4 pb-10 bg-[#FFFFFF] border-[1px] border-[#DBE4E9] rounded-[20px] flex justify-center relative">
        <h2 className="font-extrabold text-[22px] absolute left-6">01</h2>
        <div className="flex flex-col justify-center items-center text-center w-[270px] mt-[90px]">
          <div className="flex flex-col gap-1">
            <div className="w-[39px] h-[10px] bg-black"></div>
            <div className="w-[50px] h-[30px] bg-[#3734A9]"></div>
          </div>
          <h2 className="text-[30px] font-extrabold mt-[34px]">
            Connect wallets & companies
          </h2>
          <p className=" font-normal text-[14px] text-[#757095] bg-gradient-to-[#64607D] mt-[17px]">
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.{" "}
          </p>
        </div>
      </div>
      <div className="lg:w-[30%]   px-4 pt-4 pb-10 bg-[#FFFFFF] border-[1px] border-[#DBE4E9] rounded-[20px] flex justify-center relative">
        <h2 className="font-extrabold text-[22px] absolute left-6">02</h2>
        <div className="flex flex-col justify-center items-center text-center w-[270px] mt-[90px]">
          <div className="flex flex-col gap-1">
            <div className="w-[39px] h-[10px] bg-black"></div>
            <div className="w-[50px] h-[30px] bg-[#FF7F5C]"></div>
          </div>
          <h2 className="text-[30px] font-extrabold mt-[34px]">
            Review Transactions
          </h2>
          <p className=" font-normal text-[14px] text-[#757095] bg-gradient-to-[#64607D] mt-[17px]">
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
        </div>
      </div>
      <div className="lg:w-[30%]   px-4 pt-4 pb-10 bg-[#FFFFFF] border-[1px] border-[#DBE4E9] rounded-[20px] flex justify-center relative">
        <h2 className="font-extrabold text-[22px] absolute left-6">03</h2>
        <div className="flex flex-col justify-center items-center text-center w-[270px] mt-[90px]">
          <div className="flex flex-col gap-1">
            <div className="w-[39px] h-[10px] bg-black"></div>
            <div className="w-[50px] h-[30px] bg-[#FDBC64]"></div>
          </div>
          <h2 className="text-[30px] font-extrabold mt-[34px]">
            Get income insights
          </h2>
          <p className=" font-normal text-[14px] text-[#757095] bg-gradient-to-[#64607D] mt-[17px]">
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletInsights;
