import React from "react";
import Btn from "../ui/Btn";
import { recentTransactions } from "../pages/transactions/Data";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const RecentTransaction = ({ action }) => {
  return (
    <div className="px-4 p sm:px-6 lg:px-8 bg-white rounded-lg">
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
                    Description
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Card
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#718EBF] sm:pl-0"
                  >
                    Receipt
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      <span className="flex gap-1 items-center">
                        {transaction.action === "credit" ? (
                          <HiOutlineArrowCircleDown className="text-[25px] text-[#718EBF]" />
                        ) : (
                          <HiOutlineArrowCircleUp className="text-[25px] text-[#718EBF]" />
                        )}
                        {transaction.desc}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {transaction.transactionId}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {transaction.type}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {transaction.card}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      {transaction.date}
                    </td>
                    <td
                      className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 ${
                        action === "debit" ? "text-[#FE5C73]" : "text-[#16DBAA]"
                      }`}
                    >
                      {action === "debit" ? "-" : "+"}$
                      {transaction.amount.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                      <transaction.button content={"Download"} />
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

export default RecentTransaction;
