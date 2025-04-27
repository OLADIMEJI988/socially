import React from 'react'
import "./CreatedEvents.css";
import EventComponent from './eventComponent';



export default function CreatedEvents() {
  return (
    <>
      <div className='eventsContainer'>
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </div>
    </>

  )
}
