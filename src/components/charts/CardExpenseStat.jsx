import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "DBL bank", value: 400 },
  { name: "ABM bank", value: 300 },
  { name: "BRC bank", value: 300 },
  { name: "MCP bank", value: 200 },
];

const COLORS = ["#4C78FF", "#16DBCC", "#FF82AC", "#FFBB38"];
const angles = [
  { start: 0, end: 90 },
  { start: 90, end: 180 },
  { start: 180, end: 270 },
  { start: 270, end: 360 },
];

const CardExpenseStat = () => (
  <div className="bg-white rounded-lg shadow-md w-full p-7 flex justify-center items-center">
    <PieChart width={280} height={250}>
      <Pie
        data={data}
        cx={150}
        cy={100}
        innerRadius={50}
        outerRadius={100}
        startAngle={220}
        endAngle={-250}
        paddingAngle={4}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            startAngle={angles[index].start}
            endAngle={angles[index].end}
          />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={30} width={300}/>
      <Tooltip/>
      
    </PieChart>
  </div>
);

export default CardExpenseStat;
