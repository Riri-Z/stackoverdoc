import React from "react";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
