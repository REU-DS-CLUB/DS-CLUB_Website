import React from 'react';
import './calender.css';
import Calendar from '@ericz1803/react-google-calendar';

const API_KEY = "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com";
let calendars = [
  {calendarId: "YOUR_CALENDAR_ID"},
  {
    calendarId: "YOUR_CALENDAR_ID_2",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];


const Calender = () => {
  return <div className="calender__bg">
      <h1>Календарь событий</h1>
      
      <div className="calender__box">
        <Calendar apiKey={API_KEY} calendars={calendars} language={"EN"}/>
      </div>
  </div>;
};

export default Calender;
