import React from "react";
import H1 from "../../ui/H1";


const Card = ( {h1, h2, Amount, url1, Name, Date, url2, topRad, btmRad, border, backgroundColor, textColor}) => {
  return (
    <div>
      <span className="flex justify-between items-center mb-3 text-[#343C6A] font-bold">
        <H1
        h1={h1} 
        />
        <h1 className="text-[1.25rem] "> {h2} </h1>
      </span>

       <div
        style={{
          backgroundColor: backgroundColor,
          textColor: textColor,
          backgroundImage: `linear-gradient(to bottom, ${topRad}, ${btmRad})`,
        }}
        className="p-5 rounded-3xl shadow-lg"
      >
        <div className="flex justify-between ">
          <span className="text-white">
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
            <h2 className="font-semibold  text-gray-200">
              {Name}
            </h2>
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
