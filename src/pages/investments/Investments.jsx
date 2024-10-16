import React from "react";

import ShortCards from "../../components/cards/ShortCards";
import H1 from "../../ui/H1";
import YearlyInvestment from "../../components/charts/YearlyInvestment";
import MonthlyRevenue from "../../components/charts/MonthlyRevenue";
import MyInvestments from "../../components/MyInvestments";
import {
  investmentCategrories,
  myInvestmentsData,
} from "../../pages/investments/Data";
import TrendingStock from "../../components/TrendingStock";

const Investments = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-5">
        {investmentCategrories.map((category) => (
          <ShortCards
            key={category.id}
            title={category.title}
            url={category.url}
            amount={category.amount.toLocaleString()}
            iconBg={category.iconBg}
            iconColor={category.iconColor}
          />
        ))}
      </div>

      <div className="grid items-center gap-5 sm:grid-cols-2">
        <div>
          <H1 h1="Yearly Total Investment" />
          <YearlyInvestment />
        </div>
        <div>
          <H1 h1="Monthly Revenue" />
          <MonthlyRevenue />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2 col-span-1">
          <H1 h1={"My Investments"} />
          {myInvestmentsData.map((investment) => (
            <MyInvestments
              key={investment.id}
              url={investment.url}
              title={investment.title}
              content1={investment.content1}
              amount={investment.amount.toLocaleString()}
              content2={investment.content2}
              percent={investment.percent}
              content3={investment.content3}
              type={investment.type}
              iconBg={investment.iconBg}
              iconColor={investment.iconColor}
            />
          ))}
        </div>
        <div className="sm:col-span-1 col-span-1">
          <H1 h1={"Trending Stock"} />
          <TrendingStock />
        </div>
      </div>
    </div>
  );
};

export default Investments;
