import React from "react";
import Card from "../../components/cards/Card";
import MyExpense from "../../components/charts/MyExpense";
import Chip from "../../assets/svg/Chip_Card.svg";
import CardCircles from "../../assets/svg/masterCard-circles.svg";
import BlackChip from "../../assets/svg/blackChip_Card.svg";
import BlackCircles from "../../assets/svg/blackMasterCard-circle.svg";
import WhiteCard from "../../components/cards/WhiteCard";
import RecentTransaction from "../../components/RecentTransaction";
import H1 from "../../ui/H1";

const Transactions = () => {
 
  return (
    <div>
      <div className="grid grid-cols-1 items-center sm:grid-cols-3 gap-5">
        <div>
          <div>
            <H1 h1={"My Cards"} />
          </div>
          <Card
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
        </div>
        <div>
          <H1 h1={"+ Add Card"} />
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
        <div>
          <H1 h1={"My Expenses"} />
          <MyExpense />
        </div>
      </div>

      <div className="mt-10">
        <H1 h1={"Recent Transactions"} />
        <span>
          
          <RecentTransaction />
        </span>
      </div>
    </div>
  );
};

export default Transactions;
