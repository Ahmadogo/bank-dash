import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import H1 from "../../ui/H1";

const data = [
  {
    day: "Sat",
    Deposit: 450,
    Balance: 220,
  },
  {
    day: "Sun",
    Deposit: 350,
    Balance: 120,
  },
  {
    day: "Mon",
    Deposit: 320,
    Balance: 280,
  },
  {
    day: "Tue",
    Deposit: 480,
    Balance: 380,
  },
  {
    day: "Wed",
    Deposit: 150,
    Balance: 250,
  },
  {
    day: "Thu",
    Deposit: 400,
    Balance: 320,
  },
];

const WeeklyActivities = () => (
  <>
    
    <div
      className="bg-white p-2 shadow-md rounded-lg h-[310px] mt-5"
      style={{ width: "100%" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={10}>
          <Legend verticalAlign="top" align="right" />
          <CartesianGrid vertical={false} horizontal={true} />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
          <Tooltip />
          <Bar dataKey="Deposit" fill="#1814F3" radius={6} />
          <Bar dataKey="Balance" fill="#16DBCC" radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </>
);

export default WeeklyActivities;
