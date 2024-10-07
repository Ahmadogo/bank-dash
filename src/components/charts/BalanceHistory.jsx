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
    balance: 120,
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
    <div>
      <H1
      h1={'Balance History'}
      />
    </div>
      <div className="bg-white pr-3 pt-5 shadow-lg rounded-3xl mt-5">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={balanceData}>
            {/* <LineChart data={balanceData}> */}
            <XAxis dataKey="month" />
            <YAxis domain={[0, 800]} ticks={[0, 200, 400, 600, 800]} />
            <CartesianGrid strokeDasharray="3 3" stroke="#999" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              fill="rgba(0,0,0,0.2)"
              stroke="#1814F3"
              strokeWidth={3}
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
