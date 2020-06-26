import React, { useContext, useCallback } from "react";
import FormLogin from "../components/FormLogin.js";
import Picture from "../images/background2.png";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../services/Auth.js";
import app from "../services/base";
import "../styles/login.scss";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    window.alert("you are already connected");
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="log-container">
        <div className="form-container">
          <div className="login-text">
            <h3>Connect you to your account!</h3>
            <p>Start to collaborate with us</p>
          </div>
        </div>
        <img id="nurse" src={Picture} alt="doctor" />
        <div className="large-screen">
          <FormLogin onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
