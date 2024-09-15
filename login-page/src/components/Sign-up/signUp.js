import React, { useState } from 'react';
import './signUp.css';
import arrow from '../Sign-in/arrow.svg';

function SignUp({ onSignInClick }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    // checks if password meets criteria and if passwords match
    const checkPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkPassword(password)){
            setErrorMessage('Password must be 8 characters long, have at least one capital letter, at least one number, and at least one speical character.');
            setIsConfirmed(false);
            return;
        }

        if (password !== confirmPassword){
            setErrorMessage('Passwords do not match.');
            setIsConfirmed(false);
            return;
        }

        setErrorMessage('');
        setIsConfirmed(true);
    };

    return (
      <div className='create-account-component'>

        <form>
          <h1>CREATE ACCOUNT</h1>
          <input 
          className='email' 
          type='email' 
          name='email' 
          placeholder='Email' 
          required />
          <input 
          className='password' 
          type='password' 
          name='password' 
          placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
          <input 
          className='confirm-password' 
          type='password' 
          name='password' 
          placeholder='Confirm Password' 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />

          <button onClick={handleSubmit} type="submit" className="btn" id="btn">
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </button>

          {/** Display error message */}
          {isConfirmed ? (
            <p className='message confirmation'>Form submitted!</p>
          ) : (
            <p className='message error-message'>{errorMessage}</p>
          )}
        </form>
  
        <p className='sign-in'>Already a member? <span onClick={onSignInClick}>Sign in now</span></p>
  
      </div>
    );
}

export default SignUp;