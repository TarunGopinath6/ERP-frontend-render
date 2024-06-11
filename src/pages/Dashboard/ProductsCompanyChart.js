import React from "react";
import Chart from "react-apexcharts";

export default function ProductsCompanyChart() {
  const chartOptions = {
    labels: [
      "Larsen & Toubro",
      "Takraf",
      "Flender",
      "Siemens",
      "ABB",
      "Others",
    ],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [40, 25, 15, 5, 10, 5];

  return (
    <div className="pie-chart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="pie"
        width="500"
      />
    </div>
  );
}
