import React from 'react';
import './signUp.css';
import arrow from '../Sign-in/arrow.svg';

function SignUp({ onSignInClick }) {

    // checks if password meets criteria and if passwords match
    const processPassword = () => {

    };

    return (
      <div className='create-account-component'>

        <form>
          <h1>CREATE ACCOUNT</h1>
          <input className='email' type='email' name='email' placeholder='Email' required />
          <input className='password' type='password' name='password' placeholder='Password' required />
          <input className='confirm-password' type='password' name='password' placeholder='Confirm Password' required />
          <button onClick={processPassword} type="submit" className="btn" id="btn">
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </button>
        </form>
  
        <p className='sign-in'>Already a member? <span onClick={onSignInClick}>Sign in now</span></p>
  
      </div>
    );
}

export default SignUp;