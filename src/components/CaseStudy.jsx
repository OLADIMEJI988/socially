import React from 'react'
import "./CaseStudy.css";
import CaseStudyFrame from './CaseStudyFrame';

export default function CaseStudy() {
  return (
    <>
        <div className="caseStudyHolder">
            <p className="caseStudy">Case Study</p>
            <p className="caseText">See what people have to say about our website.
            A trial will convince you</p>
        </div>

        <div className='caseStudyConn'>
            <CaseStudyFrame
                user="John Doe"
                userProfileImg="src/assets/john.png"
                remark="This website has truly changed my life. I’ve struggled with loneliness for years, and finding a platform where people actually care has been a game-changer. I’ve met some amazing friends, and I no longer feel like I’m alone in this."
                seeCaseStudy="See for yourself"
                arrowImg="src/assets/blue-arrow.png"
            />

            <div className='lineContainer'>
                <img className='whiteLine' src="src/assets/Line.png" alt="" />
            </div>

            <div className='mobileLineContainer'>
                <img className='mobileLine' src="src/assets/mobile-line.png" alt="" />
            </div>

           <CaseStudyFrame 
                user="James Edward"
                userProfileImg="src/assets/james.png"
                remark="I never thought I’d find a place where I could truly connect with others who understand what it’s like to feel isolated. The community here is warm, welcoming, and supportive. It’s been an incredible experience, and I’m so grateful I found it"
                seeCaseStudy="See for yourself"
                arrowImg="src/assets/blue-arrow.png"
            />

            <div className='lineContainer'>
                <img className='whiteLine' src="src/assets/Line.png" alt="" />
            </div>

            <div className='mobileLineContainer'>
                <img className='mobileLine' src="src/assets/mobile-line.png" alt="" />
            </div>

            <CaseStudyFrame
                user="Mary Jane"
                userProfileImg="src/assets/jane.png"
                remark="This site is a lifeline. I’ve made deep, meaningful friendships and have even joined virtual events that have lifted my spirits. It’s comforting to know I’m not alone in my struggles, and the people here have been a constant source of support."
                seeCaseStudy="See for yourself"
                arrowImg="src/assets/blue-arrow.png"
            />
        </div>

    </>
  )
}
