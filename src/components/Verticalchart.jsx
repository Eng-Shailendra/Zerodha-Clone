import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings Chart",
    },
  },
};

export function Verticalchart({ data }) {
  const labels = data.map((subArray) => {
    return subArray["name"];
  });

  const datas = {
    labels,
    datasets: [
      {
        label: "Stock price",
        data: data.map((stock) => {
          return stock.price;
          // console.log(stock.price);
        }),
        backgroundColor: "#f56181",
      },
    ],
  };

  return (
    <>
      <div className="container" style={{ width: "100%" }}>
        <Bar options={options} data={datas} />
      </div>
    </>
  );
}
