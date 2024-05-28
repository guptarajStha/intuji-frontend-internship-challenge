import React from 'react';
import openzeppelin from '../assets/openZeppelin.png'
import oracle from '../assets/oracle.png'
import morpheus from '../assets/Morpheus.png'
import samsung from '../assets/Samsung.png'
import monday from '../assets/monday.png'
import segment from '../assets/segment.png'
import protonet from '../assets/protonet.png'
 

const Company = () => {
  return (
    <div className='bg-[#F5F6F8] z-10 w-full h-[239px] relative '>
    <div className="w-[80%] h-full gap-[36px] m-auto flex flex-col justify-center items-center">
        <p className='text-[22px] font-medium'>Over 32k+ software  businesses growing with AR Shakir.</p>
        <div className='flex gap-[49px]'>
            <img src={openzeppelin} alt="" />
            <img src={oracle} alt="" />
            <img src={morpheus} alt="" />
            <img src={samsung} alt="" />
            <img src={monday} alt="" />
            <img src={segment} alt="" />
            <img src={protonet} alt="" />
        </div>
    </div>
    </div>
  );
}

export default Company;
