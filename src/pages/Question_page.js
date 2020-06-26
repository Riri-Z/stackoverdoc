import React /* useState  */ from "react";
import "../styles/Qpages.scss";
import questionfile from "./questionsfile";
const Qpages = (props) => {
  const id = parseInt(props.match.params.id);
  console.log(id);

  /* const [tags, setTag] = useState([]);
  const handleDelete = (id) => {
    const updatedTags = [...tags];
    const index = updatedTags.findIndex((tag) => tag.id === id);
    updatedTags.splice(index, 1);
    setTag(updatedTags);
  }; */

  let question = questionfile.filter((i) => i.id === id)[0];
  console.log(question);
  let answers = question.answers.map((i, index) => (
    <div key={i.index} className="TopAnswer">
      <span className="Vote">
        <i className="icon-caret-up" />
        <p className="nbrVote">100</p>
        <i className="icon-caret-down" />
      </span>

      <p className="CorpsAnswer">
        <p className="AnswerAuthor">{i.author} </p>
        {i.content}
      </p>
    </div>
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
