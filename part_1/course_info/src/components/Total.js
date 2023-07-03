import React from "react";

function Total({ parts }) {
  function Sum(a, b, c) {
    return a + b + c;
  }
  return (
    <div>
      <p>
        Number of exercises:
        {Sum(parts[0].exercises, parts[1].exercises, parts[2].exercises)}
      </p>
    </div>
  );
}

export default Total;
