import React, { useContext } from "react";
import "../styles/form.scss";
import Button from "./Button";
import { AuthContext } from "../services/Auth";
const FormProfil = () => {
  const currentUserUid = useContext(AuthContext);
  console.log(currentUserUid.currentUser.uid);
  return (
    <>
      <form className="_sd-form">
        <div className="_sd-avatar">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="avatar"
          />
        </div>
        <div className="bio">
          <i className="icon-menu_book"></i>
          <div className="bioInput">
            <label htmlFor="bio">Bio</label>
            <textarea
              placeholder="I m an awesome doctor ..."
              name="bio"
            ></textarea>
          </div>
        </div>
        <div className="username">
          <i className="icon-person_outline"></i>
          <div className="usernameInput">
            <label htmlFor="username">Username</label>
            <input placeholder="John Doe" type="text"></input>
          </div>
        </div>
        <div className="mail">
          <i className="icon-alternate_email"></i>
          <div className="mailInput">
            <label htmlFor="email">Email</label>
            <input
              placeholder="me@doctor.com"
              type="email"
              name="email"
            ></input>
          </div>
        </div>
        <div className="password">
          <i className="icon-lock_outline"></i>
          <div className="passwordInput">
            <label htmlFor="password">Password</label>
            <input placeholder="******" type="password" name="password"></input>
          </div>
        </div>
        <div className="specialisation">
          <i className="icon-health"></i>
          <div className="specialisationInput">
            <label htmlFor="special">Your specialisation</label>
            <input
              placeholder="Dental surgery..."
              type="text"
              name="special"
            ></input>
          </div>
        </div>
        <Button type="submit">Apply</Button>
      </form>
      <div className="_sd-blue"></div>
    </>
  );
};

export default FormProfil;
