import React from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";

const FormSignUp = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='form'>
        <div className='mail'>
          <i className='icon-alternate_email' />
          <div className='mailInput'>
            <label htmlFor='email'>Email</label>
            <input
              placeholder='me@doctor.com'
              type='email'
              name='email'></input>
          </div>
        </div>
        <div className='password'>
          <i className='icon-lock_outline' />
          <div className='passwordInput'>
            <label htmlFor='password'>Password</label>
            <input placeholder='******' type='password' name='password'></input>
          </div>
          <i className='icon-remove_red_eye' />
        </div>
        <div className='specialisation'>
          <i className='icon-medicine' />
          <div className='specialisationInput'>
            <label>Your specialisation</label>
            <input placeholder='Dental surgery...'></input>
          </div>
        </div>
        <div className='buttons'>
          <button className='btn btn-primary sd-btn one' type='submit'>
            Sign Up
          </button>
          <button className='btn btn-outline-primary'>
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSignUp;
