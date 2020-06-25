import React from "react";
import "../styles/Footer.scss";
const coffeeMug = (
  <svg
    width="22px"
    height="22px"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="coffee"
    className="svg-inline--fa fa-coffee fa-w-20"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="currentColor"
      d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="double">
        <p className="content coffee-p">
          #WildHack20 : Code with{" "}
          <a
            href="https://www.youtube.com/watch?v=gy1B3agGNxw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer"
          >
            &nbsp;{coffeeMug}&nbsp;
          </a>
        </p>
        <p className="content">
          from{" "}
          <a
            className="link"
            href="https://www.wildcodeschool.com/fr-FR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Wild Code School</strong>
          </a>
        </p>
        <p className="content">
          associated with{" "}
          <a
            className="link"
            href="www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Doctolib </strong>
          </a>
          &
          <a
            className="link"
            href="https://www.dataiku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Dataiku</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
