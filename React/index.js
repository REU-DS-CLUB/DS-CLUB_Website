import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home"
import Projects from "./Projects"
import Events from "./Events"
import App from "./App"
import Dashboard from './Projects_pages/dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

if (window.location.pathname == '/DSCLUB/Events'){
  ReactDOM.render((
    <BrowserRouter>
    
      <Events /> {}
    </BrowserRouter>
    ), document.getElementById('root')
  );
} else if (window.location.pathname == '/DSCLUB/Projects'){
  ReactDOM.render((
    <BrowserRouter>
    
      <Projects /> {}
    </BrowserRouter>
    ), document.getElementById('root')
  );
} else if (window.location.pathname == '/DSCLUB/Dashboard'){
  ReactDOM.render((
    <BrowserRouter>
    
      <Dashboard/> {}
    </BrowserRouter>
    ), document.getElementById('root')
  );
} else {
  ReactDOM.render((
    <BrowserRouter>
      
      <Home/> {}
    </BrowserRouter>
    ), document.getElementById('root'),
    
  );
}



