import React, { useState } from "react";
import '../styles/formAskQuestion.scss';

const FormTag = ({onTagAdd}) => {
  const [newTag, setnewTag] = useState('');

  const handleChange = event => {
    setnewTag(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const name = newTag;

    onTagAdd({ id, name });

    setnewTag('');
  };

    return (
      <div onSubmit={handleSubmit}>
        <input
          className='InputTag'
          value={newTag}
          onChange={handleChange}
          type="text"
          placeholder="Add a tag"
        />
        <button className='AddTagButton'>+</button>
      </div>
    );
  };

export default FormTag;