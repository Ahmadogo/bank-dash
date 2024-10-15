import React from "react";
import {
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  YAxis,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  {
    day: "Sat",
    Debit: 2000,
    Credit: 5000,
  },
  {
    day: "Sun",
    Debit: 2000,
    Credit: 4000,
  },
  {
    day: "Mon",
    Debit: 2000,
    Credit: 3000,
  },
  {
    day: "Tue",
    Debit: 4500,
    Credit: 2500,
  },
  {
    day: "Wed",
    Debit: 2200,
    Credit: 4500,
  },
  {
    day: "Thu",
    Debit: 3500,
    Credit: 2000,
  },
  {
    day: "Fri",
    Debit: 3000,
    Credit: 4000,
  },
];

const DebitAndCredit = () => {
  return (
    <div
      className="bg-white p-5  shadow-md h-[300px] rounded-lg"
      style={{ width: "100%" }}
    >
      <p className="text-[#718EBF]">
        $7,500 Debited & $5,420 Credited in this week
      </p>
      <ResponsiveContainer>
        <BarChart data={data} barSize={30}>
          <XAxis dataKey="day" />
          <Legend verticalAlign="top" align="right" />
          <Tooltip/>
          <Bar dataKey="Debit" fill="#1A16F3" radius={9} />
          <Bar dataKey="Credit" fill="#FCAA0B" radius={9} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DebitAndCredit;
