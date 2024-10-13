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
      <div className="bg-white rounded-xl mt-3 p-3 flex justify-between items-center">
        <div className=" flex gap-3 items-center ">
          <img src={url1} />
          <span>
            <h1 className="text-[#232323] font-semibold text-nowrap ">{headCol1}</h1>
            <p className="text-[#718EBF] text-nowrap">{paraCol1}</p>
          </span>
        </div>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold ">{headCol2}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol2}</p>
        </span>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold ">{headCol3}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol3}</p>
        </span>

        <span className="hidden sm:block">
          <h1 className="text-[#232323] font-semibold ">{headCol4}</h1>
          <p className="text-[#718EBF] text-sm">{paraCol4}</p>
        </span>

       
       <Btn content={"View Details"}/>
      </div>
    </div>
  );
};

export default BankServiceList;
