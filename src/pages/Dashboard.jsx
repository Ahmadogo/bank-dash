import React from "react";
import Card from "../components/cards/Card";
import Chip from "../assets/svg/Chip_Card.svg";
import CardCircles from "../assets/svg/masterCard-circles.svg";
import BlackChip from "../assets/svg/blackChip_Card.svg";
import BlackCircles from "../assets/svg/blackMasterCard-circle.svg";
import Transactions from "../components/MyTransactions";
import WeeklyActivity from "../components/charts/WeeklyActivity";
import ExpenseStatistics from "../components/charts/ExpenseStatistics";
import QuickTransfers from "../components/QuickTransfers";
import BalanceHistory from "../components/charts/BalanceHistory";
import WhiteCard from "../components/cards/WhiteCard";
import H1 from "../ui/H1";

const Dashboard = () => {
  return (
    <div>
      <div className=" grid sm:grid-cols-3 sm:gap-5 items-center ">
        <div>
          <H1 h1={"My Cards"} />
          <Card
            Amount={"5,756"}
            url1={Chip}
            Name={"Eddy Cusuma"}
            Date={"12/22"}
            url2={CardCircles}
            topRad={"#343C6A"}
            btmRad={"#718EBF"}
            backgroundColor={"#0A06F4"}
          />
        </div>

        <div>
          <H1 h1={"See All"} />
          <WhiteCard
            Amount={"5,756"}
            Name={"Eddy Cusuma"}
            Date={"12/22"}
            url1={BlackChip}
            url2={BlackCircles}
            border={"border-t"}
            backgroundColor={"#fff"}
          />
        </div>

        <Transactions />
      </div>

      <div className="grid  items-center  grid-cols-1 sm:grid-cols-3  gap-5">
        <div className="col-span-2 mt-5">
          <div>
            <H1 h1={"Weekly Activity"} />
            <WeeklyActivity />
          </div>
        </div>

        <div className="  col-span-1 mt-5">
          <div>
            <H1 h1={"Expense Statistics"} />
            <ExpenseStatistics />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
        <div className="col-span-1 mt-5 ">
          <div>
            <H1 h1={"Quick Transfers"} />
            <QuickTransfers />
          </div>
        </div>

        <div className="col-span-2 mt-5">
          <div>
            <H1 h1={"Balance History"} />
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
