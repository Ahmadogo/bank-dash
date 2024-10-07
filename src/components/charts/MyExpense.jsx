import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  Cell,
} from "recharts";
import H1 from "../../ui/H1";

const expenses = [
  {
    month: "Aug",
    expense: 10000,
  },
  {
    month: "Sep",
    expense: 13000,
  },
  {
    month: "Oct",
    expense: 10000,
  },
  {
    month: "Nov",
    expense: 5000,
  },
  {
    month: "Dec",
    expense: 12500,
  },
  {
    month: "Jan",
    expense: 9000,
  },
];

const MyExpense = () => {
  return (
    <div>
      <div>
        <H1 h1={"My Expenses"} />
      </div>
      <div className="bg-white shadow-lg rounded-3xl ">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={expenses} barSize={40}>
            <XAxis dataKey="month" />
            {/* <YAxis /> */}
            <Tooltip />
            <Bar dataKey="expense" radius={8}>
              {expenses.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.month === "Dec" ? "#16DBCC" : "#EDF0F7"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyExpense;

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart = () => {
//   const data = {
//     labels: ['August', 'September', 'October', 'November', 'December', 'January'],
//     datasets: [
//       {
//         label: 'Monthly Data',
//         data: [10000, 12000, 12500, 11000, 9000, 9500],
//         backgroundColor: [
//           'gray', 'gray', 'teal', 'gray', 'gray', 'gray'
//         ],
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// export default BarChart;
