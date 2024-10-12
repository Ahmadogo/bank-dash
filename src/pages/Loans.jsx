import React from "react";
import Personal from "../assets/svg/personalLoans.svg";
import Corporate from "../assets/svg/corporateLoans.svg";
import Business from "../assets/svg/businessLoan.svg";
import Custom from "../assets/svg/customLoans.svg";
import ShortCards from "../components/cards/ShortCards";
import H1 from "../ui/H1";
import ActiveLoansOverview from "../components/activeLoans/ActiveLoansOverview";

const loanCategory = [
  {
    id: 1,
    url: Personal,
    title: "Personal Loans",
    amount: 50000,
  },
  {
    id: 1,
    url: Corporate,
    title: "Corporate Loans",
    amount: 100000,
  },
  {
    id: 1,
    url: Business,
    title: "Business Loans",
    amount: 500000,
  },
  {
    id: 1,
    url: Custom,
    title: "Custom Loans",
    amount: "Choose Amount",
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
