import React, { useState, useContext } from "react";
import Question from "./question";
import { useEffect } from "react";
import fb from "../services/base";
import { AuthContext } from "../services/Auth";
import questionsfile from '../pages/questionsfile';

const QuestionsList = () => {
  // const [questions, setQuestions] = useState(questionsfile);
  // console.log(questions)
  const currentUserUid = useContext(AuthContext);
  console.log(currentUserUid.currentUser.uid);
  // useEffect(() => {
  //   const unsubscribe = fb
  //     .firestore()
  //     .collection("questions")
  //     .onSnapshot((s) => {
  //       setQuestions(
  //         s.docs.map((question) => {
  //           return { id: question.id, ...question.data() };
  //         })
  //       );
  //     });

  //   return () => unsubscribe();
  // }, []);

  let list = questionsfile.map(
    (item) => <Question
          id={item.id }
          title={item.title}
          avatar={item.avatar}
          author={item.author}
          text={item.text}
          answers={item.answers}
        />   
  )
  return (
    <>
      {list}
    </>
  );
};

export default QuestionsList;

{/* currentUserUid.currentUser.uid === item.user_uid && */}