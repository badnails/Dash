import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CO2Chart = ({ series, title }) => {
  useEffect(() => {
    console.log("CO2Chart series:", series);
  }, [series]);

  const data = {
    labels: series.map((data) => data.year),
    datasets: [
      {
        label: title,
        data: series.map((data) => data.value),
        borderColor: "white", // Line color
        //backgroundColor: "rgba(0,0,0,1)", // Area color with transparency
        fill: true,
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
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: "black", // Set the title color to black
        },
        ticks: {
          color: "black", // Set the ticks color to black
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
          color: "black", // Set the title color to black
        },
        ticks: {
          color: "black", // Set the ticks color to black
        },
      },
    },
  };

  useEffect(() => {
    console.log("Chart data:", data);
  }, [data]);

  return <Line data={data} options={options} />;
};

export default CO2Chart;