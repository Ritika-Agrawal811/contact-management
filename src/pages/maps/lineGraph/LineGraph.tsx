import React from "react";
import { useQuery } from "react-query";
import client from "../../../api/axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Legend);

type GraphObject = {
  month: string;
  count: number;
};

const prepareGraphData = (data: { [key: string]: number }) => {
  const result: GraphObject[] = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let key in data) {
    let date = key.split("/");
    let month = date[0];
    let year = date[2];

    if (year === "20") {
      const index = result.findIndex(
        (item) => item.month === months[Number(month) - 1]
      );

      if (index !== -1) {
        result[index].count += data[key];
      } else {
        result.push({
          month: months[Number(month) - 1],
          count: data[key],
        });
      }
    }
  }

  return result;
};

const LineGraph = () => {
  const { data: queryData } = useQuery("covid-cases", () => {
    return client.get("historical/all?lastdays=all");
  });

  const casesData = prepareGraphData(queryData?.data.cases);
  console.log(casesData);

  const chartData = {
    labels: casesData?.map((item) => item.month), //months
    datasets: [
      {
        label: "Year 2020",
        data: casesData?.map((item) => item.count), // cases count
        borderColor: "blue",
        pointBackgroundColor: "red",
      },
    ],
  };

  return (
    <section className="w-11/12 md:w-3/4 my-10 bg-white p-1 md:p-8 rounded shadow">
      <Line data={chartData} options={{}} />
    </section>
  );
};

export default LineGraph;
