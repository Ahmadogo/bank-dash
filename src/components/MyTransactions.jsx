import React from "react";
import Paypal from "../assets/svg/paypal-icon.svg";
import Jemi from "../assets/svg/jemi-wilson-icon.svg";
import CardIcon from "../assets/svg/smallCard-icon.svg";
import TransactionSlide from "../ui/TransactionSlide";
import H1 from "../ui/H1";

const Details = [
  {
    id: 1,
    url: CardIcon,
    h1: "Deposit from my Card",
    date: "28 January 2021",
    balance: 850,
    type: "debit"
  },
  {
    id: 2,
    url: Paypal,
    h1: "Deposit Paypal",
    date: "25 January 2021",
    balance: 2500,
    type: "credit"
  },
  {
    id: 3,
    url: Jemi,
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

      <div className="shadow-lg bg-white p-4 rounded-lg h-[210px] ">
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
