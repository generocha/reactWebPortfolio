import React from "react";
import reactDom from "react-dom";
import "./styles/style.scss";

const App = () => {
  return <h1>Hello!!</h1>;
};

reactDom.render(<App />, document.getElementById("root"));
