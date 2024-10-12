import React from "react";

const WhiteCard = ({ header1, header2, Amount, url1, Name, Date, url2 }) => {
  return (
    

      <div className="shadow-sm bg-white rounded-2xl p-4 h-[210px] ">
        <div className="flex justify-between">
          <span>
            <p className="font-bold text-[#718EBF]">Balance</p>
            <h2 className=" tracking-wider text-[#343C6A] font-semibold">$ {Amount}</h2>
          </span>

          <span>
            <img src={url1} alt="card chip" />
          </span>
        </div>

        <div className="flex justify-between  mt-5">
          <span>
            <p className="text-[#718EBF] text-sm ">CARD HOLDER</p>
            <h2 className="font-semibold  text-[#343C6A]">{Name}</h2>
          </span>

          <span>
            <p className="text-[#718EBF] text-sm ">VALID THRU</p>
            <h2 className="font-semibold  text-[#343C6A]">{Date}</h2>
          </span>
        </div>

        <div className="flex justify-between border-t-2 mt-5 ">
          <h1 className="text-lg text-[#343C6A] font-semibold py-2">
            3778 **** **** 1234
          </h1>
          <img src={url2} alt="master card circles" />
        </div>
      </div>
    
  );
};

export default WhiteCard;
