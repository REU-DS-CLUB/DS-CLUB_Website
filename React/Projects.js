import React from 'react';
import { Footer, Events_latest, All_projects} from './containers';
import { Calender, Navbar} from './components';

import './Projects.css';


const Projects = () => {
  return <div className = 'Projects'>
      {/* <div className="elipse-gradient-1__bg"/>
      <div className="elipse-gradient-2__bg"/> */}
      <Navbar/>
      <All_projects/>
      <Footer/>
      
  </div>;
};


export default Projects;
