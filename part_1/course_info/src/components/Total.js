import React from "react";

function Total({ exercises }) {
  return (
    <div>
      <p>
        Number of exercises: {exercises.reduce((curr, acc) => curr + acc, 0)}
      </p>
    </div>
  );
}

export default Total;
