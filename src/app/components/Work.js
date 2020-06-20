import React from "react";

export class Work extends React.Component {
  render() {
    return (
      // My Work
      <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My Work</h2>
        <p class="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>
        <div class="portfolio">
          <div class="portoflio__item">
            <img
              class="portfolio__img"
              src="images/2020_garden.png"
              alt="Card image cap/"
            />
            <div class="card-body">
              <h3 class="card-title">2020 Garden</h3>
              <p class="card-text">2020 Garden bar chat built with D3.</p>
              <a
                href="https://github.com/generocha/2020Garden"
                class="btn btn-primary"
              >
                github
              </a>
              <a
                href="http://www.generocha.com/2020Garden/"
                class="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div class="portoflio__item">
            <img
              class="portfolio__img"
              src="images/google_maps_breweries.png"
              alt="Card image cap/"
            />
            <div class="card-body">
              <h5 class="card-title">
                Custom Google Map of my favorite Breweries
              </h5>
              <p class="card-text">
                This is a custom Google Map built with the Google Maps API and
                Google Sheets API.
              </p>
              <a
                href="https://github.com/generocha/favoriteBreweriesMap"
                class="btn btn-primary"
                target="_blank"
              >
                github
              </a>
              <a
                href="http://www.generocha.com/favoriteBreweriesMap/"
                class="btn btn-primary"
                target="_blank"
              >
                live demo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
