import React from 'react';
import './all_projects.css'
import { Search__tag } from '../../components';
import news1 from '../../assets/Base.png';
import news2 from '../../assets/Base.png';
import news3 from '../../assets/Base.png';

const  All_projects= () => {
  return <div className="latest__bg">
      <div className="latest__header">
      <a className="latest__bg-newtext">Статьи по проектам</a>
      <Search__tag/>
      </div>
      
      <div className="latest__container">
         <div className="latest__container-str">
         <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>

          <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>

          <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>
         </div>
         <div className="latest__container-str">
         <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>

          <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>

          <div className="latest__container-link">
           <img className="latest__container-link-img" src={news1}/>
           <div className="latest__container-link-info">
             <div className="latest__container-link-about">
                <a>Design</a><div className="elipse"/><a>10 min read</a>
            </div>
            <h2>6 Creative Ways to Use Repeat Grids in Adobe XD</h2>
            <a className="read_more">Читать далее</a>
           </div>
           
          </div>
         </div>
        
        
         
      </div>
      
  </div>;
};

export default All_projects;
