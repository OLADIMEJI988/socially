import React from 'react'
import "./Features.css";
import WhiteFrame from "../components/WhiteFrame";
import BlackFrame from "../components/BlackFrame";
import PositivePplImg from "../assets/positive-ppl.png"
import arrowImg from "../assets/arrow.png"
import whiteFrameImg from "../assets/whiteFrameImg.png"
import whiteFrameImg2 from "../assets/whiteFrameImg2.png"
import blackFrameImg from "../assets/blackFrameImg.png"
import blackFrameImg2 from "../assets/blackFrameImg2.png"


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
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              whiteFrameImg={whiteFrameImg}
            />
            <BlackFrame 
              mainText="Find hobbies to engage your mind"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              blackFrameImg={blackFrameImg}
            />
            <BlackFrame 
              mainText="Chat with other like minded users"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              blackFrameImg={blackFrameImg2}
            />
            <WhiteFrame 
              mainText="Learn more about fighting social isolation on our blog"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              whiteFrameImg={whiteFrameImg2}
            />
        </div>

        <div className="mobileFrames">
            <WhiteFrame 
              mainText="Find events to attend and connect with peers"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              whiteFrameImg={whiteFrameImg}
            />
            <BlackFrame 
              mainText="Find hobbies to engage your mind"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              blackFrameImg={blackFrameImg}
            />
            <WhiteFrame 
              mainText="Learn more about fighting social isolation on our blog"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              whiteFrameImg={whiteFrameImg2}
            />
            <BlackFrame 
              mainText="Chat with other like minded users"
              arrowImg={arrowImg}
              secondaryText="See for yourself"
              blackFrameImg={blackFrameImg2}
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