import React from "react";
import { Link } from "react-router-dom";
import Loader from "../ui/Loader";

const Previlages = () => {
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center flex flex-col gap-5">
          <Loader/>
          <p className="text-[50px] text-[#343C6A] font-semibold">
            Coming Soon !!!!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Previlages;
