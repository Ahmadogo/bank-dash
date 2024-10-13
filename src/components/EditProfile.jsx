import React from "react";
import Profile from "../assets/svg/edit-profile.svg";

const EditProfile = () => {
  return (
    <div className="sm:flex  gap-10 p-5">
      <div>
        <img src={Profile} alt="Profile" />
      </div>

      <div className="sm:flex gap-10 w-full">
        <div className="w-full">
          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Your Name
          </label>
          <div className="mt-2">
            <input
              id="yourName"
              name="yourName"
              type="text"
              placeholder="Charleene Reeds"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="charleenereeds@gmail.com"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-gray-900">
            Date of Birth
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="dob"
              name="dob"
              type="text"
              placeholder="25 Jan 1990"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-5 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Date
              </label>
              <select
                id="date"
                name="dob"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option></option>
              </select>
            </div>
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Permanent Address
          </label>
          <div className="mt-2">
            <input
              id="address"
              name="address"
              type="text"
              placeholder="San jose, California, USA"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Postal Code
          </label>
          <div className="mt-2">
            <input
              id="code"
              name="code"
              type="text"
              placeholder="45962"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            User Name
          </label>
          <div className="mt-2">
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Reedybaby"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Reedybaby"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Present Address
          </label>
          <div className="mt-2">
            <input
              id="presentAddress"
              name="presentAddress"
              type="text"
              placeholder="San jose, California"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              placeholder="California"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Country
          </label>
          <div className="mt-2">
            <input
              id="country"
              name="country"
              type="text"
              placeholder="USA"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="flex justify-end mt-5">
            <button className="bg-[#1814F3] p-2 px-16 text-white rounded-lg">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
