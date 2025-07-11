//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {};

const currentHours = new Date().getHours();
let message = "";

if (currentHours >= 0 && currentHours < 12) {
  message = "Good morning!";
  customStyle.color = "red";
} else if (currentHours >= 12 && currentHours < 16) {
  customStyle = "Good afternoon!";
  customStyle.color = "green";
} else {
  message = "Good evening!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{message}</h1>
  </div>,
  document.getElementById("root")
);
