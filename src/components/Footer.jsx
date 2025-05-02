import React from 'react'
import linkedinImg from "../assets/linkedin.png"
import facebookImg from "../assets/facebook.png"
import instagramImg from "../assets/instagram.png"
import youtubeImg from "../assets/youtube.png"
import copyrightImg from "../assets/copyright.png"
import line2 from "../assets/Line 2.png"
import sociallyLogo from "../assets/SOCIALLY.png"





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
            <img src={copyrightImg} alt="" />
            <p>2025 Socially</p>
          </div>
          <img className='line2' src={line2} alt="" />
          <div className='socialLinksConn'>
            <img className='sociallyLogo' src={sociallyLogo} alt="" />

            <div className='links'>
              <a href="">Team</a>
              <a href="">Discover events</a>
              <a href="">About</a>
            </div>

            <div className='socials'>
              <a className='socialConn' href=""><img className='linkedinImg' src={linkedinImg} alt="" /></a>
              <a className='socialConn' href=""><img className='facebookImg' src={facebookImg} alt="" /></a>
              <a className='socialConn' href=""><img className='instagramImg' src={instagramImg} alt="" /></a>
              <a className='socialConn' href=""><img className='youtubeImg' src={youtubeImg} alt="" /></a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
