import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <div className='content'>
          <p className='connectText'>connect with people</p>
          <p className='requestInfoText'>Request More Information</p>
          <div className='aboutSociallyContainer'>
            <p>Socially is a website that helps people make connection and</p>
            <p>attend events with people near you</p>
          </div>
          <button className='contactBtn'>Contact Us</button>
          <div className='copyrightConn'>
            <img src="src/assets/copyright.png" alt="" />
            <p>2025 Socially</p>
          </div>
          <img className='line2' src="src/assets/Line 2.png" alt="" />
          <div className='socialLinksConn'>
            <img className='sociallyLogo' src="src/assets/SOCIALLY.png" alt="" />
            
            <div className='links'>
              <a href="">Team</a>
              <a href="">Discover events</a>
              <a href="">About</a>
            </div>

            <div className='socials'>
              <a className='socialConn' href=""><img className='linkedinImg' src="src/assets/linkedin.png" alt="" /></a>
              <a className='socialConn' href=""><img className='facebookImg' src="src/assets/facebook.png" alt="" /></a>
              <a className='socialConn' href=""><img className='instagramImg' src="src/assets/instagram.png" alt="" /></a>
              <a className='socialConn' href=""><img className='youtubeImg' src="src/assets/youtube.png" alt="" /></a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
