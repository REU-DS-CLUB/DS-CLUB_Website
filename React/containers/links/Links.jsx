import React from 'react';
import './links.css'
import icon_vk from '../../assets/icon-vk.svg';
import icon_github from '../../assets/icon-github.svg';
import icon_telegram from '../../assets/icon-telegram.svg';

const Links = () => {
  return <div className="links__bg">
      <h1>Мы в социальных сетях</h1>
      <div className="links__container">
         <div className="links__container-link">
         <img src={icon_vk}/>
         <div className='links__container-link-text'>
           <h2>Группа VK</h2>
          <p>Анонсы мероприятий, 
            полезные новости 
            и статьи из мира DS
          </p>
         </div>
         
          </div>
          <div className="links__container-link">
          <img src={icon_github}/>
          <div className='links__container-link-text'>
            <h2>GitHub репозиторий</h2>
          <p>Исходный код 
            наших проектов
            </p>
          </div>
          </div>
          <div className="links__container-link">
          <img src={icon_telegram}/>
          <div className='links__container-link-text'>
            <h2>Закрытое сообщество в Tg</h2>
            <p>Общение
              с единомышленниками 
              и разбор интересных задач
          </p>
          </div>
          
          </div>
        </div>
  </div>;
};

export default Links;
