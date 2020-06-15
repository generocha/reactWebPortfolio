import React from "react";
import reactDom from "react-dom";

const template = React.createElement("h1", null, "Hello World");

reactDom.render(template, document.getElementById("root"));
