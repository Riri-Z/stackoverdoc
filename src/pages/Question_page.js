import React, { useState } from "react";
import Answer from "../components/Answer";
import "../styles/Qpages.scss";
import questionfile from "./questionsfile";
const Qpages = (props) => {
  const id = parseInt(props.match.params.id);
  console.log(id);
  

  let question = questionfile.filter((i) => i.id === id)[0];
  console.log(question);
  let answers = question.answers.map((i, index) => (
    <Answer key={i.index} {...i} />
  ));
  console.log(question.answers);
  return (
    <main className="q-page">
      <div className="Corps">
        <div className="Question"></div>
        <h1>{question.title}</h1>
        <p>{question.text}</p>
        {answers}

        <div className="AreaAnswer">
          <form className="form-group AskFormContainer">
            <label htmlFor="AskTitle" className="AskTitle">
              Tell your answer :
            </label>
            <textarea
              className="form-control AskTextarea"
              rows="3"
              placeholder="You should ..."
            ></textarea>
            <div className="QuestionContainer"></div>
            <button type="submit" className="btn mb-2 AskSubmit">
              <i className="icon-send"></i>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Qpages;
