import React from 'react';
import '../styles/form.scss'
import { NavLink } from "react-router-dom";

const FormLogin = () => {
    return (
        <form>
            <div className='form'>
                <div className='bio'>  
                    <i className='icon-menu_book'/>                  
                    <div className='bioInput'>
                        <label>Bio</label>
                        <textarea placeholder='I m an awesome doctor ...'></textarea>
                    </div>
                </div>
                <div className='username'>   
                <i className='icon-person_outline'/>                 
                    <div className='usernameInput'>
                        <label>Username</label>
                        <input placeholder='John Doe'></input>
                    </div>
                </div>
                <div className='mail'>
                <i className='icon-alternate_email'/>                   
                    <div className='mailInput'>
                        <label>Email</label>
                        <input placeholder='me@doctor.com'></input>
                    </div>
                </div>
                <div className='password'>
                <i className='icon-lock_outline'/>
                    <div className='passwordInput'>
                        <label>Password</label>
                        <input placeholder='******'></input>
                    </div>
                    <i className='icon-remove_red_eye'/>
                </div>
                <div className='specialisation'>
                <i className='icon-medicine'/>
                    <div className='specialisationInput'>
                        <label>Your specialisation</label>
                        <input placeholder='Dental surgery...'></input>
                    </div>
                </div>
                <div className='buttons'>
                  <button className='btn btn-primary sd-btn one' type='submit'>Login</button>
                  <a href='mettreunlien'>Forgot password ?</a>
                  <button className='btn btn-outline-primary' type='submit'><NavLink to="/login" >Sign up</NavLink></button>
                </div> 
            </div>
        </form>
    )
    
}

export default FormLogin;
