import React, { useState, useEffect } from "react";
import logo from "../images/TitleLogo.png";
import whiteLogo from "../images/whiteTitleLogo.png";
import ellipse from "../images/ellipse.png";
import shape from "../images/shape.png";
import "../styles/Header.scss";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setIsHome(false);
    }
  }, [isHome]);

  return (
    <header className="top-nav">
      {isHome && (
        <picture alt='blue background' className='_sd-blue-ellipse'>
          <source srcSet={shape} media='(min-width: 768px)' />
          <img
            src={ellipse}
            alt='blue background'
            className='_sd-blue-ellipse'
          />
        </picture>
      )}
      <nav className='_sd-navbar'>
        <a className='_sd-navbar-brand' href='sof'>
          <img src={isHome ? whiteLogo : logo} alt='stackoverdoc' />
        </a>
        <ul
          className={navOpened ? "_sd-navbar-menu opened" : "_sd-navbar-menu"}>
          <li>
            <a href='fdhy' className='btn btn-primary sd-btn'>
              Sign Up
            </a>
          </li>
          <li>
            <a
              href='fdhy'
              className={isHome ? (navOpened ? "" : "_sd-white") : ""}>
              Login
            </a>
          </li>
        </ul>
        {navOpened && (
          <div
            className='sd-overlay'
            onClick={() => setNavOpened(!navOpened)}
          />
        )}
        <i
          className={isHome ? "icon-menu _sd-white" : "icon-menu"}
          onClick={() => setNavOpened(!navOpened)}></i>
      </nav>
    </header>
  );
};

export default Header;
