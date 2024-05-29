import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiLogoMessenger } from "react-icons/bi";
import infinity from "../assets/infinity.png";
const Footer = () => {
  return (
    <div className="pt-[80px]">
      <div className=" flex flex-col lg:flex-row justify-between gap-28 pb-[35px]">
        <div className="flex justify-between lg:w-3/4">
          <div className="flex flex-col gap-6 lg:w-1/4 w-1/3">
            <h1 className=" font-bold text-[21px">AR Shakir</h1>
            <p className="text-[16px] font-medium text-[#757095]">
              Finance helps companies manage payments easily.
            </p>
            <div className=" grid grid-cols-2 items-center sm:flex text-[#3734A9] gap-4 text-[20px]">
              <FaLinkedinIn className=" cursor-pointer " />
              <BiLogoMessenger className=" cursor-pointer " />
              <FaTwitter className=" cursor-pointer " />
              <img className="w-[20px]  cursor-pointer" src={infinity} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6  lg:w-1/4 w-1/3">
            <h1 className=" font-bold text-[21px">Company</h1>
            <div className="text-[16px] font-medium flex flex-col gap-4">
              <h2 className=" cursor-pointer">About Us</h2>
              <h2 className=" cursor-pointer">Careers</h2>
              <h2 className=" cursor-pointer">Blog</h2>
              <h2 className=" cursor-pointer">Pricing</h2>
            </div>
          </div>
          <div className="flex flex-col gap-6  lg:w-1/4 w-1/3">
            <h1 className=" font-bold text-[21px">Resources</h1>
            <div className="text-[16px] font-medium flex flex-col gap-4">
              <h2 className=" cursor-pointer">Proposal Template</h2>
              <h2 className=" cursor-pointer">Invoice Template</h2>
              <h2 className=" cursor-pointer">Tuturoial</h2>
              <h2 className=" cursor-pointer">How to write a contract</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-[21px]">Join Our Newsletter</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 bg-[#EEEEFF] outline-none"
            />
            <button className="bg-[#3734A9] px-6 py-3 text-white">
              Subscribe
            </button>
          </div>
          <p className="text-[16px] font-medium text-[#757095]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
      <hr className="bg-[#E5E5EA] h-[2px]" />
      <div className="w-full flex justify-center items-center p-[40px] text-[10px] sm:text-[18px]">
        Copyright @ AR Shakir 2022. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
