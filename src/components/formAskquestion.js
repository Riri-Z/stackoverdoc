import React, { useState } from 'react';
import '../styles/formAskQuestion.scss';
import Send from '../images/Send.png';
import Tag from "./tag";
import FormTag from "./formTag";

const FormAskquestion = () => {

  const [tags, setTag] = useState([]);

  const handleDelete = id => {
    const updatedTags = [...tags];
    const index = updatedTags.findIndex(tag => tag.id === id);

    updatedTags.splice(index, 1);

    setTag(updatedTags);
  };

  const handleAdd = tag => {
    const updatedTags = [...tags];
    updatedTags.push(tag);

    setTag(updatedTags);
  };

  return (
    <>
      <form>
        <div className="form-group AskFormContainer">
          <label for="exampleFormControlTextarea1">Ask your question :</label>
          <textarea className="form-control AskTextarea" rows="3" placeholder="I wonder if..."></textarea>
          <div>
        <ul>
          {tags.map(tag => (
            <Tag
              key={tag.id}
              details={tag}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <FormTag onTagAdd={handleAdd} />
      </div>
          <div className="AskButtonContainer">
            <button type="submit" class="btn mb-2 AskSubmit">
              {Send}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormAskquestion;