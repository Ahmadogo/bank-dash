import React from "react";
import BankServiceList from "../components/BankServiceList";
import H1 from "../ui/H1";
import { serviceCategory, serviceList } from "../services/Data";
import ShortCards from "../components/cards/ShortCards";

const Services = () => {
  return (
    <div>
      <div className="flex overflow-x-auto space-x-3 md:grid  md:grid-cols-3 gap-5">
        {serviceCategory.map((service) => (
          <ShortCards
            key={service.id}
            url={service.url}
            title2={service.title2}
            content={service.content}
          />
        ))}
      </div>

      <div className="mt-5">
        <div className=" mb-5">
          <H1 h1={"Bank Services List"} />
        </div>
        <div>
          {serviceList.map((service) => (
            <BankServiceList
              key={service.id}
              url1={service.url1}
              headCol1={service.headCol1}
              headCol2={service.headCol2}
              headCol3={service.headCol3}
              headCol4={service.headCol4}
              paraCol1={service.paraCol1}
              paraCol2={service.paraCol2}
              paraCol3={service.paraCol3}
              paraCol4={service.paraCol4}
              btn={service.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
