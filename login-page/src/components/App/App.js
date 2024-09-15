import React, { useState } from 'react';
import './App.css';

import SignIn from '../Sign-in/signIn';
import SignUp from '../Sign-up/signUp';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  // helps with toggling for sign up and sign in
  const toggleAuthForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="login-page">
      {isSignIn ? (
        <SignIn onSignUpClick={toggleAuthForm} />
      ) : (
        <SignUp onSignInClick={toggleAuthForm} />
      )
    }
    </div>
  );
}

export default App;