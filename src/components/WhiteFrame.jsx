import React from 'react'
import "./WhiteFrame.css";

export default function WhiteFrame({mainText, arrowImg, secondaryText, whiteFrameImg}) {
  return (
    <>
         <div className='whiteFrame'>
            <div>
                <p className='whiteFrameText'>{mainText}</p>
                <div className='whiteFrameArrowHolder'>
                    <button className='whiteFrameArrowContainer'>
                        <img className='arrow' src={arrowImg} alt="arrowImage" />
                    </button>
                    <p className='whiteFrameText2'>{secondaryText}</p>
                </div>
            </div>
            <div>
                <img className='whiteFrameImg' src={whiteFrameImg} alt="" />
            </div>
       </div>
    </>
  )
}
