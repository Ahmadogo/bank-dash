import React from "react";
import Card from "../components/cards/Card";
import WhiteCard from "../components/cards/WhiteCard";
import Chip from "../assets/svg/Chip_Card.svg";
import CardCircles from "../assets/svg/masterCard-circles.svg";
import BlackChip from "../assets/svg/blackChip_Card.svg";
import BlackCircles from "../assets/svg/blackMasterCard-circle.svg";

const CreditCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-3">
        <Card
          header1={"My Cards"}
          Amount={"5,756"}
          url1={Chip}
          Name={"Eddy Cusuma"}
          Date={"12/22"}
          url2={CardCircles}
          topRad={"#3064FF"}
          btmRad={"#539BFF"}
          backgroundColor={"#2D60FF"}
        />

        <Card
          header1={"`"}
          Amount={"5,756"}
          url1={Chip}
          Name={"Eddy Cusuma"}
          Date={"12/22"}
          url2={CardCircles}
          topRad={"#343C6A"}
          btmRad={"#718EBF"}
          backgroundColor={"#0A06F4"}
        />

        <WhiteCard
          header2={"+ Add Card"}
          Amount={"5,756"}
          Name={"Eddy Cusuma"}
          Date={"12/22"}
          url1={BlackChip}
          url2={BlackCircles}
          border={"border-t"}
          // textColor={"blue"}
          // topRad={"#EDF0F7"}
          // btmRad={"#9199AF"}
          backgroundColor={"#fff"}
        />
      </div>
    </div>
  );
};

export default CreditCards;
