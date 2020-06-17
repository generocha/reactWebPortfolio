import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <a href="mailto:gene@generocha.com" class="footer__link">
          gene@generocha.com
        </a>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com/generocha">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.linkedin.com/in/generocha/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.instagram.com/generocha/"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
