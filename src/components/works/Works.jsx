import React from "react";
import "./works.scss";
import BAttendance from "../../images/bmetric.png";
import Book4me from "../../images/book4me.png";
import Jobify from "../../images/jobify.png";
import Nextflix from "../../images/netflix.png";
import Amazon from "../../images/amazon.png";
import Instagram from "../../images/instagram.png";

const Works = () => {
  return (
    <div className="works__container" id="works">
      <h2 className="section__heading">My Works</h2>
      <div className="work__items">
        <div className="work__item">
          <a
            href="https://biometricattendance.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={BAttendance} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>Fingerprint Biometric Attendace Application</h3>
            </div>
          </a>
        </div>
        <div className="work__item">
          <a href="book4meapp.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={Book4me} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>A Booking Application</h3>
            </div>
          </a>
        </div>
        <div className="work__item">
          <a
            href="https://job-traking.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Jobify} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>A Job Management Application</h3>
            </div>
          </a>
        </div>
        <div className="work__item">
          <a
            href="https://netflix-6b775.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Nextflix} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>A Netflix clone</h3>
            </div>
          </a>
        </div>
        <div className="work__item">
          <a
            href="https://clone-ffe04.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Amazon} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>An Amazon Clone</h3>
            </div>
          </a>
        </div>
        <div className="work__item">
          <a
            href="https://instagram-fef8e.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Biometric Attendance" />
            <div className="work__overlay">
              <h3>An Instagram Clone</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
