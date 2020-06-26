import React, { useContext } from "react";
import Question from "./question";
import { AuthContext } from "../services/Auth";
import questionsfile from "../pages/questionsfile";

const QuestionsList = () => {
  // const [questions, setQuestions] = useState(questionsfile);
  // console.log(questions)
  const currentUserUid = useContext(AuthContext);
  console.log(currentUserUid.currentUser.uid);

  let list = questionsfile.map((item) => (
    <Question
      key={item.id}
      id={item.id}
      title={item.title}
      avatar={item.avatar}
      author={item.author}
      text={item.text}
      answers={item.answers}
    />
  ));
  return <>{list}</>;
};

export default QuestionsList;
