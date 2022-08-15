import React from "react";
import "./footer.scss";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="socials">
        <a href="https://linkedin.com/in/counsel-okpabi">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/OkpabiIcounsel">
          <FaTwitter />
        </a>
        <a href="https://github.com/Counsel19">
          <FaGithub />
        </a>
      </div>
      &copy; Okpabi Counsel 2022
    </div>
  );
};

export default Footer;
