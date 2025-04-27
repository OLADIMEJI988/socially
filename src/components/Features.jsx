import React from 'react'
import "./Features.css";
import WhiteFrame from "../components/WhiteFrame";
import BlackFrame from "../components/BlackFrame";
import PositivePplImg from "../assets/positive-ppl.png"

export default function Features() {
  return (
    <>
        <div className="featuresHolder">
            <p className="features">Features</p>
            <p className="offersText">Our website offers the following features 
            and more for you to enjoy</p>
        </div>

       <div className="frames">
            <WhiteFrame 
              mainText="Find events to attend and connect with peers"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              whiteFrameImg="src/assets/whiteFrameImg.png"
            />
            <BlackFrame 
              mainText="Find hobbies to engage your mind"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              blackFrameImg="src/assets/blackFrameImg.png"
            />
            <BlackFrame 
              mainText="Chat with other like minded users"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              blackFrameImg="src/assets/blackFrameImg2.png"
            />
            <WhiteFrame 
              mainText="Learn more about fighting social isolation on our blog"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              whiteFrameImg="src/assets/whiteFrameImg2.png"
            />
        </div>

        <div className="mobileFrames">
            <WhiteFrame 
              mainText="Find events to attend and connect with peers"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              whiteFrameImg="src/assets/whiteFrameImg.png"
            />
            <BlackFrame 
              mainText="Find hobbies to engage your mind"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              blackFrameImg="src/assets/blackFrameImg.png"
            />
            <WhiteFrame 
              mainText="Learn more about fighting social isolation on our blog"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              whiteFrameImg="src/assets/whiteFrameImg2.png"
            />
            <BlackFrame 
              mainText="Chat with other like minded users"
              arrowImg="src/assets/arrow.png"
              secondaryText="See for yourself"
              blackFrameImg="src/assets/blackFrameImg2.png"
            />
        </div>

        <div className='connFrame'>
            <div className='textSection'>
                <p className='title'>Redefine Connection, Combat Loneliness</p>
                <p className='subSection'>Find your community, spark new relationships, and break free from isolation. Our website connects you with people who care. We’re here to help you connect and build meaningful relationships.</p>
                <button className="connBtn">Start Connecting</button>
            </div>
            <img className='PositivePplImg' src={PositivePplImg} alt="" />
            <button className="connBtn2">Start Connecting</button>
        </div>
    </>
  )
}