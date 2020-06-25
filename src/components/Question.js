import React from "react";
import "../styles/formAskQuestion.scss";

const Question = (props) =>{
  return(
    <>
      <h1>{props.title}</h1>
        <img src={props.imageUrl} alt={props.name} />
        <p>from : {props.text}</p>   
        <p>{props.text}</p>
        <p>{props.answers}</p> 
        <button className='ViewMoreButton'>View more</button>
    </>
  );
};

export default Question;