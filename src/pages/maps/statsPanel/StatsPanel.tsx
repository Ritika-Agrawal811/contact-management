import React from "react";
import client from "../../../api/axios";
import { useQuery } from "react-query";
import StatsCard from "./StatsCard";

const StatsPanel = () => {
  const { data: covidData } = useQuery("covid-all", () => {
    return client.get("all");
  });
  const statsData = covidData?.data;

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-11/12 md:w-4/5 lg:w-11/12">
      {statsData ? (
        <>
          <StatsCard
            statTitle="Total Cases"
            statValue={statsData.cases}
            statIncrement={statsData.todayCases}
            positive={false}
          />
          <StatsCard
            statTitle="Deaths"
            statValue={statsData.deaths}
            statIncrement={statsData.todayDeaths}
            positive={statsData.todayDeaths === 0 ? true : false}
          />
          <StatsCard
            statTitle="Recovered"
            statValue={statsData.recovered}
            statIncrement={statsData.todayRecovered}
            positive={true}
          />
          <StatsCard
            statTitle="Active Cases"
            statValue={statsData.active}
            statIncrement={statsData.critical}
            positive={false}
          />
        </>
      ) : (
        [1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="animate-pulse flex space-x-4 border-2 border-blue-400 p-2 rounded"
          >
            <div className="flex-1 space-y-4 py-1">
              <div className="h-10 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default StatsPanel;
