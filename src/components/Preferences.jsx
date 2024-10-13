import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Preferences = () => {
  const [enabledFirst, setEnabledFirst] = useState(true);
  const [enabledSecond, setEnabledSecond] = useState(false);
  const [enabledThird, setEnabledThird] = useState(true);
  return (
    <div className="p-5 ">
      <div className="grid sm:grid-cols-2  gap-5">
        <span>
          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Currency
          </label>
          <div className="mt-2">
            <input
              id="currency"
              name="currency"
              type="text"
              placeholder="USD"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>
        </span>

        <span>
          <label className="block mt-3 font-semibold leading-6 text-[#232323]">
            Time Zone
          </label>
          <div className="mt-2">
            <input
              id="time"
              name="time"
              type="time"
              placeholder="USA"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>
        </span>
      </div>

      <h1 className="mt-5">Notification</h1>

      <div className="flex gap-5 mt-5">
        <Switch
          checked={enabledFirst}
          onChange={setEnabledFirst}
          className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16DBCC] focus:ring-offset-2 data-[checked]:bg-[#16DBCC] "
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
        <p className="text-sm text-[#232323] font-medium">
          I recieve merchant order
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        <Switch
          checked={enabledSecond}
          onChange={setEnabledSecond}
          className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16DBCC] focus:ring-offset-2 data-[checked]:bg-[#16DBCC] "
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
        <p className="text-sm text-[#232323] font-medium">
          I send or recieve digital currency
        </p>
      </div>
      <div className="flex gap-5 mt-5">
        <Switch
          checked={enabledThird}
          onChange={setEnabledThird}
          className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16DBCC] focus:ring-offset-2 data-[checked]:bg-[#16DBCC] "
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
        <p className="text-sm text-[#232323] font-medium">
          There are rccomendation for my account
        </p>
      </div>

      <div className="flex justify-end mt-5">
        <button className="bg-[#1814F3] p-2 px-16 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Preferences;
