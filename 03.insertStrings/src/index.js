import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name + num}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
