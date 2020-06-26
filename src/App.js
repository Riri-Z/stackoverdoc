import React, { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/SignUp";
import Profil from "./pages/Profil";
import feed from "./pages/Feed";
import Header from "./components/Header";
import HeaderAut from "./components/HeaderAut";
import question_page from "./pages/Question_page";
import Footer from "./components/Footer";
import { AuthContext } from "./services/Auth";
import "./styles/App.scss";
import { AuthProvider } from "./services/Auth";
import PrivateRoute from "./services/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  /*   const { setCurrentUser } = useContext(AuthContext); */

  return (
    <AuthProvider>
      <div className="App">
        <Router>
        <Header />
        <HeaderAut /> 
          {/* {setCurrentUser ? <HeaderAut /> : <Header />} */}
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
};

export default App;
