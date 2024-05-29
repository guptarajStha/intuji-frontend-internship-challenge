import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import group_image from "../assets/group_image.png";
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
const RecentBlog = () => {
  return (
    <div className="pb-[20px]">
      <h1 className="font-extrabold text-[30px] sm:text-[45px] md:text-[60px] xl:text-[71px]">Recent Blog</h1>
      <div className="p-2">
        <div className="flex justify-between mt-[60px] ">
          <div className="flex flex-col gap-2 w-[40%] justify-center ">
            <h2 className="text-[14px] lg:text-[16px] font-bold">BEST PRACTICES</h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[29px] font-bold">
              In design active temper be uneasy. Thirty for remove plenty
              regard.
            </h2>
            <button className="text-[14px] lg:text-[16px] font-bold flex gap-2 items-center mt-[30px]">
              Read More <FaArrowRightLong />
            </button>
          </div>
          <img src={group_image} alt="" className="w-[40%]" />
        </div>
        <div className=" mt-[80px] hidden  gap-6 lg:flex justify-between w-full">
          <div className="flex flex-col justify-between mt-[60px]  gap-6  w-1/3 ">
            <div className="pl-6 flex flex-col gap-2 justify-center ">
              <h2 className="text-[16px] font-bold">BEST PRACTICES</h2>
              <h2 className="text-[29px] font-bold">
                Partiality on or continuing particular principles as.
              </h2>
            </div>
            <img src={blog1} alt=""  className="h-[202px]"/>
          </div>
          <div className="flex flex-col justify-between mt-[60px]  gap-6  w-1/3">
            <div className="pl-6 flex flex-col gap-2 justify-center ">
              <h2 className="text-[16px] font-bold">BEST PRACTICES</h2>
              <h2 className="text-[29px] font-bold">
                Village did removed enjoyed explain
              </h2>
            </div>
            <img src={blog2} alt=""  className="h-[202px]"/>
          </div>
          <div className="flex flex-col justify-between mt-[60px]  gap-6  w-1/3">
            <div className="pl-6 flex flex-col gap-2 justify-center ">
              <h2 className="text-[16px] font-bold">BEST PRACTICES</h2>
              <h2 className="text-[29px] font-bold">
                Wise busy past both park when an ye no. Nay likely her length.
              </h2>
            </div>
            <img src={blog3}  className="h-[202px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
