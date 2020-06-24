import React from "react";

const Tag = ({ details, onDelete }) => (
  <>
    <button onClick={() => onDelete(details.id)}>{details.name}</button>
  </>
);

export default Tag;