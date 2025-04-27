import React, { useState } from "react";
import "../components/UserInfo.css";
import UserInfomation from "../components/UserInfo";
import CreatedEvents from "../components/CreatedEvents";
import RSVPeEvents from "../components/RSVPeEvents";
import SavedEvents from "../components/SavedEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";

import userInfoIcon from '../assets/user-info-i.png';
import createdEventsIcon from '../assets/circle-check.png';
import rsvpEventIcon from '../assets/rsvp-i.png';
import savedEventsIcon from '../assets/saved-i.png';
import logoutImg from '../assets/logout.png';

export default function UserBoard() {
    const [activeComponent, setActiveComponent] = useState("userInformation");
    
    const handleNavClick = (component) => {
      setActiveComponent(component);
    };

    const renderComponent = () => {
        switch (activeComponent) {
        case "userInfo":
            return <UserInfomation />;
        case "createdEvents":
            return <CreatedEvents />;
        case "rsvpEvents":
            return <RSVPeEvents />;
        case "savedEvents":
            return <SavedEvents />;
        default:
            return <UserInfomation />;
        }
   };
  return (
    <>
      {/* Header */}    
      <header>
        <Header />
      </header>
      {/* Middle Section */}
    <div className='middle-section'>
         {/* Title */}
         <p className='title'>Account Settings</p>
        <div className='userinfo-section'>
            {/* Side Menu */}
           <div className='sideMenu'>
              <button className={activeComponent === "userInformation" ? "active" : ""} onClick={() => handleNavClick("userInformation")}>
                    <img className='userInfoIcon' src={userInfoIcon} alt="" />
                    <h1 className="fontSize">User Information</h1>
              </button>
              <button className={activeComponent === "createdEvents" ? "active" : ""} onClick={() => handleNavClick("createdEvents")}>
                    <img className='createdEventsIcon' src={createdEventsIcon} alt="" />
                    <h1 className="fontSize">Created Events</h1>
              </button>
              <button className={activeComponent === "rsvpEvents" ? "active" : ""} onClick={() => handleNavClick("rsvpEvents")}>
                    <img className='rsvpEventIcon' src={rsvpEventIcon} alt="" />
                    <h1 className="fontSize">RSVP'd Events</h1>
              </button>
              <button className={activeComponent === "savedEvents" ? "active" : ""} onClick={() => handleNavClick("savedEvents")}>
                    <img className='savedEventsIcon' src={savedEventsIcon} alt="" />
                    <h1 className="fontSize">Saved Events</h1>
              </button>
              {/* Log out */}
              <div className='logoutContainer'>
                 <img className='logoutImg' src={logoutImg} alt="" />
                 <h1>Logout</h1>
              </div> 
           </div>
           <div className="main-content">{renderComponent()}</div>
            {/* User Info Section */}
        </div>
    </div>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}
