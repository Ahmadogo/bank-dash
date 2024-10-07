import React from "react";
import Next from "../assets/svg/arrow-right.svg"


const TransferCard = ({ img, name, post }) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <img src={img} className="w-12" />
      <h1 className="font-semibold text-sm text-[#232323] text-nowrap">{name}</h1>
      <p className="text-sm text-[#718EBF]">{post}</p>


    </div>
  );
};

export default TransferCard;
