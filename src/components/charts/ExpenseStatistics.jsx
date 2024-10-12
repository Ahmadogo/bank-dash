import React from "react";
import H1 from "../../ui/H1";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Sector,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Entertainment",
    value: 30,
  },
  {
    name: "Bill Expense",
    value: 15,
  },
  {
    name: "Investments",
    value: 20,
  },
  {
    name: "others",
    value: 35,
  },
];

const colors = ["#343C6A", "#FC7900", "#FA00FF", "#1814F3"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const ExpenseStatistics = () => {
  return (
    <div>
      <div className="bg-white p-2 h-[310px] flex justify-center items-center mt-4 shadow-md rounded-lg"
      style={{ width: "100%"}}
      >
       
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <PieChart width={300} height={400}>
            <Pie
              data={data}
              dataKey='value'
              cx="50%"
              cy="50%"
              innerRadius={false}
              outerRadius= {false}
              strokeWidth={10}
              fill="#8884d8"
              label={renderCustomizedLabel}
              // labelPosition = "inner"
              labelLine ={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            {/* <Legend /> */}
            <Tooltip />
          </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
