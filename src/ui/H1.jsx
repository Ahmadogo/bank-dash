import React from "react";

const H1 = ({h1}) => {
  return (
    <div>
      <div className="flex justify-between items-center  text-[#343C6A] font-bold">
        <h1 className="text-[1.25rem]  "> {h1} </h1>
      </div>
    </div>
  );
};

export default H1;
