import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
import Home from './Home';
import Events from './Events';
import Projects from './Projects';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Routes>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={Events}/>
             <Route path="/contact" component={Projects}/>
            <Route component={Error}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;