import React from "react";
import reactDom from "react-dom";
import "../styles/style.scss";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Skill } from "./components/Skill";
import { About } from "./components/About";

const App = () => {
  return (
    <div>
      <header>
        <div class="logo">
          <img src="images/gene_rocha_logoV2.svg" />
        </div>
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <Header />
      </header>
      <Home />
      <Skill />
      <About />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
