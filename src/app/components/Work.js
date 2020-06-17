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
          {/* Portfolio item 01 */}
          <a href="portfolio-item.html" class="portfolio__item">
            <p>test1</p>
            <img src="" alt="" class="portfolio__img" />
          </a>
        </div>
      </section>
    );
  }
}
