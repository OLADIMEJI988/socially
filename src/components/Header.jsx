import React, { useState } from "react";
import logo from "../assets/logo.png";
import landingPageImg from "../assets/undraw_off-road_34hg 1.png";
import mobileLandingPageImg from "../assets/mobile-landingPageImg.png";
import headerLogo from "../assets/SOCIALLY.png";
import whiteUserIcon from "../assets/white-user-icon.png";
import hamburgerMenu from "../assets/menu.png";
import closePopUpImg from "../assets/closePopUp.png";
import "./Header.css";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className='nav-links'>
            <li className="nav-item">
              Create Events
            </li>
            <li className="nav-item">
              Your Hobbies
            </li>
            <li className="nav-item">
              News
            </li>
          </div>
          <button className="loginBtn">Login</button>
        </div>
      </header>

      <header className="mobileHeader">
        <button onClick={openPopup} className="menuBtn">
          <img className="hamburgerMenu" src={hamburgerMenu} alt="" />
        </button>
        <img className="headerLogo" src={headerLogo} alt="" />
        <div className="userIconContainer">
          <img className="whiteUserIcon" src={whiteUserIcon} alt="" />
        </div>
      </header>
      {isOpen && (
        <div className="navPopUp">
          <a href="">Home</a>
          <a href="">Create Events</a>
          <a href="">Your Hobbies</a>
          <a href="">News</a>
          <button onClick={closePopup} className="closePopUpConn">
            <img className="closePopUpBtn" src={closePopUpImg} alt="" />
          </button>
        </div>
      )}

      <main className="mainContainer">
        <div className="motifContainer">
          <p className="motif">
            Break the silence and 
            build Connections with like 
            minded people
          </p>
          <p className="mission">
           Join a community dedicated to overcoming social isolation and 
           creating meaningful connections. Our app helps you connect, share,
           and thrive together. Share experiences, and find support with others 
           who understand.
          </p>
          <button className="connectBtn">Start Connecting</button>
        </div>
        <img className="landingPageImg" src={landingPageImg} alt="" />
        <img className="mobileLandingPageImg" src={mobileLandingPageImg} alt="" />
        <button className="connectBtn2">Start Connecting</button>
      </main>
    </>
  )
}
