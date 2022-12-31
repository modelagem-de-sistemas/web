import React from 'react';
import FormAuthSignIn from '../../Forms/Auth/FormAuthSignIn';

import { Container, FormsContainer } from './styles';

const AuthContainer: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="assets/images/auth/auth-img.svg" alt="" />
      </header>

      <FormsContainer>
        <FormAuthSignIn />

        {/* <form action="" className="login__create none" id="login-up">
          <h1 className="login__title">Create Account</h1>

          <div className="login__box">
            <i className="bx bx-user login__icon"></i>
            <input type="text" placeholder="Username" className="login__input" />
          </div>

          <div className="login__box">
            <i className="bx bx-at login__icon"></i>
            <input type="text" placeholder="Email" className="login__input" />
          </div>

          <div className="login__box">
            <i className="bx bx-lock-alt login__icon"></i>
            <input type="password" placeholder="Password" className="login__input" />
          </div>

          <a href="#" className="login__button">
            Sign Up
          </a>

          <div>
            <span className="login__account">Already have an Account ?</span>
            <span className="login__signup" id="sign-in">
              Sign In
            </span>
          </div>

          <div className="login__social">
            <a href="#" className="login__social-icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="login__social-icon">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="login__social-icon">
              <i className="bx bxl-google"></i>
            </a>
          </div>
        </form> */}
      </FormsContainer>
    </Container>
  );
};

export default AuthContainer;
