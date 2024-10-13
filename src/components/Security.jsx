import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Security = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="p-5">
      <div>
        <h1 className="text-[#333B69] font-semibold">
          Two-factor Authentication
        </h1>

        <div className="mt-5 flex items-center gap-5">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16DBCC] focus:ring-offset-2 data-[checked]:bg-[#16DBCC] "
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
            />
          </Switch>

          <p>Enable or disable two factor authentication</p>
        </div>
      </div>

      <h1 className="text-[#333B69] mt-5 font-semibold  ">Change Password</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <label className="block mt-3  leading-6 text-[#232323]">
            Current Password
          </label>
          <div className="mt-2">
            <input
              id="currentPin"
              name="currentPin"
              type="password"
              placeholder="*******"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>

          <label className="block mt-3 leading-6 text-[#232323]">
            New Password
          </label>
          <div className="mt-2">
            <input
              id="newPin"
              name="newPin"
              type="password"
              placeholder="*******"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <button className="bg-[#1814F3] p-2 px-16 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Security;
