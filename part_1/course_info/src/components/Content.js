import React from "react";
import Part from "./Part";

function Content({ parts, exercises }) {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} exercise={exercises[index]} />
      ))}
    </div>
  );
}

export default Content;
