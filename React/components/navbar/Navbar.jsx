import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import {Search} from '../../components'
import './navbar.css';
import Projects from '../../Projects';
import Events from '../../Events';
import Home from '../../Home';

const Menu = (color1) => (
  <>
  <div className="search">
    <Search color1={color1}/>
  </div>
  
  
          
    <p><a href='/DSCLUB/Events' style={{color: color1.color1.color1}}>Мероприятия</a></p>
    <p><a href='/DSCLUB/Projects' style={{color: color1.color1.color1}} >Проекты</a></p>
     
  </>
)

const Navbar = (color1) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div>
      <div className="main__navbar">
      <div className="main__navbar-links">
        <a href='/DSCLUB'>
          <div className="main__navbar-links_logo">
          <img  src={logo} />
        </div>
        </a>
        
        <div className="main__navbar-links_container">
         <Menu color1={color1}/>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default Navbar;

