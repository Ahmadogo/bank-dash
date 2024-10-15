import React from "react";

const ShortCards = ({
  title,
  title2,
  amount,
  content,
  url: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div>
      <div className="flex w-full  items-start gap-5 p-5 bg-white rounded-lg shadow-md">
        <div
          className="p-2 text-[35px] rounded-2xl cursor-pointer"
          style={{
            backgroundColor: `${iconBg}`,
            color: `${iconColor}`,
          }}
        >
         <Icon/>
        </div>

        <div className=" text-nowrap">
          <h1 className="text-md text-[#718EBF]">{title}</h1>
          <p className=" font-semibold text-[#232323] ">${amount}</p>
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
