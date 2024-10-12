import React from "react";
import CEO from "../assets/svg/c-e-o.svg";
import Director from "../assets/svg/Director.svg";
import Designer from "../assets/svg/designer.svg";
import TransferCard from "../ui/TransferCard";
import H1 from "../ui/H1";
import Next from "../assets/svg/arrow-right.svg";
import { LiaTelegramPlane } from "react-icons/lia";

const data = [
  {
    url: CEO,
    name: "Livia Bator",
    post: "CEO",
  },
  {
    url: Director,
    name: "Randy Press",
    post: "Director",
  },
  {
    url: Designer,
    name: "Workman",
    post: "Designer",
  },
];

const QuickTransfers = () => {
  return (
    <div>
     

      <div className="bg-white p-5 shadow-md rounded-lg w-full h-[250px] mt-5">

        <div className="flex justify-between mt-5 ">
          <div className="grid grid-cols-3 gap-8">
            {data.map((data) => (
              <TransferCard
                key={data.index}
                img={data.url}
                name={data.name}
                post={data.post}
              />
            ))}
          </div>

          <span>
            <img src={Next} className="cursor-pointer" />
          </span>
        </div>

        <div className="flex justify-center gap-4 items-center  mt-5 mb-6">
          <label className="text-sm text-nowrap">Write Amount</label>
          <div className="flex relative ">
            <input
              type="text"
              id="amount"
              placeholder="$"
              className="outline-none text-[#718EBF] w-[100%] p-2 bg-[#EDF1F7] rounded-3xl "
            />
            <span className="">
              <button className="px-4 flex items-center gap-2 text-white  bg-[#1814F3]  p-2 rounded-3xl absolute right-0">
                Send <LiaTelegramPlane />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfers;
