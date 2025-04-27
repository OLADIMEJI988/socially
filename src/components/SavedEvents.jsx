import React from 'react'
import "./CreatedEvents.css";
import EventComponent from './eventComponent';

export default function SavedEvents() {
  return (
    <>
      <div className='eventsContainer'>
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </div>
    </>
  )
}
