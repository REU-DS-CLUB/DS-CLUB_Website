import React from 'react';
import './likes.css'
import like_img from '../../assets/heart 1.svg'

const Likes = () => {
  return <div className='likes__bg'>
      <div className='likes_and_views__container'>
        <p>180</p><p>просмотров</p><p style={{'margin-left': '2rem'}}>5</p><img className='like__container-img' src={like_img}></img>
      </div>
      <div className='comment__container'>
        <h2 className='comment__container-h2'>Написать комментарий</h2>
      </div>
  </div>;
};

export default Likes;
