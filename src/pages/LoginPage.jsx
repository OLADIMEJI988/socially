import React from "react";
import "./loginpage.css";
import bubUp from '../assets/bub-up.png';
import bubD from '../assets/bub-d.png';
import Bg from "../components/MainBg";

const LoginPage = () => {
  return (
    <div className="container">
      {/* Left Section (Illustration & Branding) */}
      <div className="mainbg">
         <Bg />
      </div>

      <div className="bubbles">
        <img src={bubUp} alt="Top Bubbles" className="bub-up" />
        <img src={bubD} alt="Bottom Bubbles" className="bub-d" />
      </div>

      {/* Right Section (Login Form) */}
      <div className="right-section">
        <h2>Log into your account</h2>
        <p>Fill in your details to access your account</p>

        {/* Social Login Buttons */}
        <div className="social-buttons">
          <button className="google-button">
            <img src="/google-icon.png" alt="Google" className="icon" /> Continue with Google
          </button>
          <button className="apple-button">
            <img src="/apple-icon.png" alt="Apple" className="icon" /> Continue with Apple
          </button>
        </div>

        <div className="separator"></div>

        {/* Email Input */}
        <div className="input-group">
          <label className="email-text">Email Address</label>
          <input type="email" placeholder="useraddress@gmail.com" />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="password-text">Password</label>
          <input type="password" placeholder="••••••••••••••" />
        </div>

        {/* Remember Me Checkbox */}
        <div className="checkbox-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Login Button */}
        <button className="login-button">Login</button>

        {/* Signup Link */}
        <p className="signup-link">
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
