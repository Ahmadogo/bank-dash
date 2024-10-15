import React from "react";

const TransactionSlide = ({ url: Icon, h1, date, balance, type, iconBg, iconColor}) => {
  return (
    <div>
      <div className="flex justify-between p-1 items-center">
        <div className="flex gap-5 items-center"> 
          <span className="text-[30px] rounded-full cursor-pointer p-2 flex items-center justify-center"
           style={{ backgroundColor: iconBg, color: iconColor }}
          >
            <Icon className="text-[35px]"/> 
          </span>
          <span className="text-nowrap">
            <h1 className="font-semibold ">{h1}</h1>
            <p className="text-gray-500">{date}</p>
          </span>
        </div>

        <span>
          <p className={` ${type === "debit" ? "text-[#FF4B4A]" : "text-[#41D4A8]"} font-semibold`}>
            {type === "debit" ? "-" : "+"}${balance}
          </p>
        </span>
      </div>
    </div>
  );
};

export default TransactionSlide;
