import TotalInvested from "../../assets/svg/investedAmount.svg";
import NoOfInvestment from "../../assets/svg/no-ofInvestment.svg";
import Return from "../../assets/svg/rateOfReturn.svg";
import { AiOutlineApple } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
 
 export const investmentCategrories = [
    {
      id: 1,
      url: TotalInvested,
      title: "Invested Amount",
      amount: 150000,
    },
    {
      id: 2,
      url: NoOfInvestment,
      title: "Number of Investments",
      amount: 1250,
    },
    {
      id: 3,
      url: Return,
      title: "Rate of Return",
      amount: "+5.80%",
    },
  ];

   export const myInvestmentsData = [
    {
    //   icon: <AiOutlineApple/>,
      title: "Apple Store",
      content1: "E-commerce, Marketplace",
      amount: 54000,
      content2: "Investment Value",
      percent: 16,
      content3: "Return Value",
      type: "profit"
    },
    {
    //   icon: <FaGoogle />,
      title: "Samsung Mobile",
      content1: "E-commerce, Marketplace",
      amount: 25300,
      content2: "Investment Value",
      percent: 4,
      content3: "Return Value",
      type: "loss"
    },
    {
    //   icon: <SiTesla />,
      title: "Tesla Motors",
      content1: "Electric vehicle",
      amount: 8200,
      content2: "Investment Value",
      percent: 25,
      content3: "Return Value",
      type: "profit"
    },
  ]

  export const trendingStock = [
    {
        slNo: "01.",
        name: "Trivago",
        price: 520,
        return : 5,
        outcome: "profit"
    },
    {
        slNo: "02.",
        name: "Canon",
        price: 480,
        return : 10,
        outcome: "profit"
    },
    {
        slNo: "03.",
        name: "Uber Food",
        price: 350,
        return : 3,
        outcome: "loss"
    },
    {
        slNo: "04.",
        name: "Nokia",
        price: 940,
        return : 2,
        outcome: "profit"
    },
    {
        slNo: "05.",
        name: "Tiktok",
        price: 670,
        return : 12,
        outcome: "loss"
    },
    
  ]