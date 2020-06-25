import React from "react";
import Question from "./question";

const questions = [
  {
    title: "My question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.....",
    author: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    answers: 30,
  },
  {
    title: "My question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.....",
    author: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    answers: 10,
  },
  {
    title: "My question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.....",
    author: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    answers: 0,
  },
  {
    title: "My question",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.....",
    author: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    answers: 20,
  },
];

const QuestionsList = () => (
  <>
    {questions.map((item) => (
      <Question
        title={item.title}
        avatar={item.avatar}
        author={item.author}
        text={item.text}
        answers={item.answers}
      />
    ))}
  </>
);

export default QuestionsList;
