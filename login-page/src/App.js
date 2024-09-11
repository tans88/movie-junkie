import React from 'react';
import google_logo from "/Applications/Desktop/personal_projects/mra/movie-junkie/login-page/src/google_logo.svg";
import arrow from "/Applications/Desktop/personal_projects/mra/movie-junkie/login-page/src/arrow.svg";
import './App.css';

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
      <button className='google-btn'><img src={google_logo} alt='google logo' /> Log in with Google</button>

      <p className='create-account'>Not a member? <a src="">Sign up now</a></p>
    </div>
  );
}

export default App;
