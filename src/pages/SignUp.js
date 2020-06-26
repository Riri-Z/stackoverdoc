import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../services/base";
import FormSignUp from "../components/FormSignUp";
import picture from "../images/background2.png";
import "../styles/signup.scss";

const SignUp = ({ history }) => {
  
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="login-text">
          <h3>Create an account!</h3>
          <p>Start to collaborate with us</p>
        </div>
        <img src={picture} alt="doctor" />
        <div className="large-screen">
          <FormSignUp onSubmit={handleSignUp} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
