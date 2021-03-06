import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">
              My Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              About me
            </a>
          </li>
          <li class="nav__item">
            <a href="#work" class="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
