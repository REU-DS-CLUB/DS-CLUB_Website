import React from 'react';
import './aboutus.css'
import aboutus_photo_1 from '../../assets/Aboutus_photo_1.svg';
import aboutus_photo_2 from '../../assets/Aboutus_photo_2.svg';

const Aboutus = () => {
  return <div className="aboutus__bg">
      <div className="aboutus__container">
        <div className="aboutus__container-text">
            <h1>О нас</h1>
            <p>REU Data Science Club - это IT-сообщество людей 
                с различных направлений, которое публикует ознакомительные статьи, проводит мероприятия, 
                а также собирает полезные курсы в Базе Знаний   
                и использует полученный опыт, реализуя проекты.
            </p>
        </div>
        <img src={aboutus_photo_1}/>
        
      </div>
      <div className="aboutus__container">
      <div className="aboutus__container-text-mobile">
            <div className="aboutus__container-text-margin">
              <h1>Для кого</h1>
              <p>Для тех, кто интересуется Data Science, Data Analytics 
                  или Data Engineering независимо от сферы деятельности:
                  IT, финансы, маркетинг или иное направление, 
                  вам будет полезен наш контент.
              </p>
            </div>
        </div>
        <img src={aboutus_photo_2}/>
        <div className="aboutus__container-text-2">
            <div className="aboutus__container-text-margin">
              <h1>Для кого</h1>
              <p>Для тех, кто интересуется Data Science, Data Analytics 
                  или Data Engineering независимо от сферы деятельности:
                  IT, финансы, маркетинг или иное направление, 
                  вам будет полезен наш контент.
              </p>
            </div>
        </div>
        
        
      </div>
  </div>;
};

export default Aboutus;
