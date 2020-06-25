import React from "react";
import "../styles/formAskQuestion.scss";

const Question = (props) =>{
  return(
    <div className='globalQuestionContainer'>
      <div className='questionHeadContainer'>
        <h1 className='QuestionTitle'>{props.title}</h1>
          <div>
            <img src={props.avatar} alt={props.author} className='avatar'/>
            <p className='answersNumber'>from : {props.author}</p>
          </div>   
      </div> 
        <p>{props.text}</p>
      <div className='globalAnswerContainer'>
        <p className='answersNumber'>Answers: {props.answers}</p> 
        <button className='btn ViewMoreButton'>View more</button>
      </div>
    </div>
  );
};

export default Question;