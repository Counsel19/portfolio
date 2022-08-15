import React from "react";
import "./services.scss";
import { GiConfirmed } from "react-icons/gi";
import BackendImg from "../../images/back-end.svg";
import Frontend from "../../images/front-end.svg";
import Websitbuild from "../../images/website.svg";

const Services = () => {
  return (
    <div className="services__container" id="services">
      <h2>My Services</h2>
      <div className="service__wrapper w1">
        <div className="service__details ">
          <h4>Back End Development</h4>
          <p>
            I develop effective server side application with efficient data
            storage and retrieval of information. With NodeJs, ExpressJs and
            MongoDB, I offer an asynchronous, non-blocking server side
            application with prioritized security and easy to scale database.
          </p>
          <ul>
            <li>
              <GiConfirmed className="icon" /> Effective database design for
              effecient data storage and retrival
            </li>
            <li>
              <GiConfirmed className="icon" /> Server side applications with
              best practices and security features
            </li>
            <li>
              <GiConfirmed className="icon" /> Easy to use API enpoint with
              proper documentation
            </li>
          </ul>
        </div>
        <div className="service__img no1">
          <img src={BackendImg} alt="Backend" />
        </div>
      </div>

      <div className="service__wrapper w2">
        <div className="service__img no2">
          <img src={Frontend} alt="Frontend" />
        </div>
        <div className="service__details ">
          <h4>Front End Development</h4>
          <p>
            I build amazing client side interfaces which are in consonance with
            design principles and give enjoyable user experience. With my
            knowledge of user experience, using JavaScript libraries like
            ReactJs and NextJs I offer dynamic sites with seamless
            functionality.
          </p>
          <ul>
            <li>
              <GiConfirmed className="icon" /> User centered interface design
            </li>
            <li>
              <GiConfirmed className="icon" /> SEO Optimization with NextJs
            </li>
            <li>
              <GiConfirmed className="icon" /> Accessibility in consideration
            </li>
          </ul>
        </div>
      </div>

      <div className="service__wrapper w3">
        <div className="service__details ">
          <h4>Website Development with CMS</h4>
          <p>
            Rapid development of sites, blogs and other web applications using
            context Management system. With the popular WordPress which powers
            over 43.3% of all the websites on the Internet and headless CMS like
            Hygraph with industry leading performance, security and scalability.
          </p>
          <ul>
            <li>
              <GiConfirmed className="icon" /> Rapid App development with
              mentained efficiency
            </li>
            <li>
              <GiConfirmed className="icon" /> Application of best practices
            </li>
            <li>
              <GiConfirmed className="icon" /> Improved security
            </li>
          </ul>
        </div>
        <div className="service__img no3">
          <img src={Websitbuild} alt="Frontend" />
        </div>
      </div>
    </div>
  );
};

export default Services;
