import React from "react";

const CardSettings = ({icon, header, para}) => {
  return (
    // <div className="bg-white rounded-lg shadow-md p-5 ">
      <div className="flex gap-5 items-center  p-2">
        <span className="text-[30px] bg-red-300 p-5 rounded-full cursor-pointer">
          {icon}
        </span>
        <span>
          <h1 className="text-[#232323] text-lg font-medium">{header}</h1>
          <p className="text-[#718EBF] text-md"> {para}</p>
        </span>
      </div>
    // </div>
  );
};

export default CardSettings;
