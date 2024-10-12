import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const yearlyBalance = [
  {
    year: "2016",
    balance: 3000,
  },
  {
    year: "2017",
    balance: 30000,
  },
  {
    year: "2018",
    balance: 10000,
  },
  {
    year: "2019",
    balance: 25000,
  },
  {
    year: "2020",
    balance: 8000,
  },
 
];

const MonthlyRevenue = () => {
  return (
    <div className="bg-white p-3 shadow-md rounded-xl h-[250px] mt-5">
      <ResponsiveContainer width="100%">
        <LineChart data={yearlyBalance}>
          <Line 
          dataKey="balance"
          type= "monotone"
        
          stroke="#16DBCC"
          strokeWidth={3}
           />
          <XAxis dataKey="year" />
          <YAxis
            dataKey="balance"
            domain={[0, 50000]}
            ticks={[0, 10000, 20000, 30000, 40000]}
          />
          <Tooltip />
          <CartesianGrid horizontal ={true} vertical={false} strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyRevenue;
