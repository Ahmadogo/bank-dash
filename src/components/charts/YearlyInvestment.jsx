import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const yearlyBalance = [
    {
        year: "2016",
        balance: 0,
    },
    {
        year: "2017",
        balance: 10000,
    },
    {
        year: "2018",
        balance: 20000,
    },
    {
        year: "2019",
        balance: 30000,
    },
    {
        year: "2020",
        balance: 40000,
    },
    {
        year: "2021",
        balance: 50000,
    }
]

const YearlyInvestment = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" >
        <AreaChart data={yearlyBalance}>
          <Line dataKey="balance" />
          <Area dataKey="balance"/>
          <XAxis dataKey="year"/>
          <YAxis />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyInvestment;
