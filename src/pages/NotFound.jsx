import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#343C6A]  sm:text-5xl">
          {" "}
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/dashboard"}
            className="flex gap-2 items-center text-lg font-semibold text-[#343C6A] "
          >
            <IoArrowBackSharp />
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
