import React from "react";

const ShortCards = ({ title,title2, amount,content, url }) => {
  return (
    <div>
      <div className="flex w-full  items-start justify-between p-5 bg-white rounded-lg shadow-md">
        <div className=" bg-[#E7EDFF]  rounded-full">
          <img src={url} className="w-12 " />
        </div>

        <div className=" text-nowrap">
          <h1 className="text-md text-[#718EBF] ">{title}</h1>
          <p className=" font-semibold text-[#232323] ">{amount}</p>
        </div>

        <div className="text-nowrap">
          <h1 className="text-lg font-semibold text-[#232323]">{title2}</h1>
          <p className="text-md text-[#718EBF] ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShortCards;
