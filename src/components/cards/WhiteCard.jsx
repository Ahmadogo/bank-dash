import React from "react";
import BlackChip from "../../assets/svg/blackChip_Card.svg";
import BlackCardCircles from "../../assets/svg/blackMasterCard-circle.svg";

const WhiteCard = () => {
  return (
    <div>
    <h1 className="text-[#343C6A] text-[25px] font-bold mb-3 flex justify-end ">
        See All
    </h1>
    <div className=" p-8 rounded-3xl shadow-lg ring-1 ring-gray-300">

      <div className="flex justify-between ">

        <span>
          <p className="text-[20px] text-[#718EBF]">Balance</p>
          <h2 className="text-[2.1875rem] text-[#343C6A]">$5,756</h2>
        </span>

        <span>
          <img src={BlackChip} alt="card chip" className="w-12" />
        </span>
      </div>

      <div className="flex justify-between mt-8">
        <span>
          <p className="text-[#718EBF] text-[1.25rem]">CARD HOLDER</p>
          <h2 className="font-semibold text-[1.5625rem] text-[#343C6A]">Eddy Cusuma</h2>
        </span>

        <span className="mr-28">
            <p className="text-[#718EBF] text-[1.25rem]">VALID THRU</p>
            <h2 className="font-semibold text-[1.5625rem] text-[#343C6A]">12/22</h2>
        </span>
      </div>

      <div className="flex justify-between  mt-10 border-t-2">
        <h1 className="text-[2.5rem] text-[#343C6A] font-semibold">3778 **** **** 1234</h1>
        <img src= {BlackCardCircles} alt="master card circles" className="w-16" />
      </div>
    </div>
    </div>

  );
};

export default WhiteCard;
