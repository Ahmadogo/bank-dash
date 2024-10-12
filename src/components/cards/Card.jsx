import React from "react";

const Card = ({
  Amount,
  url1,
  Name,
  Date,
  url2,
  topRad,
  btmRad,
  border,
  backgroundColor,
  textColor,
}) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: backgroundColor,
          textColor: textColor,
          backgroundImage: `linear-gradient(to bottom, ${topRad}, ${btmRad})`,
        }}
        className="shadow-sm rounded-2xl p-4 h-[210px] "
      >
        <div className="flex justify-between">
          <span className="text-[#EDF0F7] font-bold">
            <p>Balance</p>
            <h2 className=" tracking-wider">$ {Amount}</h2>
          </span>

          <span>
            <img src={url1} alt="card chip" />
          </span>
        </div>

        <div className="flex justify-between  mt-5">
          <span>
            <p className="text-gray-300 text-sm ">CARD HOLDER</p>
            <h2 className="font-semibold  text-gray-200">{Name}</h2>
          </span>

          <span>
            <p className="text-gray-300 text-sm ">VALID THRU</p>
            <h2 className="font-semibold  text-gray-200">{Date}</h2>
          </span>
        </div>

        <div className={`flex justify-between  mt-5 ${border} `}>
          <h1 className="text-lg text-gray-200 font-semibold py-2">
            3778 **** **** 1234
          </h1>
          <img src={url2} alt="master card circles" />
        </div>
      </div>
    </div>
  );
};

export default Card;
