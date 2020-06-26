import React from "react";

const FormAnswer = () => {
  return (
    <div className="AreaAnswer">
      <form className="form-group AskFormContainer">
        <label for="AskTitle" className="AskTitle">
          Ask your question :
        </label>
        <textarea
          className="form-control AskTextarea"
          rows="3"
          placeholder="I wonder if..."
        ></textarea>
        <div className="QuestionContainer"></div>
        <button type="submit" className="btn mb-2 AskSubmit">
          <i className="icon-send"></i>
        </button>
      </form>
    </div>
  );
};
export default FormAnswer;
