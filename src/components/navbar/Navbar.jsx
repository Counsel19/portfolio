import React, { useState } from "react";
import "./navbar.scss";
import Emoji from "../../images/emoji.png";
import Scrollspy from "react-scrollspy";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setBackground = () => {
    if (window.scrollY > 350) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  window.addEventListener("scroll", setBackground);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nav__container  ${changeNav && "adjustedNav"} `}>
      <div className="nav__content">
        <div className="nav__brand">
          <img src={Emoji} alt="brand-logo" />
          <span>okpabi counsel</span>
        </div>

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

        <div className="nav__links">
          <ul>
            <Scrollspy
              items={["works", "skills", "about", "services", "contact"]}
              currentClassName="active"
            >
              <li>
                <a href="#works">works</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#about">about me</a>
              </li>
              <li>
                <a href="#services">My services</a>
              </li>
              <li>
                <a href="#contact">contact me</a>
              </li>
            </Scrollspy>
          </ul>
        </div>
        <HiOutlineMenu className="menu__icon" onClick={toggleMobileNav} />
        {isOpen && (
          <div className="mobile__nav">
            <div className="mobile__navLinks">
              <GrClose className="close__btn" onClick={toggleMobileNav} />
              <ul>
                <Scrollspy
                  items={["works", "skills", "about", "services", "contact"]}
                  currentClassName="active"
                >
                  <li>
                    <a href="#works">works</a>
                  </li>
                  <li>
                    <a href="#skills">skills</a>
                  </li>
                  <li>
                    <a href="#about">about me</a>
                  </li>
                  <li>
                    <a href="#services">My services</a>
                  </li>
                  <li>
                    <a href="#contact">contact me</a>
                  </li>
                </Scrollspy>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
