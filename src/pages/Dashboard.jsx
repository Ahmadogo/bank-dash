import React from "react";
import Card from "../components/cards/Card";
import Chip from "../assets/svg/Chip_Card.svg";
import CardCircles from "../assets/svg/masterCard-circles.svg";
import BlackChip from "../assets/svg/blackChip_Card.svg";
import BlackCircles from "../assets/svg/blackMasterCard-circle.svg";
import Transactions from "../components/Transactions";
import WeeklyActivity from "../components/charts/WeeklyActivity";
import ExpenseStatistics from "../components/charts/ExpenseStatistics";
import QuickTransfers from "../components/QuickTransfers";
import BalanceHistory from "../components/charts/BalanceHistory";

const Dashboard = () => {
  return (
    <>
      <div className=" grid   sm:grid-cols-3 sm:gap-5 items-center ">
        <Card
          h1={"My Cards"}
          Amount={"5,756"}
          url1={Chip}
          Name={"Eddy Cusuma"}
          Date={"12/22"}
          url2={CardCircles}
          topRad={"#343C6A"}
          btmRad={"#718EBF"}
          backgroundColor={"#0A06F4"}
          // bg={"black"}
        />

        <Card
          h2={"See All"}
          Amount={"5,756"}
          Name={"Eddy Cusuma"}
          Date={"12/22"}
          url1={BlackChip}
          url2={BlackCircles}
          border={"border-t"}
          textColor={"blue"}
          topRad={"#EDF0F7"}
          btmRad={"#9199AF"}
          backgroundColor={"#fff"}
        />

        <Transactions />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-5">
        <div className="col-span-2">
          <WeeklyActivity />
        </div>
        <div className="col-span-1 ">
          <ExpenseStatistics />
        </div>
      </div>

      <div className="mt-5 items-center grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="col-span-1">
          <QuickTransfers/>
        </div>

        <div className="col-span-2">
          <BalanceHistory/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
