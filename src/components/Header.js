import React from "react";
import logo from "../images/TitleLogo.png";
import "../styles/Header.scss";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <>
      <nav className="_sd-navbar">
        <a className="_sd-navbar-brand" href="sof">
          <img src={logo} alt="stackoverdoc" />
        </a>
        <ul
          className={navOpened ? "_sd-navbar-menu opened" : "_sd-navbar-menu"}
        >
          <li>
            <a href="fdhy" className="btn btn-primary sd-btn">
              Sign Up
            </a>
          </li>
          <li>
            <a href="fdhy">Login</a>
          </li>
        </ul>
        {navOpened && (
          <div
            className="sd-overlay"
            onClick={() => setNavOpened(!navOpened)}
          />
        )}
        <i className="icon-menu" onClick={() => setNavOpened(!navOpened)}></i>
      </nav>
    </>
  );
};

export default Header;
