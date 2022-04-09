import React from 'react';
import './youtube.css'
import icon_youtube from '../../assets/icon-youtube.svg';

const Youtube = () => {
  return <div className="youtube__bg">
      <h1>Запись мероприятий</h1>
      <div className="youtube__container">
        <div className="youtube__container-info">
          <div className="youtube__container-info-mail">
          <img src={icon_youtube}/>
          <div className='youtube__container-info-mail-text'>
            <h2>Наш канал</h2>
            <p>Публикация всех мероприятий</p>
          </div>
          </div>
          <a>Посмотреть колендарь наших мероприятий</a>
        </div>
        <div className="youtube__container-video">
        <iframe className="yotube__video" width="100%" height="80%" src="https://www.youtube.com/embed/YgITG4sRtNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </div>;
};

export default Youtube;
