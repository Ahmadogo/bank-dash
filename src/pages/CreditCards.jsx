import React from "react";
import Card from "../components/cards/Card";
import WhiteCard from "../components/cards/WhiteCard";
import Chip from "../assets/svg/Chip_Card.svg";
import CardCircles from "../assets/svg/masterCard-circles.svg";
import BlackChip from "../assets/svg/blackChip_Card.svg";
import BlackCircles from "../assets/svg/blackMasterCard-circle.svg";
import H1 from "../ui/H1";
import CardExpenseStat from "../components/charts/CardExpenseStat";

const CreditCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-3">
        <div>
          <h1 className=" text-[1.25rem] text-[#343C6A] font-bold">My Cards</h1>
          <Card
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
        <div className="mt-4">
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
        <div className="mt-4">
          <WhiteCard
            header2={"+ Add Card"}
            Amount={"5,756"}
            Name={"Eddy Cusuma"}
            Date={"12/22"}
            url1={BlackChip}
            url2={BlackCircles}
            border={"border-t"}
            backgroundColor={"#fff"}
          />
        </div>
      </div>

      <div>
        <H1 h1={"Card Expense Statistics"} />
        <CardExpenseStat />
      </div>
    </div>
  );
};

export default CreditCards;
