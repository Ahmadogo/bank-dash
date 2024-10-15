import { FaCreditCard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiAppleLine } from "react-icons/ri";

export const cardData = [
  {
    id: 1,
    icon: FaMoneyCheckDollar,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "DBL Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 5600",
    headCol4: "Card Name",
    paraCol4: "Williams",
    link: "View Details",
    iconBg: "#E7EDFF",
    iconColor: "#396AFF"
  },
  {
    id: 1,
    icon: FaMoneyCheckDollar,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "BRC Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 4300",
    headCol4: "Card Name",
    paraCol4: "Michel",
    link: "View Details",
     iconBg: "#FFE0EB",
    iconColor: "#FF82AC"
  },
  {
    id: 1,
    icon:FaMoneyCheckDollar,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "ABM Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 7560",
    headCol4: "Card Name",
    paraCol4: "Edward",
    link: "View Details",
     iconBg: "#FFF5D9",
    iconColor: "#FFBB38"
  },
];

export const cardSettingsData = [
  {
    icon: FaCreditCard,
    header: "Block Card",
    para: "Instantly block your card",
    iconBg: "#FFF5D9",
    iconColor: "#FFBB38"
  },
  {
    icon:  MdLock,
    header: "Change pin code",
    para: "Choose another pin code",
     iconBg: "#E7EDFF",
    iconColor: "#396AFF"
  },
  {
    icon: FaGoogle ,
    header: "Add to google pay",
    para: "Withdraw without any card",
     iconBg: "#FFE0EB",
    iconColor: "#FF82AC"
  },
  {
    icon: RiAppleLine ,
    header: "Add to  apple pay",
    para: "Withdraw without any card",
     iconBg: "#DCFAF8",
    iconColor: "#16DBCC"
  },
  {
    icon: RiAppleLine,
    header: "Add to  apple store",
    para: "Withdraw without any card",
      iconBg: "#DCFAF8",
    iconColor: "#16DBCC"
  }
];
