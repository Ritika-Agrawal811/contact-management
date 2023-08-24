import React from "react";
import Header from "../../components/UI/Header";
import StatsPanel from "./statsPanel/StatsPanel";
import LineGraph from "./lineGraph/LineGraph";

const Maps = () => {
  return (
    <main className="flex flex-col items-center w-full bg-blue-50 flex-grow">
      <Header title="Charts and Maps" />
      <StatsPanel />
      <LineGraph />
    </main>
  );
};

export default Maps;
