import React from "react";

const TransactionSlide = ({ url, h1, date, balance, balance1 }) => {
  return (
    <div>
      {/* <div className=" p-4"> */}
      <div className="flex gap-5 py-[5px]">
        <div>
          <img src={url} alt="my cards icon" 
          />
        </div>

        <div className="flex items-center gap-6 text-nowrap">
          <span>
            <h1 className="font-semibold ">{h1}</h1>
            <p className="text-gray-500">{date}</p>
          </span>

          <span>
            <p className=" font-semibold text-[#FF4B4A]">{balance}</p>
            <p className=" font-semibold text-[#41D4A8]">{balance1}</p>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TransactionSlide;
