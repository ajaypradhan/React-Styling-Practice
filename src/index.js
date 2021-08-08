//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const React = require("react");
const ReactDOM = require("react-dom");
const date = new Date();
const currentTime = date.getHours();
// console.log(currentTime);
let greeting;
const customStyle = {
  color: "red"
};

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
