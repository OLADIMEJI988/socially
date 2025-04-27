import React from 'react'
import "./EventComponent.css";
import bgImg from '../assets/backgroundImg.jpeg';
import eventCalender from '../assets/calendar.png';
import clock from '../assets/clock.png';
import money from '../assets/report-money.png';

export default function EventComponent() {
  return (
    <>
      <div className='mainEventContainer'>
        <div className='eventContainer'>
          {/* <div className='whiteCircle1'></div> */}
          <img className='bgImg' src={bgImg} alt="" />
          {/* <div className='whiteCircle2'></div> */}
        </div>
        <div className='eventContent'>
            <p className='grpTherapyText'>GROUP THERAPY</p>
            <p className='therapyName'>WILLIAM SMITH THERAPY MEET</p>
            <p className='grpTherapyLocation'>Event location i.e Shoprite ground floor, Iwo Osun State.</p>
            <div className='aboutEventContainer'>
              <div className='eventDate'>
                <img className='aboutIcons' src={eventCalender} alt="" />
                <p>Event Date</p>
              </div>
              <div className='eventTime'>
                <img className='aboutIcons' src={clock} alt="" />
                <p>8:00AM - 10:00AM</p>
              </div>
              <div className='eventFee'>
                <img className='aboutIcons' src={money} alt="" />
                <p>Free</p>
              </div>
            </div>
            <button className='detailsBtn'>View Details</button>
          </div>
      </div>
    </>

  )
}
