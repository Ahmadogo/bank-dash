import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import H1 from "../../ui/H1";
import { ResponsiveContainer } from "recharts";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatistics = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        label: "Expenses Distribution",
        data: [30, 15, 20, 35], // Data corresponding to each category
        backgroundColor: [
          "#343C6A", // Entertainment
          "#FC7900", // Bill Expense
          "#FA00FF", // Investment
          "#1814F3", // Others
        ],
        borderWidth: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "white",

        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          // Format text in a column with percentage on top and label below
          const label = context.chart.data.labels[context.dataIndex];
          const percentage = ((value / 100) * 100).toFixed(0) + "%";
          return percentage + "\n" + label;
        },
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  };

  return (
    <div>
      <div>
        <H1 h1={"Expense Statistics"} />
      </div>
      <div
        className="bg-white shadow-lg rounded-3xl mt-5"
        style={{ width: "100%", height: 300 }}
      >
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <Pie data={data} options={options} />;
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
