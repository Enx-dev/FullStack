import React from "react";

function Content({ parts, exercises }) {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>
          {part} {exercises[index]}
        </p>
      ))}
    </div>
  );
}

export default Content;
