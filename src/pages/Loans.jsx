import React from "react";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import ShortCards from "../components/cards/ShortCards";
import H1 from "../ui/H1";
import ActiveLoansOverview from "../components/activeLoans/ActiveLoansOverview";

const loanCategory = [
  {
    id: 1,
    url: FaUser,
    title: "Personal Loans",
    amount: 50000,
     iconBg: "#E7EDFF",
    iconColor: "#396AFF"
  },
  {
    id: 1,
    url: FaBriefcase,
    title: "Corporate Loans",
    amount: 100000,
     iconBg: "#FFF5D9",
    iconColor: "#FFBB38"
  },
  {
    id: 1,
    url: BsBarChartFill,
    title: "Business Loans",
    amount: 500000,
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC"
  },
  {
    id: 1,
    url: LiaToolsSolid,
    title: "Custom Loans",
    amount: "Choose Amount",
     iconBg: "#DCFAF8",
    iconColor: "#16DBCC"
  },
];

const Loans = () => {
  return (
    <div>
      <div className="flex overflow-x-auto space-x-3 md:grid  md:grid-cols-4 gap-5">
        {loanCategory.map((loan) => (
          <ShortCards
            key={loan.id}
            title={loan.title}
            url={loan.url}
            amount={loan.amount.toLocaleString()}
            iconBg={loan.iconBg}
            iconColor={loan.iconColor}
          />
        ))}
      </div>

      <div className="mt-5">
        <H1
        h1={'Active Loans Overview'}
        />
        <ActiveLoansOverview/>
      </div>
    </div>
  );
};

export default Loans;
