import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about__container" id="about">
      <h2>My Story</h2>
      <div className="about__details">
        <div className="about__col">
          <p>
            I am Okpabi Counsel, a native of Cross River State, South-South
            Nigeria in West Africa. I am Computer science student of the Federal
            University of Technology in Imo state, Owerri (NG) (Aka FUTO). I
            have always drawn satisfaction from solving problems. No doubt the
            joy of Eureka!
          </p>
          <p>
            I started out with programming some years with C++. Wrote algorithms
            and corresponding implementations for a number of problems. I
            proceeded to programming arduino microchips during one of my
            internship trainings with Ardiono (a language written on C++). I
            then after in Python, which is a multipurpose programming language.
            I worked with a number of python libraries on personal projects and
            also programmed the raspberry pie using python.
          </p>
          <p>
            Thereafter I decided for full stack JavaScript web development. I
            then familiarized with web basics like HTML and CSS.
          </p>
        </div>
        <div className="about__col">
          <p>
            Had time to build a proper foundation in vanilla JavaScript, React
            and other web and server-side frameworks and libraries. I went
            further with working on a number of personal projects and some
            freelance. With this, I was able to consolidate my knowledge base
            and obtained real experience on development best practices and
            policies.
          </p>
          <p>
            I got an internship with Tech365 Services, where I was actively
            involved in using my skills to train, support and assist other
            younger developer and newbies and also assist fellow developers in
            solving some real world problems.There I was able to
          </p>
          <ul>
            <li>
              Develop proper team work and effective collaboration practices
            </li>
            <li>appropriate problem solving at a higher plane</li>
            <li>
              analysed business strategy and involvement in business decision
              making.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
