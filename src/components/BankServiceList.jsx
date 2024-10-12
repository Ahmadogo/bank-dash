import React from "react";
import Btn from "../ui/Btn"

const BankServiceList = ({
  url1,
  headCol1,
  headCol2,
  headCol3,
  headCol4,
  paraCol1,
  paraCol2,
  paraCol3,
  paraCol4,
  
}) => {
  return (
    <div>
      <div className="bg-white rounded-3xl mt-5 p-5 flex justify-between items-center">
        <div className="flex gap-5 items-center ">
          <img src={url1} />
          <span>
            <h1 className="text-[#232323] font-semibold text-lg">{headCol1}</h1>
            <p className="text-[#718EBF] text-md">{paraCol1}</p>
          </span>
        </div>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold text-md ">{headCol2}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol2}</p>
        </span>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold text-md">{headCol3}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol3}</p>
        </span>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold text-md">{headCol4}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol4}</p>
        </span>
       <Btn/>
      </div>
    </div>
  );
};

export default BankServiceList;
