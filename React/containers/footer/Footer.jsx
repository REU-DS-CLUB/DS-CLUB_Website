import React from 'react';
import './footer.css'



const Footer = () => {
  return <div className="footer__bg">
      <div className="footer__contacts">
          <h2 className="footer_contacts_text">Контакты</h2>
          <p className="footer_contacts_text">reu.ds.club@gmail.com</p>
          <p className="footer_contacts_text">IT-сообщество</p>
      </div>
      <div className="footer__container">
          <h2>Социальные сети</h2>
          <div className="footer__container-links">
            <a>Вконтакте</a>
            <a className="link_text">YouTube</a>
            <a className="link_text">GitHub</a>
            <a className="link_text">База знаний</a>
          </div>
          <div className="footer__container-pages">
            <a href='/Events'>Мероприятия</a>
            <a href='/Projects' className="pages-link">Проекты</a>
          </div>
      </div>
  </div>;
};

export default Footer;
