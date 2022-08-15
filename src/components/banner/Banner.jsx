import React from "react";
import ImageProfile from "../../images/photo.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        <div className="banner__details">
          <h4>Full Stack Web Developer</h4>
          <p>
            A purpose driven and solution oriented software developer with
            appreciable experience in software development. Looking forward to
            apply my experience to help build efficient software that meets your
            expectation and satisfaction.
          </p>

          <h5>
            Lets give you <span>that unique website for your</span>{" "}
            business&gt;&gt;&gt;
          </h5>

          <div className="call__toAction">
            <button>
              <a href="#contact">Contact me</a>
            </button>
            <button className="resume">
              <a href="https://drive.google.com/file/d/1WGy2eu7rVuDhvxNXsSdrt9dSuDnSNCeJ/view?usp=sharing">
                View Resume
              </a>
            </button>
          </div>
        </div>

        <div className="banner__img">
          <img src={ImageProfile} alt="Okpabi Counsel" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
