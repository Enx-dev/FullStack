import React from "react";

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td> {text}</td>
      <td>
        {value}
        {text === "Positive" ? "%" : ""}
      </td>
    </tr>
  );
}

export default StatisticLine;
