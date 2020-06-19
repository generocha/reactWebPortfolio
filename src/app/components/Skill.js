import React from "react";

export class Skill extends React.Component {
  render() {
    return (
      //  My skills
      <section class="my-skills" id="skills">
        <h2 class="section__title--skills" id="skills">
          My Skills
        </h2>
        <div class="skills">
          <div class="skill">
            <h3>Design & Development</h3>
            <p>
              Design: to create, fashion, execute, or construct according to
              plan. A well-designed project blends the communication needs of
              the client with the aesthetics. I enjoy working with designers to
              build their mock ups into live websites. Successful design takes
              complex information and presents it in a clear manner, or can take
              simple information and elevate its elegance.{" "}
            </p>
          </div>
          {/* end skill */}
          <div class="skill">
            <h3>Databases</h3>
            <p>
              Database: : a usually large collection of data organized
              especially for rapid search and retrieval (as by a computer) I
              enjoy working with data, with information, charts and graphs to
              create organization and hierarchy of information in a way that is
              easy for the viewer to understand.{" "}
            </p>
          </div>
          {/* end skill */}
          <div class="skill">
            <h3>CMS</h3>
            <p>
              I enjoy working with a Content Managment System to manage web
              content, and it can make developing and maintaining a website much
              easier. C onsistency in visual language is a cornerstone of any
              successful project-based design. Working with Wordpress and
              Expression Engine{" "}
            </p>
          </div>
          {/* end skill */}
        </div>
        {/* end skills */}
      </section>
    );
  }
}
