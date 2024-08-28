import React from "react";
import "./LoginPage.css";
import img1 from "../../../img/giftcard2.png";
import img2 from "../../../img/Nail paint-GetApp.jpg";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
          <div className="main-login">
            <div className="login-container">
              <div className="login-transparent">
                <div className="login-left">
                  <div className="login-center">
                    <div className="loginimg">
                      <img src={img1} alt="" />
                    </div>
                    <div className="login-email">
                      <label>Email-Id</label>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="login-password">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="loginbtn">
                      <button>Login</button>
                    </div>
                    <div className="login-account">
                      <h6>Dont have an Account?</h6>
                      <NavLink to="/SignupPage">
                        <span>Register Now</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="login-img-right">
                  <p>Welcome Back!</p>
                  <div className="login-mobimg">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default LoginPage;
