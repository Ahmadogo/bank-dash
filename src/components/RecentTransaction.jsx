import React, { useEffect, useState } from "react";
import Btn from "../ui/Btn";
import { recentTransactions } from "../pages/transactions/Data";
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowCircleUp,
} from "react-icons/hi";
import ActiveTab from "./ActiveTab";
import Pagination from "../components/Pagination";

const RecentTransaction = ({ action }) => {
  
  // This handles the download of files in the table
  const handleDownload = (transaction) => {
    const dataStr = JSON.stringify(transaction, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `transaction_${transaction.transactionId}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // this handles the swich of tabs
  const tabs = [
    { name: "All Transactions" },
    { name: "Income" },
    { name: "Expenses" },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [filteredTransactions, setFilteredTransactions] =
    useState(recentTransactions);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
    setCurrentPage(1);
  };

  // this loads the selected tab and displays it
  useEffect(() => {
    let transactions = recentTransactions;
    if (selectedTab === "Income") {
      transactions = recentTransactions.filter(
        (transaction) => transaction.action === "credit"
      );
    } else if (selectedTab === "Expenses") {
      transactions = recentTransactions.filter(
        (transaction) => transaction.action === "debit"
      );
    }
    setFilteredTransactions(transactions);
  }, [selectedTab]);

  // this is the pagination function
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  return (
    <>
      <ActiveTab
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />

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
                    {/* Other table headers */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
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
                          transaction.action === "debit"
                            ? "text-[#FE5C73]"
                            : "text-[#16DBAA]"
                        }`}
                      >
                        {transaction.action === "debit" ? "-" : "+"}$
                        {transaction.amount.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#232323] sm:pl-0">
                        {/* <transaction.button content={"Download"} /> */}
                        <Btn
                          content={"Download "}
                          onClick={() => handleDownload(transaction)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default RecentTransaction;
