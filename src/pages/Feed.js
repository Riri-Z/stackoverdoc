import React from "react";
import "../styles/Feed.scss";
import FormAskquestion from "../components/formAskquestion";
import QuestionList from "../components/questionList";

const Feed = () =>{
  return(
    <>
    <FormAskquestion/>
    <QuestionList/>
    </>
  );
};

export default Feed;