import React from 'react'
import "./CreatedEvents.css";
import EventComponent from './eventComponent';

export default function RSVPeEvents() {
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
