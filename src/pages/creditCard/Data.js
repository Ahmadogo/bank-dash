import { FaCreditCard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";

export const cardData = [
  {
    id: 1,
    // icon: <FaCreditCard />,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "DBL Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 5600",
    headCol4: "Card Name",
    paraCol4: "Williams",
    link: "View Details",
  },
  {
    id: 1,
    // icon: <FaCreditCard />,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "BRC Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 4300",
    headCol4: "Card Name",
    paraCol4: "Michel",
    link: "View Details",
  },
  {
    id: 1,
    // icon: <FaCreditCard />,
    headCol1: "Card Type",
    paraCol1: "Secondary",
    headCol2: "Bank",
    paraCol2: "ABM Bank",
    headCol3: "Card Number",
    paraCol3: "**** **** 7560",
    headCol4: "Card Name",
    paraCol4: "Edward",
    link: "View Details",
  },
];

export const cardSettingsData = [
  {
    // icon: <FaCreditCard />,
    header: "Block Card",
    para: "Instantly block your card",
  },
  {
    // icon:  <MdLock />,
    header: "Change pin code",
    para: "Choose another pin code",
  },
  {
    // icon: <FaGoogle />,,
    header: "Add to google pay",
    para: "Withdraw without any card",
  },
  {
    // icon: <RiAppleLine />,
    header: "Add to  apple pay",
    para: "Withdraw without any card",
  },
  {
    // icon: <RiAppleLine />,
    header: "Add to  apple store",
    para: "Withdraw without any card",
  }
];
