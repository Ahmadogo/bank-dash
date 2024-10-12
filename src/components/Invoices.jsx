import React from "react";

const Invoices = ({img,heading, content, amount, iconColor, iconBg}) => {
  return (
  
      <div className="flex items-center justify-between  p-2">
        <span className="text-[3rem] bg-[#DCFAF8] p-2 rounded-2xl cursor-pointer"
        style={{backgroundColor:`${iconBg}, colr:${iconColor}`}}
        >
            {img}
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
