import React, { useState } from "react";

const Answer = (props) => {
  const [rating, setRating] = useState(props.rating);
  return (
    <div className="TopAnswer">
      <span className="Vote">
        <i className="icon-caret-up" onClick={() => setRating(rating + 1)} />
        <p className="nbrVote">{rating}</p>
        <i className="icon-caret-down" onClick={() => setRating(rating - 1)} />
      </span>

      <p className="CorpsAnswer">
        <p className="AnswerAuthor">{props.author} </p>
        {props.content}
      </p>
    </div>
  );
};

export default Answer;
