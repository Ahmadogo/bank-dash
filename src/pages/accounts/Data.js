import { AiOutlineApple } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiPlaystationLine } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { TbBellRinging2 } from "react-icons/tb";
import { LiaToolsSolid } from "react-icons/lia";
export const invoiceData = [
  {
    img: AiOutlineApple,
    heading: "Apple Store",
    content: "5h ago",
    amount: 450,
    iconBg: "#DCFAF8",
    iconColor: "#16DBCC",
  },
  {
    img: FaUser,
    heading: "Apple Store",
    content: "2 days ago",
    amount: 160,
    iconBg: "#FFF5D9",
    iconColor: "#FFBB38",
  },
  {
    heading: "Playstation",
    content: "5 days ago",
    img: RiPlaystationLine,
    amount: 1085,
    iconBg: "#E7EDFF",
    iconColor: "#396AFF",
  },
  {
    img: FaUser,
    heading: "William",
    content: "10 days ago",
    amount: 90,
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC",
  },
];


export const transactionsHistory = [
  {
    url: TbBellRinging2,
    title: "Sportify Subscripton",
    date: "25 Jan 2021",
    category: "Shopping",
    cardNo: "123***",
    status: "Pending",
    balance: 150,
    type: "debit",
    iconBg: "#DCFAF8",
    iconColor: "#16DBCC"
  },
  {
    url: LiaToolsSolid,
    title: "Mobile Service",
    date: "25 Jan 2021",
    category: "Service",
    cardNo: "123***",
    status: "Completed",
    balance: 340,
    type: "debit",
    iconBg: "#E7EDFF",
    iconColor: "#396AFF"
  },
  {
    url: FaUser,
    title: "Emilly Wilson",
    date: "25 Jan 2021",
    category: "Transfer",
    cardNo: "123***",
    status: "Completed",
    balance: 780,
    type: "credit",
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC"
  },
];

 export const cardsCategory = [
  {
    id: 1,
    url: FaSackDollar,
    title: "My Balance",
    amount: 12750,
    iconColor: "#FFBB38",
    iconBg: "#FFF5D9"
  },
  {
    id: 2,
    url: FaHandHoldingDollar,
    title: "Income",
    amount: 5600,
    iconBg: "#E7EDFF",
    iconColor: "#396AFF"
  },
  {
    id: 3,
    url: FaFileInvoiceDollar,
    title: "Expense",
    amount: 3460,
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC"
  },
  {
    id: 4,
    url: FaPiggyBank,
    title: "Total Saving",
    amount: 7920,
    iconBg: "#DCFAF8",
    iconColor: "#16DBCC"
  },
];
