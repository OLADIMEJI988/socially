import React from 'react'
import "./CaseStudyFrame.css";

export default function CaseStudyFrame({user, userProfileImg, remark, seeCaseStudy, arrowImg}) {
  return (
    <>
        <div className='caseStudiesContainer'>
            <div>
                <div className='userContainer'>
                    <img className='userProfileImg' src={userProfileImg} alt="" />
                    <p className='user'>{user}</p>
                </div>
                <p className='remark'>{remark}</p>
                <div className='seeCaseStudyContainer'>
                  <p className='seeCaseStudyText'>{seeCaseStudy}</p>
                  <img className='blueArrowImg' src={arrowImg} alt="" />
                </div>
            </div>
        </div>
    </>

  )
}
