import React from "react";

const MyInvestments = ({
  url: Icon,
  title,
  content1,
  amount,
  content2,
  percent,
  content3,
  type,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 mt-3 flex justify-between sm:grid grid-cols-3 gap-10 w-full">
      <div className="flex gap-5">
      <div
          className="  rounded-full cursor-pointer"
          style={{
            backgroundColor: `${iconBg}`,
            color: `${iconColor}`,
          }}
        >
         <Icon className="text-[40px]"/>
        </div>

        <span>
          <h1 className="text-[#232323] text-lg font-semibold text-nowrap">
            {title}
          </h1>
          <p className="text-[#718EBF] text-md">{content1}</p>
        </span>
      </div>

      <span>
        <h1 className=" hidden sm:block text-[#232323] text-lg font-semibold">
          ${amount}
        </h1>
        <p className="hidden sm:block text-[#718EBF] text-md">{content2}</p>
      </span>
      <span>
        <h1
          className={` text-lg font-semibold ${
            type === "profit" ? "text-[#16DBAA]" : "text-[#FE5C73]"
          }`}
        >
          {type === "profit" ? "+" : "-"}
          {percent}%
        </h1>
        <p className="hidden sm:block text-[#718EBF] text-md">{content3}</p>
      </span>
    </div>
  );
};

export default MyInvestments;
