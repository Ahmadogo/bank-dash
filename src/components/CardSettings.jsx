import React from "react";

const CardSettings = ({ icon: Icon, header, para, iconBg, iconColor }) => {
  return (
    <div className="flex gap-5 items-center w-full p-[7px]">
      <span
        className="text-[30px] p-3 rounded-full cursor-pointer"
        style={{ backgroundColor: `${iconBg}`, color: `${iconColor}` }}
      >
        <Icon />
      </span>
      <span>
        <h1 className="text-[#232323] text-lg font-medium">{header}</h1>
        <p className="text-[#718EBF] text-md"> {para}</p>
      </span>
    </div>
  );
};

export default CardSettings;
