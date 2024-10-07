import React from "react";
import Card from "../components/cards/Card";
import MyExpense from "../components/charts/MyExpense";
import Chip from "../assets/svg/Chip_Card.svg";
import CardCircles from "../assets/svg/masterCard-circles.svg";
import BlackChip from "../assets/svg/blackChip_Card.svg";
import BlackCircles from "../assets/svg/blackMasterCard-circle.svg";

const Transactions = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-center sm:grid-cols-3 gap-5">
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
          h2={"+ Add Card"}
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

        <MyExpense />
      </div>
    </>
  );
};

export default Transactions;
