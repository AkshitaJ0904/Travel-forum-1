import React, { useState, useEffect } from 'react';
import './SignInSignUp.css';

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [animationClass, setAnimationClass] = useState('animated-signup');

  useEffect(() => {
    if (isSignIn) {
      setAnimationClass('animated-signin');
    } else {
      setAnimationClass('animated-signup');
    }
  }, [isSignIn]);

  const handleSignInClick = () => {
    setIsSignIn(false);
  };

  const handleSignUpClick = () => {
    setIsSignIn(true);
  };

  return (
    <div className="signinsignup">
      <div className={`wrapper ${animationClass}`}>
        <div className="form-container sign-up">
          <form action="#">
            <h2>sign up</h2>
            <div className="form-group">
              <input type="text" required />
              <i className="fas fa-user"></i>
              <label>username</label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <i className="fas fa-at"></i>
              <label>email</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>password</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>confirm password</label>
            </div>
            <button type="submit" className="btn">sign up</button>
                <div class="google-btn">
                    <button type="button" class="btn google-signup">Sign up with Google</button>
                </div>
            <div className="link">
              <p>You already have an account? <span className="signin-link" onClick={handleSignInClick}>sign in</span></p>
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <form action="#">
            <h2>login</h2>
            <div className="form-group">
              <input type="text" required />
              <i className="fas fa-user"></i>
              <label>username</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">forgot password?</a>
            </div>
            <button type="submit" className="btn">login</button>
            <div class="google-btn">
                    <button type="button" class="btn google-signin">Sign in with Google</button>
                </div>
            <div className="link">
              <p>Don't have an account? <span className="signup-link" onClick={handleSignUpClick}>sign up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
