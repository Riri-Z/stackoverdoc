import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/SignUp";
import Profil from "./pages/Profil";
import feed from "./pages/Feed";
import Header from "./components/Header";
import question_page from "./pages/Question_page";
import Footer from "./components/Footer";
import "./styles/App.scss";
import { AuthProvider } from "./services/Auth";
import PrivateRoute from "./services/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AuthProvider>
        <div className="App">       
        <Router>
          <Header />         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Sign_up} />
            <PrivateRoute path="/profile" component={Profil} />
            <PrivateRoute path="/feed" component={feed} />
            <PrivateRoute path="/question" component={question_page} />
          </Switch>
          <Footer />  
        </Router>             
        </div>
      </AuthProvider>      
    );
  }

}

export default App;
