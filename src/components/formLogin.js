import React from 'react';
import logomail from '../images/LogoMail.png';
import username from '../images/LogoUsername.png'
import password from '../images/LogoPassword.png'
import password2 from '../images/LogoPassword2.png'
import specialisation from '../images/LogoSpecialisation.png'
import bio from '../images/LogoBio.png'
import '../styles/scss/form.css'

function FormLogin() {
    return (
        <form>
            <div className='bio'>
                <img src={bio} alt='bio'></img>
                <div className='bioInput'>
                    <label>Bio</label>
                    <textarea placeholder='I m an awesome doctor ...'></textarea>
                </div>
            </div>
            <div className='username'>
                <img src={username} alt='username'></img>
                <div className='usernameInput'>
                    <label>Username</label>
                    <input placeholder='John Doe'></input>
                </div>
            </div>
            <div className='mail'>
                <img src={logomail} alt='mail'></img>
                <div className='mailInput'>
                    <label>Email</label>
                    <input placeholder='me@doctor.com'></input>
                </div>
            </div>
            <div className='password'>
                <img src={password} alt='password'></img>
                <div className='passwordInput'>
                    <label>Password</label>
                    <input placeholder='******'></input>
                </div>
                <img src={password2} className='password2' alt='see password'></img>
            </div>
            <div className='specialisation'>
                <img src={specialisation} alt='specialisation'></img>
                <div className='specialisationInput'>
                    <label>Your specialisation</label>
                    <input placeholder='Dental surgery...'></input>
                </div>
            </div>


        </form>
    )

}

export default FormLogin;