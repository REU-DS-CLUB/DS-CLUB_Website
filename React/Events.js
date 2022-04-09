import React from 'react';
import { Footer, Events_latest} from './containers';
import { Calender, Navbar} from './components';

import './Events.css';


const Events = () => {
  return <div className = 'Events'>
      <Navbar color1={'#263238'}/>
      <Events_latest/>

      <Calender/>

      <Footer/>
      
  </div>;
};


export default Events;
