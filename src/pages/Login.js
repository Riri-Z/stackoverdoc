import React from 'react';
import FormLogin from "../components/formLogin.js";
import '../styles/login.scss'

class Login extends React.Component{
    render() {
        return (
            <div className='login-page'>
                <div className='form-container'>
                    <div className='login-text'>
                        <h3>Welcome Doctor Doe!</h3>
                        <p>Sign in to continue</p>
                    </div>
                    <FormLogin/>
                </div>
                
            </div>
            
        )
    }
}

export default Login;