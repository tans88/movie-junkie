import React, { useState } from 'react';
import arrow from './arrow.svg';
import { GoogleLogin } from '@react-oauth/google';
import safeRegex from 'safe-regex';
import './signIn.css';

const clientId = '114509371072-7tarhegmoe9enjf1k3venbm3h7uap4fa.apps.googleusercontent.com';

function SignIn({ onSignUpClick }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const checkEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!safeRegex(emailRegex)){
          console.log("Regex entered is unsafe!");
          return false;
        }
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === ''){
            setErrorMessage('Please enter your email address.');
            return;
        }

        if (password === ''){
            setErrorMessage('Please enter your password.');
            return;
        }

        if (!checkEmail(email)){
            setErrorMessage('Email address is invalid.');
            return;
        }

        setErrorMessage('');
    }

    return (
      <div className='login-component'>
  
        {/* Login Form */}
        <form>
          <h1>SIGN IN</h1>
          <input 
          className='email' 
          type='email' 
          name='email' 
          placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          className='password' 
          type='password' 
          name='password' 
          placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit} type="submit" className="btn" id="btn">
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </button>
        </form>

        {/* Display error message */}
        {errorMessage !== '' ? (
            <p className='error-message'>{errorMessage}</p>
        ) : (
            <p className='noDisplay'></p>
        )}
  
        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>
  
        {/* Google Button */}
        <div className='google-btn'>
          <GoogleLogin
            clientId={clientId}
            onSuccess={(response) => console.log(response)}
            onError={(error) => console.log('Login failed: ', error)}
          />
        </div>
  
        <p className='create-account'>Not a member? <span onClick={onSignUpClick}>Sign up now</span></p>
  
      </div>
    );
}

export default SignIn;