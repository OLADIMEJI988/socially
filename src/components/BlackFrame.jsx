import React from 'react'
import "./BlackFrame.css";

export default function BlackFrame({mainText, arrowImg, secondaryText, blackFrameImg}) {
  return (
    <div className='blackFrame'>
        <div>
            <p className='blackFrametext'>{mainText}</p>
            <div className='blackFrameArrowHolder'>
                <button className='blackFrameArrowContainer'>
                    <img className='arrow' src={arrowImg} alt="arrowImage" />
                </button>
                <p className='blackFrametext2'>{secondaryText}</p>
            </div>
        </div>
        <div>
            <img className='blackFrameImg' src={blackFrameImg} alt="" />
        </div>
   </div>
  )
}
