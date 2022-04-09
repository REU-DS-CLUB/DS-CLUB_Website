import React from 'react';
import './latest.css'
import news1 from '../../assets/Latest_1.svg';
import news2 from '../../assets/Latest_3.svg';
import news3 from '../../assets/Latest_3.svg';
import {Search} from '../../components'
const New = (color1) => (
  <>
    <div className='block_new'>
        <a className="latest__bg-newtext">Новое</a>
      <div className='search_second'><Search color1={color1}/></div>
      
      </div>
  </>
)

const Latest = (color1) => {
  return <div className="latest__bg">
      <New color1={color1}></New>
      <div className="latest__container--1">
         
         <div className="latest__container-link-1">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a href='/DSCLUB/Dashboard' className="read_more">Читать далее</a>
          </div>
          
          <div className="latest__container-link-1">
           <img className="latest__container-link-img" src={news2}/>
           <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a href='./Dashboard' className="read_more">Читать далее</a>
          </div>

          <div className="latest__container-link-1">
           <img className="latest__container-link-img" src={news3}/>
           <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a href='./Dashboard' className="read_more">Читать далее</a>
          </div>

          <div className="latest__container-link-gallery">
           <div className='latest__container-link-gallery-blockbig'>
              <img className="latest__container-link-img" src={news1}/>
              <div className="latest__container-link-about-gallery">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
              </div>
              <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
              <a href='./Dashboard' className="read_more">Читать далее</a>
              </div>
            <div className='latest__container-link-gallery-downside'>
                <div className='latest__container-link-gallery-blocksmall'>
                  <img className="latest__container-link-img" src={news2}/>
                  <div className="latest__container-link-about-gallery">
                        <a>Design</a><div className="elipse"/><a>10 min read</a>
                    </div>
                    <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
                    <a href='./Dashboard' className="read_more">Читать далее</a>
                </div>
                <div className='latest__container-link-gallery-blocksmall'>
                  <img className="latest__container-link-img" src={news3}/>
                  <div className="latest__container-link-about-gallery">
                        <a>Design</a><div className="elipse"/><a>10 min read</a>
                    </div>
                    <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
                    <a href='./Dashboard' className="read_more">Читать далее</a>
                </div>
            </div>
            
          </div>
      </div>
      
  </div>;
};

export default Latest;
