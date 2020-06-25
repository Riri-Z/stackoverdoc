import React from 'react';
import FormLogin from "../components/formLogin.js";
import picture from "../images/background2.png"
import '../styles/login.scss'

class Login extends React.Component{
    render() {
        return (
            <div className='login-page'>
                <div className="log-container">
                    <div className='form-container'>
                        <div className='login-text'>
                            <h3>Create an account!</h3>
                            <p>Start to collaborate with us</p>
                        </div>                    
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