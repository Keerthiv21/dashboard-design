import React from "react";
import { Line } from "react-chartjs-2";

function Charts() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [33, 53, 85, 41, 44],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <h2>Sales Data</h2>
      <Line data={data} />
    </div>
  );
}

export default Charts;
