import React from "react";
import { PiCardsLight } from "react-icons/pi";
import { FaPaypal } from "react-icons/fa"; 
import { FaUserCircle } from "react-icons/fa"; 
import TransactionSlide from "../ui/TransactionSlide";
import H1 from "../ui/H1";

const Details = [
  {
    id: 1,
    url: <PiCardsLight className="text-[#FFBB38] bg-[#FFF5D9]  " />,
    h1: "Deposit from my Card",
    date: "28 January 2021",
    balance: 850,
    type: "debit"
  },
  {
    id: 2,
    url: <FaPaypal className="text-purple-500 w-6 h-6" />, 
    h1: "Deposit Paypal",
    date: "25 January 2021",
    balance: 2500,
    type: "credit"
  },
  {
    id: 3,
    url: <FaUserCircle className="text-green-500 w-6 h-6" />, 
    h1: "Jemi Wilson",
    date: "21 January 2021",
    balance: 5400,
    type: 'credit'
  },
];

const MyTransactions = () => {
  return (
    <div>
      <H1 h1={"My Transactions"} />

      <div className="shadow-lg bg-white p-4 rounded-lg h-[210px]">
        {Details.map((detail) => (
          <TransactionSlide
            key={detail.id}
            url={detail.url}
            h1={detail.h1}
            date={detail.date}
            balance={detail.balance.toLocaleString()}
            type={detail.type}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
