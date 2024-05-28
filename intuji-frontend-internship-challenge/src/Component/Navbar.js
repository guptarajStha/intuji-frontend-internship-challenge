import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [productClick, setProductClick] = useState(false);
  const [templateClick, setTemplateClick] = useState(false);
  const [handleHamBurger, setHandleHamBurger] = useState(false);
  return (
    <div className="w-[80%] m-auto flex pt-[53px]  justify-between   items-center text-[14px]  overflow-hidden">
      <div className=" font-700 text-[20px]">AR SHAKIR</div>

      <ul className="hidden lg:flex gap-[20px]">
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
      <div className="w-[231px] gap-[50px] hidden sm:flex">
        <button className="">Sign In</button>
        <button className="w-[137px] bg-[#4F46BA] text-white h-[52px] cursor-pointer">
          Start Free
        </button>
      </div>
      <div
        className="lg:hidden text-[20px] cursor-pointer"
        onClick={() => setHandleHamBurger(!handleHamBurger)}
      >
        <GiHamburgerMenu />
      </div>

      <div
        className={`flex  flex-col justify-center items-center gap-2 absolute bg-[#C9E7F2]  rounded-b-[10px] bg-opacity-90 ${
          handleHamBurger
            ? "transition-all ease-in-out duration-500"
            : "top-[-1000px] transition-all ease-in-out duration-500"
        } top-28  right-4  z-40 p-10 `}
        
      >
        <ul className="flex flex-col gap-2 justify-center items-center">
          <li className="flex flex-col cursor-pointer">
            <div
              className=" gap-[12px] "
              onClick={() => setProductClick((value) => !value)}
            >
              <div className="flex">
                Product <IoIosArrowDown className="mt-[6px]" />
              </div>
              {productClick ? (
                <div className=" top-5  justify-center flex-col items-center px-4 ">
                  <div className=" cursor-pointer">Product 1</div>
                  <div className=" cursor-pointer">Product 2</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <li className="flex flex-col cursor-pointer">
            <div
              className=" gap-[12px] "
              onClick={() => setTemplateClick((value) => !value)}
            >
              <div className="flex">
                Template <IoIosArrowDown className="mt-[6px]" />
              </div>
              {templateClick ? (
                <div className=" top-5  justify-center flex-col items-center px-4 ">
                  <div className=" cursor-pointer">Template 1</div>
                  <div className=" cursor-pointer">Template 2</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <li className=" cursor-pointer">Blog</li>
          <li className=" cursor-pointer">Pricing</li>
        </ul>

        <button className=" sm:hidden">Sign In</button>
        <button className=" bg-[#4F46BA] text-white  cursor-pointer py-2 px-5 sm:hidden">
          Start Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
