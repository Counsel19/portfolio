import React from "react";
import "./skills.scss";
import HTML from "../../images/html-5.png";
import CSS from "../../images/css-3.png";
import JS from "../../images/js.png";
import Python from "../../images/python.png";
import Sass from "../../images/t_sass.jpg";
import Tailwind from "../../images/Tailwind.png";
import WordPress from "../../images/wordpress.png";
import Git from "../../images/github.png";
import Bootstrap from "../../images/bootstrap.png";
import MUI from "../../images/mui.png";
import ReactJs from "../../images/react.png";
import NextJs from "../../images/Nextjs.png";
import NodeJs from "../../images/node-js.png";
import MongoDB from "../../images/mongoDB.png";
import Firebase from "../../images/firebase.png";
import GraphCMS from "../../images/graphcms.svg"

const Skills = () => {
  return (
    <div className="skills__container" id="skills">
      <div className="skills__wrapper">
        <h2 className="section__heading">My Skills</h2>
        <div className="skills__details">
          <div className="skill__item">
            <h3>Web Basics</h3>
            <ul>
              <li>
                <img src={HTML} alt="HTML" /> HTML
              </li>
              <li>
                <img src={CSS} alt="CSS" /> CSS
              </li>
            </ul>
          </div>
          <div className="skill__item">
            <h3>Languages</h3>
            <ul>
              <li>
                <img src={JS} alt="JS" />
                Javascript
              </li>
              <li>
                <img src={Python} alt="Python" />
                Python
              </li>
            </ul>
          </div>
          <div className="skill__item">
            <h3>Content Management System</h3>
            <ul>
              <li>
                
                <img src={GraphCMS} alt="" />
                GraphCMS (Headless CMS)
              </li>
              <li>
                <img src={WordPress} alt="WordPress" />
                WordPress
              </li>
            </ul>
          </div>
          <div className="skill__item">
            <h3>Web Framework | Libraries</h3>
            <ul>
              <li>
                <img src={ReactJs} alt="ReactJs" />
                ReactJS
              </li>
              <li>
                <img src={NextJs} alt="NextJs" />
                NextJS
              </li>
              <li>
                <img src={NodeJs} alt="NodeJs" />
                ExpressJs and NodeJs
              </li>
            </ul>
          </div>
          <div className="skill__item">
            <h3>Styling Frameworks | Libraries</h3>
            <ul>
              <li>
                <img src={Bootstrap} alt="Bootstrap" />
                Bootstrap
              </li>
              <li>
                <img src={Tailwind} alt="Tailwind" />
                Tailwind
              </li>
              <li>
                <img src={MUI} alt="MUI" />
                Material UI
              </li>
              <li>
                <img src={Sass} alt="Sass" />
                Sass
              </li>
            </ul>
          </div>

          <div className="skill__item">
            <h3>Database | Continous Integration</h3>
            <ul>
              <li>
                <img src={MongoDB} alt="MongoDB" />
                MongoDB (Mongoose)
              </li>
              <li>
                <img src={Firebase} alt="Fire" />
                Firebase
              </li>
              <li>
                <img src={Git} alt="Git" />
                Git | Github
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
