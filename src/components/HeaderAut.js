import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Redirect } from "react-router";
import logo from "../images/TitleLogo.png";
import whiteLogo from "../images/whiteTitleLogo.png";
import ellipse from "../images/ellipse.png";
import shape from "../images/shape.png";
import "../styles/Header.scss";
import app from "../services/base";
import "../styles/Header.scss";
import Button from "./Button";

const Header = (props) => {
  const location = useLocation().pathname.substr(0);
  const [navOpened, setNavOpened] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (location !== "/") {
      setIsHome(false);
    }
  }, [location]);

  const disconnect = () => {
    window.alert("you are disconnected");
    return <Redirect to="/" />;
  };

  return (
    <header className="top-nav">
      {isHome && (
        <picture alt="blue background" className="_sd-blue-ellipse">
          <source srcSet={shape} media="(min-width: 768px)" />
          <img
            src={ellipse}
            alt="blue background"
            className="_sd-blue-ellipse"
          />
        </picture>
      )}
      <nav className="_sd-navbar">
        <NavLink exact to="/" className="_sd-navbar-brand" href="sof">
          <img src={isHome ? whiteLogo : logo} alt="stackoverdoc" />
        </NavLink>
        <ul
          className={navOpened ? "_sd-navbar-menu opened" : "_sd-navbar-menu"}
        >
          <li>
            <NavLink
              exact
              to="/feed"
              className={isHome ? (navOpened ? "" : "_sd-white") : ""}
            >
              Frequently asked questions
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/profile"
              className={isHome ? (navOpened ? "" : "_sd-white") : ""}
            >
              Your profil
            </NavLink>
          </li>
          <li>
            <Button
              className="btn-signOut"
              onClick={() => app.auth().signOut().then(disconnect())}
            >
              Sign out
            </Button>
          </li>
        </ul>
        {navOpened && (
          <div
            className="sd-overlay"
            onClick={() => setNavOpened(!navOpened)}
          />
        )}
        <i
          className={isHome ? "icon-menu _sd-white" : "icon-menu"}
          onClick={() => setNavOpened(!navOpened)}
        ></i>
      </nav>
    </header>
  );
};

export default Header;
