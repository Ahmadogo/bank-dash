import React from "react";
import LottieAnimation from "../components/LottieAnimation";


const AccountCreated = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10">
      <LottieAnimation />
      <h1 className="font-semibold text-[20px]  text-[#343C6A] ">
        Account Created successfully
      </h1>
    </div>
  );
};

export default AccountCreated;
