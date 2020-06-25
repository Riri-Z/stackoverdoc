import React from 'react';
import FormLogin from "../components/formLogin.js";
import '../styles/login.scss'

class SignUp extends React.Component{
    render() {
        return (
            <div className='login-page'>
                <div className='form-container'>
                    <div className='login-text'>
                        <h3>Create an account!</h3>
                        <p>Start to collaborate with us</p>
                    </div>
                    <FormLogin/>
                </div>
                
            </div>
            
        )
    }
}

export default SignUp;