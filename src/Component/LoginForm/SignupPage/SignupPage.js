import React from 'react'
import "./SignupPage.css";
import img1 from "../../../img/RegistrationBoy.jpg";
import { NavLink } from 'react-router-dom';

const SignupPage = () => {
    return (
        <>
          <div className="main-register">
            <div className="register-container">
              <div className="register-transparent">
                <div className="register-img-left">
                  <div className="register-account">
                    <p>Already have an Account?</p>
                    <NavLink to="/LoginPage">
                      <span>Sign in</span>
                    </NavLink>
                  </div>
                  <div className="register-boyimg">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div className="register-right">
                  <div className="register-center">
                    <div className="register-title">
                      <p>Create Account!</p>
                    </div>
                    <div className="register-first-name">
                      <h5>First Name</h5>
                      <input type="text" placeholder="" />
                    </div>
                    <div className="register-last-name">
                      <h5>Last Name</h5>
                      <input type="text" placeholder="" />
                    </div>
                    <div className="register-email">
                      <h5>Email-Id</h5>
                      <input type="text" placeholder="" />
                    </div>
                    <div className="register-password">
                      <h5>Password</h5>
                      <input type="password" placeholder="" />
                    </div>
                    <div className="register-conform-password">
                      <h5>Conform Password</h5>
                      <input type="password" placeholder="" />
                    </div>
                    <div className="register-btn">
                      <button>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default SignupPage
