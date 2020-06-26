import React from "react";
import "../styles/Feed.scss";
import FormAskquestion from "../components/formAskquestion";
import QuestionList from "../components/questionList";


const Feed = () => {
  return (
    <main>
        <FormAskquestion /* onSubmit={handleSubmit} *//>
        <QuestionList />
    </main>
  );
};

export default Feed;
