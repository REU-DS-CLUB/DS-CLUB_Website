import React from 'react';
import { Footer, Header, Latest, Aboutus, Teachbase, Links, Youtube} from './containers';
import { Cta, Brand, Navbar} from './components';
import { Appearance } from 'react-native';
import './Home.css';



const Main = () => {
  return <div className = 'App'>
      {/* <div className="elipse-gradient-1__bg"/>
      <div className="elipse-gradient-2__bg"/> */}
      <div className='header_bg'>
        <Navbar/>
        <Header/>
      </div>
      <div className="main__bg">
        <div className="main__title_container">
            <h1 className='main__title_container-text bordered' >REU</h1>
            <h1 className='main__title_container-text common' >Data Science Club</h1>
        </div>
        {/* <div className='main__title_container-about'>
          <h3 className='main__title_container-about-text-about'>IT сообщество, созданное студентами РЭУ им. Г.В. Плеханова, активно развивающихся в DS и готовых помогать всем желающим получать знания и навыки в этой области</h3>
        </div> */}
        <Latest color1='#E5E5E5'/>
        <Aboutus/>
        <Teachbase/>
        <Links/>
        <Youtube/> 
        <Footer/>
      </div>
  </div>;
};


export default Main;
