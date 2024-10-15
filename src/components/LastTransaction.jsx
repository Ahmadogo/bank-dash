import React from "react";

const LastTransaction = ({
  url: Icon,
  title,
  date,
  category,
  cardNo,
  status,
  type,
  balance,
  iconColor,
  iconBg,
}) => {
  return (
    // <div>
    <div className="flex justify-between p-2  items-center">
      <div className="flex gap-5 ">
        <span
          className="p-2 text-[30px] rounded-2xl cursor-pointer"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <Icon />
        </span>

        <span className=" flex flex-col ">
          <h1 className="text-nowrap font-semibold text-[#232323] text-md">
            {title}
          </h1>
          <p className="text-[#718EBF] "> {date}</p>
        </span>
      </div>

      <span>
        <p className="text-[#718EBF] hidden sm:block ">{category}</p>
      </span>

      <span>
        <p className="text-[#718EBF] hidden sm:block "> {cardNo}</p>
      </span>

      <span>
        <p className="text-[#718EBF] hidden sm:block "> {status}</p>
      </span>

      <span>
        <p
          className={`${
            type === "debit" ? "text-[#FE5C73] " : "text-[#16DBAA]"
          }`}
        >
          {type === "debit" ? "-" : "+"}${balance}
        </p>
      </span>
    </div>
    // </div>
  );
};

export default LastTransaction;
