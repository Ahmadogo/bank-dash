import React from "react";
import { AiOutlineApple } from "react-icons/ai";


const Invoices = ({ img: Icon, heading, content, amount, iconColor, iconBg }) => {
  return (
    <div className="flex items-center gap-5  p-2">
      <span
        className="p-2 text-[3rem] rounded-2xl cursor-pointer"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
       
        <Icon className='text-[35px]'/>
      </span>

      <span>
        <h1 className="text-[#B1B1B1] text-md">{heading}</h1>
        <p className="text-[#718EBF]">{content}</p>
      </span>

      <span className="text-[#718EBF]">${amount}</span>
    </div>
  );
};

export default Invoices;
