import React from "react";
import SignUp from "./pages/Sign-up";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
    </div>
  )
}

export default App;
