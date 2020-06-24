import React from "react";
import { Link } from "react-router-dom";
import "../styles/scss/custom.scss";
function Button(props) {
  return (
    <Link className="" to={props.Link} onClick={props.handleClick}>
      {props.linkname}
    </Link>
  );
}

export default Button;
