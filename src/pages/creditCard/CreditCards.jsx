import React, { useState } from "react";
import Card from "../../components/cards/Card";
import WhiteCard from "../../components/cards/WhiteCard";
import Chip from "../../assets/svg/Chip_Card.svg";
import CardCircles from "../../assets/svg/masterCard-circles.svg";
import BlackChip from "../../assets/svg/blackChip_Card.svg";
import BlackCircles from "../../assets/svg/blackMasterCard-circle.svg";
import H1 from "../../ui/H1";
import CardExpenseStat from "../../components/charts/CardExpenseStat";
import CardList from "../../components/cards/CardList";
import { cardData, cardSettingsData } from "../creditCard/Data";
import AddNewCard from "../../components/AddNewCard";
import CardSettings from "../../components/CardSettings";


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

      <div className="grid grid-cols-1 sm:grid-cols-3 items-center sm:gap-5">
        <div className="sm:col-span-1">
          <H1 h1={"Card Expense Statistics"} />
          <CardExpenseStat />
        </div>
        <div className="col-span-2">
          <H1 h1={"Card List"} />
          {cardData.map((card) => (
            <CardList
              key={card.id}
              icon={card.icon}
              link={card.link}
              headCol1={card.headCol1}
              headCol2={card.headCol2}
              headCol3={card.headCol3}
              headCol4={card.headCol4}
              paraCol1={card.paraCol1}
              paraCol2={card.paraCol2}
              paraCol3={card.paraCol3}
              paraCol4={card.paraCol4}
              iconBg={card.iconBg}
              iconColor={card.iconColor}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-5">
        <div className="col-span-2">
          <H1 h1={"Add New Card"} />
          <AddNewCard />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <H1 h1={"Card Settings"} />
          <div className="bg-white rounded-lg w-full shadow-md p-5 ">
            {cardSettingsData.map((card) => (
              <CardSettings
                key={card.id}
                icon={card.icon}
                header={card.header}
                para={card.para}
                iconBg={card.iconBg}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
