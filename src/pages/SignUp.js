import React from 'react';
import FormLogin from "../components/formSignUp.js";
import picture from "../images/background2.png"
import '../styles/signup.scss'

class Login extends React.Component{
    render() {
        return (
            <div className='signup-page'>
                <div className='form-container'>
                    <div className='login-text'>
                        <h3>Create an account!</h3>
                        <p>Start to collaborate with us</p>
                    </div>
                    <img src={picture} alt="doctor"/>
                    <div className="large-screen">
                    <FormLogin/>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Login;