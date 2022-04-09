import React from 'react';
import './teachbase.css'
import frame from '../../assets/Desktop.svg';
import base_photo from '../../assets/TeachBase.png';
import mobile from '../../assets/Mobile.svg';

const Teachbase = () => {
  return <div className="teachbase__bg">
      <div className="teachbase__container">
        <div className="teachbase__container-text">
            <h1>База знаний</h1>
            <p className="text">База знаний - место, где собрана вся ключевая информация, которая поможет прокачать знания в области DS. Здесь можно посмотреть что требуется знать хорошему специалисту, подобрать обучающий курс 
                    по доступности материалов, сложности уровня и приоритету обучения 
                    и построить свою образовательную траекторию. </p>
            <a>Перейти</a>
        </div>
      </div>
      <div className="teachbase__container-image">
        
        <img width="73%"  className="img_2" src={frame}></img>
        <img className="img_mobile" src={mobile}></img>
      </div>
      
          </div>;
      
};

export default Teachbase;
