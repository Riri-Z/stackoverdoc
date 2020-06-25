import Header from "../components/Header";
import React, { useState } from "react";
import "../styles/Qpages.scss";
import Tag from "../components/tag";

const Qpages = () => {
  const [tags, setTag] = useState([]);

  const handleDelete = (id) => {
    const updatedTags = [...tags];
    const index = updatedTags.findIndex((tag) => tag.id === id);

    updatedTags.splice(index, 1);

    setTag(updatedTags);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="Corps">
        <div className="Question"></div>
        <h1>Question title</h1>
        <p>
          Butterfingers. You can spend the rest of your life with me, but I
          can't spend the rest of mine with you. I have to live on. Alone. Do
          you want a jelly baby? Don't be sad Grace. You'll do great things.
          Jamie, remind me to give you a lesson in tying knots, sometime. This
          thing is smaller on the inside than it is on the outside. Life depends
          on change and renewal. My ship…my TARDIS… Oh my word! Dreams are
          important…never underestimate them. I am the Doctor! The original, you
          might say! Oh I'm so sorry, Jamie. Would you like a jelly baby?
          Goodbye...{" "}
        </p>

        <div className="TopAnswer">
          <span className="Vote">
            <i className="icon-caret-up" />
            <p className="nbrVote">100</p>
            <i className="icon-caret-down" />
          </span>
          <p className="CorpsAnswer">
            Butterfingers. You can spend the rest of your life with me, but I
            can't spend the rest of mine with you. I have to live on. Alone. Do
            you want a jelly baby? Don't be sad Grace. You'll do great things.
            Jamie, remind me to give you a lesson in tying knots, sometime.{" "}
          </p>
        </div>
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
      </div>
    </>
  );
};

export default Qpages;
