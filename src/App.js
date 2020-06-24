import React, { Component } from "react";
import Home from "./pages/Home";
import "./styles/App.scss";
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
            <Route exact path="/" component={Home} />
            <Route path="/login" />
            <Route path="/Sign-up" />
            <Route path="/Profile-page" />
            <Route path="/feed-page" />
            <Route path="/question-page" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
