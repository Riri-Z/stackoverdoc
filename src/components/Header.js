import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scss/custom.scss";
import logo from "../images/Vector.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="FckU">
          Never expand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="FckUnavbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="FckU">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="FckU">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="FckU"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="FckU"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="FckU">
                  Action
                </a>
                <a className="dropdown-item" href="FckU">
                  Another action
                </a>
                <a className="dropdown-item" href="FckU">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </nav>
      <div className="navbar navbar-dark bg-dark">
        <img src={logo} alt="logo" />
        <h1>StackOverDoc</h1>
      </div>
    </>
  );
}

export default Header;
