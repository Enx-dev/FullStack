import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad, all, average, positive }) {
  return (
    <div>
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />

            {!isNaN(average) && (
              <StatisticLine text="Average" value={average} />
            )}
            {!isNaN(positive) && (
              <StatisticLine text="Positive" value={positive} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Statistics;
