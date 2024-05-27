import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [productClick, setProductClick] = useState(false);
  const [templateClick, setTemplateClick] = useState(false);
  return (
    <div className="w-[80%] m-auto flex pt-[53px]  justify-between   items-center text-[14px]">
      <div className=" font-700 text-[20px]">AR SHAKIR</div>
      <ul className="flex gap-[20px]">
        <li className="flex flex-col relative cursor-pointer">
          <div
            className="flex gap-[12px] "
            onMouseEnter={() => setProductClick(true)}
            onMouseLeave={() => setProductClick(false)}
          >
            Product <IoIosArrowDown className="mt-[6px]" />
          </div>
          {productClick ? (
            <div
              className="absolute  top-5 flex justify-center flex-col items-center p-1 w-full transition ease-in-out duration-300 border-2 border-red-100 border-t-0"
              onMouseEnter={() => setProductClick(true)}
              onMouseLeave={() => setProductClick(false)}
            >
              <div className=" cursor-pointer">Product 1</div>
              <div className=" cursor-pointer">Product 2</div>
            </div>
          ) : (
            <></>
          )}
        </li>
        <li className="flex flex-col relative cursor-pointer">
          <div
            className="flex gap-[12px]"
            onMouseEnter={() => setTemplateClick(true)}
            onMouseLeave={() => setTemplateClick(false)}
          >
            Template <IoIosArrowDown className="mt-[6px]" />
          </div>
          {templateClick ? (
            <div
              className="absolute  top-5 flex justify-center flex-col items-center p-1 w-full transition ease-in-out duration-300 border-2 border-red-100 border-t-0"
              onMouseEnter={() => setTemplateClick(true)}
              onMouseLeave={() => setTemplateClick(false)}
            >
              <div className=" cursor-pointer">Template 1</div>
              <div className=" cursor-pointer">Template 2</div>
            </div>
          ) : (
            <></>
          )}
        </li>
        <li className=" cursor-pointer">Blog</li>
        <li className=" cursor-pointer">Pricing</li>
      </ul>
      <div className="w-[231px] gap-[50px] flex">
        <button className="">Sign In</button>
        <button className="w-[137px] bg-[#4F46BA] text-white h-[52px] cursor-pointer">
          Start Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
