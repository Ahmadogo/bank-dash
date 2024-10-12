import React from "react";
import {
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  AreaChart,
  Area,
} from "recharts";
import H1 from "../../ui/H1";

const balanceData = [
  {
    month: "July",
    balance: 0,
  },
  {
    month: "Aug",
    balance: 310,
  },
  {
    month: "Sep",
    balance: 100,
  },
  {
    month: "Oct",
    balance: 480,
  },
  {
    month: "Nov",
    balance: 200,
  },
  {
    month: "Dec",
    balance: 580,
  },
  {
    month: "Jan",
    balance: 220,
  },
];

const BalanceHistory = () => {
  return (
    <div>
      
      <div className="bg-white p-3 shadow-md rounded-lg h-[250px] mt-5">
        <ResponsiveContainer width="100%">
          <AreaChart data={balanceData}>
            
            {/* <LineChart data={balanceData}> */}
            <XAxis dataKey="month" />
            <YAxis domain={[0, 800]}  />
            <CartesianGrid strokeDasharray="5 5" stroke="#999" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              fill="#D1E6FF"
              stroke="#1814F3"
              strokeWidth={3}
              fillOpacity={1}
              
            />
            <Line
              dataKey="balance"
              type="monotone"
              stroke="#1814F3"
              strokeWidth={3}
            />
            {/* </LineChart> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;
