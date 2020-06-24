import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
