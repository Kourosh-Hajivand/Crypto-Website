"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import moment from "moment";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function Chart({
  chartData,
  id,
}: {
  chartData: [[number, number]];
  id: string;
}) {
  const coinchartData = chartData.map((item, index) => {
    return { x: item[0], y: item[1].toFixed(2) };
  });
  if (!chartData) return;

  const options = {
    responsive: true,
    animation: {
      duration: 2000, // Set the duration of the animation in milliseconds
      easing: "easeInOutQuad", // Choose an easing function (optional)
    },
  };
  const data = {
    labels: coinchartData.map((item, index) => moment(item.x).format("MMMDD")),
    datasets: [
      {
        fill: true,
        data: coinchartData.map((item) => item.y),
        label: id,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 1,
      },
    ],
  };
  return (
    <div className="w-full max-w-[850px] h-screen flex items-center justify-center ">
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
