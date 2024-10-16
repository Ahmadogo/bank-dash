import React, { useState } from "react";
import { cardData as initialCardData} from "../pages/creditCard/Data";

const AddNewCard = () => {

  const [cardData, setCardData] = useState(initialCardData);
  const [formData, setFormData] = useState({
    cardType: "",
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addCard = () => {
    const newCard = {
      id: cardData.length + 1,
      icon: "FaMoneyCheckDollar", 
      headCol1: "Card Type",
      paraCol1: formData.cardType || "Secondary",
      headCol2: "Bank",
      paraCol2: "Your Bank", 
      headCol3: "Card Number",
      paraCol3: `**** **** ${formData.cardNumber.slice(-4)}`,
      headCol4: "Card Name",
      paraCol4: formData.nameOnCard,
      link: "View Details",
      iconBg: "#FFE0EB", 
      iconColor: "#FF82AC", 
    };

    setCardData([...cardData, newCard]); 
    setFormData({ cardType: "", cardNumber: "", nameOnCard: "", expirationDate: "" }); 
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md ">
      <p className="text-[#718EBF]">
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </p>

      <div className="grid grid-cols-2 items-center gap-5 mt-5">
        <div>
          <label
            htmlFor="cardType"
            className="block  font-semibold leading-6 text-[#232323]"
          >
            Card Type
          </label>
          <div className="mt-2">
            <input
              
              id="cardType"
              name="cardType"
              type="text"
              value={formData.cardType}
              onChange={handleInputChange}
              placeholder="Classic"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>
          <label
            htmlFor="cardNumber"
            className="block  mt-3 font-semibold leading-6 text-[#232323]"
          >
            Card Number
          </label>
          <div className="mt-2">
            <input
              
              id="cardNumber"
              name="cardNumber"
              type="text"
              onChange={handleInputChange}
              value={formData.cardNumber}
              placeholder="**** **** ****"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="nameOnCard"
            className="block  font-semibold leading-6 text-[#232323]"
          >
            Name On Card
          </label>
          <div className="mt-2">
            <input
              id="nameOnCard"
              name="nameOnCard"
              type="text"
              onChange={handleInputChange}
              value={formData.nameOnCard}
              placeholder="My Cards"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
          </div>

          <label className="block  mt-5 font-semibold leading-6 text-gray-900">
            Expiration Date
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="expirationDate"
              name="expirationDate"
              type="date"
              onChange={handleInputChange}
              value={formData.expirationDate}
              placeholder="25 Jan 2025"
              className=" p-2 block w-full rounded-md border-0 py-1.5 text-[#718EBF] shadow-sm ring-1 ring-[#718EBF] placeholder:text-[#718EBF] disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 "
            />
            <div className="absolute inset-y-0 right-5 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Date
              </label>
              <select
                id="date"
                name="expiryDate"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
      onClick={addCard}
      className="bg-[#1814F3] text-white font-semibold px-10 cursor-pointer py-3 mt-10 mb-1 rounded-md">
        Add Card
      </button>
    </div>
  );
};

export default AddNewCard;
