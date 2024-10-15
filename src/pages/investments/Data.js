import TotalInvested from "../../assets/svg/investedAmount.svg";
import NoOfInvestment from "../../assets/svg/no-ofInvestment.svg";
import Return from "../../assets/svg/rateOfReturn.svg";
import { AiOutlineApple } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";

export const investmentCategrories = [
  {
    id: 1,
    url: FaSackDollar,
    title: "Invested Amount",
    amount: 150000,
    iconBg: "#DCFAF8",
    iconColor: "#16DBCC",
  },
  {
    id: 2,
    url: FaChartPie,
    title: "Number of Investments",
    amount: 1250,
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC",
  },
  {
    id: 3,
    url: FaRepeat,
    title: "Rate of Return",
    amount: "+5.80%",
    iconBg: "#E7EDFF",
    iconColor: "#396AFF",
  },
];

export const myInvestmentsData = [
  {
    url: AiOutlineApple,
    title: "Apple Store",
    content1: "E-commerce, Marketplace",
    amount: 54000,
    content2: "Investment Value",
    percent: 16,
    content3: "Return Value",
    type: "profit",
    // iconBg: "#FFE0EB",
    iconColor: "#FF82AC",
  },
  {
    url: FaGoogle,
    title: "Samsung Mobile",
    content1: "E-commerce, Marketplace",
    amount: 25300,
    content2: "Investment Value",
    percent: 4,
    content3: "Return Value",
    type: "loss",
    // iconBg: "#E7EDFF",
    iconColor: "#4471FF",
  },
  {
    url: SiTesla,
    title: "Tesla Motors",
    content1: "Electric vehicle",
    amount: 8200,
    content2: "Investment Value",
    percent: 25,
    content3: "Return Value",
    type: "profit",
    // iconBg: "#FFF5D9",
    iconColor: "#FFBB38",
  },
];

export const trendingStock = [
  {
    slNo: "01.",
    name: "Trivago",
    price: 520,
    return: 5,
    outcome: "profit",
  },
  {
    slNo: "02.",
    name: "Canon",
    price: 480,
    return: 10,
    outcome: "profit",
  },
  {
    slNo: "03.",
    name: "Uber Food",
    price: 350,
    return: 3,
    outcome: "loss",
  },
  {
    slNo: "04.",
    name: "Nokia",
    price: 940,
    return: 2,
    outcome: "profit",
  },
  {
    slNo: "05.",
    name: "Tiktok",
    price: 670,
    return: 12,
    outcome: "loss",
  },
];
