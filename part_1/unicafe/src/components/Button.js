import React from "react";

function Button({ text, action }) {
  return <button onClick={() => action()}>{text}</button>;
}

export default Button;
