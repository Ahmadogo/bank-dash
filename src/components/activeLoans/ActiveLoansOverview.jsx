import React from "react";
import { overViewData } from "../../components/activeLoans/Data";

const ActiveLoansOverview = ({no}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    SL No
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Loan Money
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Left to repay
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Interest rate
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Installment
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Repay
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {overViewData.map((overview) => (
                  <tr 
                  
                  key={overview.id}>
                    <td className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0 ${overview.no === "Total" ? "text-[#FE5C73]" : "text-[#232323]"}`}>
                      {overview.no}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      ${overview.loan.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      ${overview.left.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {overview.duration} Months
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {overview.interest}%
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {overview.installment} /month
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      <button className='rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]'>
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveLoansOverview;
