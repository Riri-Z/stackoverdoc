import React from "react";
import { Link } from "react-router-dom";
import "../styles/formAskQuestion.scss";

const Question = (props) => {
  console.log("ok")
  return (
    <>
     
      <div className="globalQuestionContainer">
        <div className="questionHeadContainer">
          <h1 className="QuestionTitle">{props.title}</h1>
          <div>
            <img src={props.avatar} alt={props.author} className="avatar" />
            <p className="answersNumber">from : {props.author}</p>
          </div>
        </div>
        <p className="questionText">{props.text}</p>
        <div className="globalAnswerContainer">
          <p className="answersNumber">Answers: {props.answers}</p>
          <Link  className="btn ViewMoreButton" to={`/question/${props.id}`}>View more</Link>
        </div>
      </div>
    </>
  );
};

export default Question;
