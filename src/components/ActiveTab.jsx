import React from 'react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ActiveTab = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div>
      {/* Mobile view */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          value={selectedTab}
          onChange={(e) => onTabChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3  pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.to}
                onClick={() => onTabChange(tab.name)}
                aria-current={tab.name === selectedTab ? 'page' : undefined}
                className={classNames(
                  tab.name === selectedTab
                    ? 'border-[#1814F3] text-[#1814F3] font-semibold'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ActiveTab;
