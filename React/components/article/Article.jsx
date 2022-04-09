import React from 'react';
import './article.css'

const Article = (State) => {
  return <div className='article__bg'>
      <h1 className='article__h1'>{State.name}</h1>
      <div className='article_container-text'><h2 className='article__h2'>Цель: </h2><p className='article__p'>{State.target}</p></div>
      <div className='article_container-text'><h2 className='article__h2'>Стек технологий: </h2><p className='article__p'>{State.technologies}</p></div>
      <div className='article_container-text'><h2 className='article__h2'>Сроки:</h2><p className='article__p'>{State.timeline}</p></div>
  </div>;
};

export default Article;
