import React from "react";
import Header from "./components/Header";
import "./styles/App.scss";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  )
}

export default App;
