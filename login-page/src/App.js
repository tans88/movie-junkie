import React from 'react';
import arrow from "/Applications/Desktop/personal_projects/mra/movie-junkie/login-page/src/arrow.svg";
import { GoogleLogin } from '@react-oauth/google';
import './App.css';

const clientId = '114509371072-7tarhegmoe9enjf1k3venbm3h7uap4fa.apps.googleusercontent.com';

function App() {
  return (
    <div className='login-component'>

      {/* Login Form */}
      <form>
        <h1>SIGN IN</h1>
        <input className='email' type='email' name='email' placeholder='Email' required />
        <input className='password' type='password' name='password' placeholder='Password' required />
        <button type="submit" className="btn" id="btn">
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </button>
      </form>

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

      <p className='create-account'>Not a member? <a href="http://localhost:3000/">Sign up now</a></p>

    </div>
  );
}

export default App;