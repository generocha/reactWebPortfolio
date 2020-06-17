import React from "react";
import reactDom from "react-dom";
import "../styles/style.scss";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

const App = () => {
  return (
    <div>
      <header>
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <Header />
      </header>
      <Home />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
