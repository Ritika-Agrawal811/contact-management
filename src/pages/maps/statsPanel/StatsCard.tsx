import React from "react";
import { BsArrowUp } from "react-icons/bs";

type StatsCardProps = {
  statTitle: string;
  statValue: number;
  statIncrement: number;
  positive: boolean;
};

const StatsCard = ({
  statTitle,
  statValue,
  statIncrement,
  positive,
}: StatsCardProps) => {
  return (
    <article className="bg-white rounded shadow p-4">
      <div className="pl-4 relative before:w-1 before:h-full before:absolute before:bg-blue-800 before:left-0 before:rounded">
        <h3 className="text-lg text-blue-900 font-medium">{statTitle}</h3>
        <p className="text-2xl font-bold">{statValue.toLocaleString()}</p>
      </div>
      <p
        className={`mt-2 ml-2 flex items-center font-medium ${
          positive ? "text-green-500" : "text-red-500"
        }`}
      >
        <BsArrowUp />
        {statIncrement}+ more cases today
      </p>
    </article>
  );
};

export default StatsCard;
