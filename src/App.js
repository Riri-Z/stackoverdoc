import React from "react";
import Header from "./components/Header";
import FormAskQuestion from "./components/formAskquestion";
import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <FormAskQuestion />
    </div>
  );
}

export default App;
