import React from "react";
import "../styles/Header.scss";
import logo from "../images/whiteTitleLogo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="sof">
          <img src={logo} alt="stackoverdoc" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="sofnavbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="sof">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sof">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="sof"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="sof"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="sof">
                  Action
                </a>
                <a className="dropdown-item" href="sof">
                  Another action
                </a>
                <a className="dropdown-item" href="sof">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
