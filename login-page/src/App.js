import React from 'react';
import google_logo from "/Applications/Desktop/personal_projects/mra/movie-junkie/login-page/src/google_logo.svg";
import arrow from "/Applications/Desktop/personal_projects/mra/movie-junkie/login-page/src/arrow.svg";
import './App.css';

function App() {
  return (
    <div className='login-component'>
      <form>
        <h1>Login</h1>
        <input className='email' type='email' name='email' placeholder='Email' required />
        <input className='password' type='password' name='password' placeholder='Password' required />
        <button type="submit" className="btn" id="btn">
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </button>
      </form>

      <button className='google-btn'><img src={google_logo} alt='google logo' /> Sign in with Google</button>
    </div>
  );
}

export default App;
