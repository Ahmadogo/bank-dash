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
    balance: 5000,
  },
  {
    year: "2017",
    balance: 25000,
  },
  {
    year: "2018",
    balance: 15000,
  },
  {
    year: "2019",
    balance: 30000,
  },
  {
    year: "2020",
    balance: 10000,
  },
  {
    year: "2021",
    balance: 20000,
  },
];

const YearlyInvestment = () => {
  return (
    <div className="bg-white p-3 shadow-md rounded-xl h-[250px] mt-5">
      <ResponsiveContainer width="100%">
        <LineChart data={yearlyBalance}>
          <Line 
          dataKey="balance"
        
          stroke="#FCAA0B"
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

export default YearlyInvestment;
