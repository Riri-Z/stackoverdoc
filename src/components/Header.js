import React from "react";
import logo from "../images/TitleLogo.png";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <nav className="_sd-navbar">
        <a className="_sd-navbar-brand" href="sof">
          <img src={logo} alt="stackoverdoc" />
        </a>
        <ul className="_sd-navbar-menu">
          <li>
            <a href="fdhy" className="btn btn-primary sd-btn">
              Sign Up
            </a>
          </li>
          <li>
            <a href="fdhy">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
