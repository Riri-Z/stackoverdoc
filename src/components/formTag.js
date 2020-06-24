import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <input
          value={newTag}
          onChange={handleChange}
          type="text"
          placeholder="Add a tag"
        />
        <button>Submit</button>
      </form>
    );
  };

export default FormTag;