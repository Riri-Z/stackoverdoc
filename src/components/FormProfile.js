import React from "react";
import "../styles/form.scss";

const FormProfil = () => {
  return (
    <>
      <form className='_sd-form'>
        <div className='_sd-avatar'>
          <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />
        </div>
        <div className='bio'>
          <i className='icon-menu_book'></i>
          <div className='bioInput'>
            <label>Bio</label>
            <textarea placeholder='I m an awesome doctor ...'></textarea>
          </div>
        </div>
        <div className='username'>
          <i className='icon-person_outline'></i>
          <div className='usernameInput'>
            <label>Username</label>
            <input placeholder='John Doe'></input>
          </div>
        </div>
        <div className='mail'>
          <i className='icon-alternate_email'></i>
          <div className='mailInput'>
            <label>Email</label>
            <input placeholder='me@doctor.com'></input>
          </div>
        </div>
        <div className='password'>
          <i className='icon-lock_outline'></i>
          <div className='passwordInput'>
            <label>Password</label>
            <input placeholder='******'></input>
          </div>
        </div>
        <div className='specialisation'>
          <i className='icon-health'></i>
          <div className='specialisationInput'>
            <label>Your specialisation</label>
            <input placeholder='Dental surgery...'></input>
          </div>
        </div>
      </form>
      <div className='_sd-blue'></div>
    </>
  );
};

export default FormProfil;
