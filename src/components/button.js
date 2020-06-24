import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      className="btn btn-primary"
      to={props.Link}
      onClick={props.handleClick}
    >
      {props.linkname}
    </Link>
  );
}

export default Button;
