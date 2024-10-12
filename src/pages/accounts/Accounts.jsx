import React from "react";
import ShortCards from "../../components/cards/ShortCards";
import Balance from "../../assets/svg/myBalance-icon.svg";
import Piggy from "../../assets/svg/piggyVest-icon.svg";
import Income from "../../assets/svg/income-icon.svg";
import Expense from "../../assets/svg/expense-icon.svg";
import Sportify from "../../assets/svg/sportify-icon.svg";
import LastTransaction from "../../components/LastTransaction";
import Service from "../../assets/svg/mobileService-icon.svg";
import Emily from "../../assets/svg/emilyWilson-icon.svg";
import H1 from "../../ui/H1";
import Card from "../../components/cards/Card";
import Chip from "../../assets/svg/Chip_Card.svg";
import CardCircles from "../../assets/svg/masterCard-circles.svg";
import DebitAndCredit from "../../components/charts/DebitAndCredit";
import Invoices from "../../components/Invoices";
import { invoiceData } from "../../pages/accounts/Data";

const cardsCategory = [
  {
    // url: <FaSackDollar className="absolute left-2 top-3 sm:left-5 sm:top-5 text-[#FFBB38] text-2xl sm:text-4xl"/>,
    id: 1,
    url: Balance,
    title: "My Balance",
    amount: 12750,
  },
  {
    // url: <FaHandHoldingDollar className="absolute left-2 top-3 sm:left-5 sm:top-5 text-[#396AFF] text-2xl sm:text-4xl"/>,
    id: 2,
    url: Income,
    title: "Income",
    amount: 5600,
  },
  {
    // url: <FaFileInvoiceDollar className="absolute left-2 top-3 sm:left-5 sm:top-5 text-[#FF82AC] text-2xl sm:text-4xl"/>,
    id: 3,
    url: Expense,
    title: "Expense",
    amount: 3460,
  },
  {
    // url: <FaPiggyBank className="absolute left-2 top-3 sm:left-5 sm:top-5 text-[#16DBCC] text-2xl sm:text-4xl"/>,
    id: 4,
    url: Piggy,
    title: "Total Saving",
    amount: 7920,
  },
];

const transactionsHistory = [
  {
    url: Sportify,
    title: "Sportify Subscripton",
    date: "25 Jan 2021",
    category: "Shopping",
    cardNo: "123***",
    status: "Pending",
    balance: 150,
    type: "debit",
  },
  {
    url: Service,
    title: "Mobile Service",
    date: "25 Jan 2021",
    category: "Service",
    cardNo: "123***",
    status: "Completed",
    balance: 340,
    type: "debit",
  },
  {
    url: Emily,
    title: "Emilly Wilson",
    date: "25 Jan 2021",
    category: "Transfer",
    cardNo: "123***",
    status: "Completed",
    balance: 780,
    type: "credit",
  },
];

const Accounts = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {cardsCategory.map((card) => (
          <ShortCards
            key={card.id}
            url={card.url}
            title={card.title}
            amount={card.amount.toLocaleString()}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center ">
        <div className="col-span-2 mt-5">
          <div>
            <H1 h1={"Last Transaction"} />
          </div>

          <div className=" bg-white shadow-sm rounded-lg p-4 h-[210px] ">
            {transactionsHistory.map((transaction) => (
              <LastTransaction
                key={transaction.id}
                url={transaction.url}
                title={transaction.title}
                date={transaction.date}
                category={transaction.category}
                cardNo={transaction.cardNo}
                status={transaction.status}
                balance={transaction.balance}
                type={transaction.type}
              />
            ))}
          </div>
        </div>

        <div className="col-span-1 mt-5">
          <div className="">
            <H1 h1={"My Card"} />
          </div>

          <div className="">
            <Card
              header1={"My Card"}
              Amount={"5,756"}
              url1={Chip}
              Name={"Eddy Cusuma"}
              Date={"12/22"}
              url2={CardCircles}
              topRad={"#3064FF"}
              btmRad={"#539BFF"}
              backgroundColor={"#2D60FF"}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 items-center">
        <div className="mt-5 col-span-2">
          <H1 h1={"Debit an Credit Overview"} />
          <div>
            <DebitAndCredit />
          </div>
        </div>
        <div className="  mt-5 sm:col-span-1 ">
          <H1 h1={"Invoices Sent"} />
          <div className="bg-white rounded-lg shadow-lg p-5">
            {invoiceData.map((invoice, index) => (
              <Invoices
                key={index}
                img={invoice.img}
                heading={invoice.heading}
                content={invoice.content}
                amount={invoice.amount.toLocaleString()}
                iconBg={invoice.iconBg}
                iconColor={invoice.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
