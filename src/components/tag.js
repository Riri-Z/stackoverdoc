import React from "react";
import "../styles/formAskQuestion.scss";

const Tag = ({ details, onDelete }) => (
  <>
    <button className="Tagbutton" onClick={() => onDelete(details.id)}>
      {details.name}
    </button>
  </>
);

export default Tag;
