import React from 'react';
import './events_latest.css'

var color_of_first_event = '#FE3263'
var color_of_second_event = '#E3D769'
var color_of_third_event = '#20D448'

const Events_latest = () => {
  return <div className="events__bg">
      <h1>Будущие мероприятия</h1>
      <div className="events__container">
        <div className="events__container-link">
          <div className="events__container-link-upside">
              <div className="events__container-mark" style={{background: color_of_first_event}}></div>
              <h2 className="events__container-date">1 февраля 19:00</h2>
              <p className="events__container-status">Онлайн</p>
              <h2 className="events__container-name" style={{color: color_of_first_event}}>Как попасть на стажеровку в Яндекс</h2>
              <div className="events__container-more-button"><h4>Подробнее</h4></div>
          </div>
          <div className="events__container-link-downside">
            <p className="events__container-speaker">Спикер</p>
            <h2 className="events__container-name_of_speaker">Юлия Силова</h2>
            <h3 className="events__container-work_of_speaker"style={{color: color_of_first_event}}>ML Engineer</h3>
            <div className="events__container-aboout_speaker"><h4>Работает в яндексе</h4></div>
          </div>
        </div>
        <div className="events__container-link">
        <div className="events__container-link-upside">
              <div className="events__container-mark" style={{background: color_of_second_event}}></div>
              <h2 className="events__container-date">3 февраля 19:00</h2>
              <p className="events__container-status">Онлайн</p>
              <h2 className="events__container-name" style={{color: color_of_second_event}}>Как попасть на стажеровку в Яндекс</h2>
              <div className="events__container-more-button"><h4>Подробнее</h4></div>
          </div>
          <div className="events__container-link-downside">
            <p className="events__container-speaker">Спикер</p>
            <h2 className="events__container-name_of_speaker">Юлия Силова</h2>
            <h3 className="events__container-work_of_speaker" style={{color: color_of_second_event}}>ML Engineer</h3>
            <div className="events__container-aboout_speaker"><h4>Работает в яндексе</h4></div>
          </div>
        </div>
        <div className="events__container-link">
        <div className="events__container-link-upside">
              <div className="events__container-mark" style={{background: color_of_third_event}}></div>
              <h2 className="events__container-date">3 февраля 19:00</h2>
              <p className="events__container-status">Онлайн</p>
              <h2 className="events__container-name" style={{color: color_of_third_event}}>Как попасть на стажеровку в Яндекс</h2>
              <div className="events__container-more-button"><h4>Подробнее</h4></div>
          </div>
          <div className="events__container-link-downside">
            <p className="events__container-speaker">Спикер</p>
            <h2 className="events__container-name_of_speaker">Юлия Силова</h2>
            <h3 className="events__container-work_of_speaker" style={{color: color_of_third_event}}>ML Engineer</h3>
            <div className="events__container-aboout_speaker"><h4>Работает в яндексе</h4></div>
          </div>
        </div>
      </div>
      <div className="events__all-events">
         <div className='mailing_button'><a className="events__all-events-text">Рассылка мероприятий</a></div>
         <div className='mailing_button' style={{'margin-left': '1rem'}}><a className="events__all-events-text">Прошедшие мероприятия</a></div>
      </div>
      <div className="events_calendar">

      </div>
     
  </div>;
};

export default Events_latest;
