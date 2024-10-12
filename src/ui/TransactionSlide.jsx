import React from "react";

const TransactionSlide = ({ url, h1, date, balance, type }) => {
  return (
    <div>
     
      <div className="flex justify-between p-1 items-center">
        <div className="flex gap-5 items-center"> 
          <img src={url} 
         
          />
          <span className="text-nowrap">
            <h1 className="font-semibold ">{h1}</h1>
            <p className="text-gray-500">{date}</p>
          </span>
        </div>

       
          <span>
            <p className={`  ${type === "debit" ? "text-[#FF4B4A] ": "text-[#41D4A8]"} font-semibold `}>
              {type === "debit" ? "-" : "+"}${balance}
            </p>
          </span>
        </div>
      </div>
    // </div>
    // </div>
  );
};

export default TransactionSlide;
