import React from "react";

export class About extends React.Component {
  render() {
    return (
      // About me
      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">
          I am a Front End developer based in Seattle, WA
        </p>
        <div class="about-me__body">
          <p>
            In web design and development, I found the perfect outlet to utilize
            my attention to small details as well as my interest in being part
            of a team creating and developing clean and sophisticated code
            behind beautiful sites. I am fascinated with the speed technology
            changes; I am connected vias blogs & social media and yet I don’t
            feel too obsessed to be plugged in ALL the time. I enjoy both
            working on site and off, and love the flexibility and challenges of
            a career constantly moving.
          </p>
          <p>
            With a background including a career as a baker and an architectural
            photographer, I have always had a passion for design and an
            attention to details, no matter how small. Born in Pomona, CA, I
            slowly moved north over the years, attracted to the wilderness,
            fresh air and city life. When I am not knee deep in code, I can be
            found hiking, camping, appreciating some local mirco brews or
            getting my passport stamped by a gruff looking guard who speaks
            little English. I enjoy music, films, and photography as well as
            just relaxing and watching the game.
          </p>
        </div>
        <img src="images/generocha_white_shirt.jpeg" class="about-me__img" />
      </section>
    );
  }
}
