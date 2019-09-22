import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link 
} from 'react-router-dom';
import Sidebar from './Components/Sidebar';

import StopWatch from './Pages/StopWatch';
import Run from './Pages/Run';
import HomePage from './Pages/HomePage';

import './App.css';

function App() {
  return (
      <Router>
        <Sidebar>
          <Link to="/">
            <i className="material-icons">home</i>
          </Link>
          <Link to="/Run" >
            <i className="material-icons">directions_run</i>
          </Link>
          <Link to="/StopWatch">
              <i  className="material-icons">timer</i>
          </Link>
        </Sidebar>
        <Route path="/" component={HomePage} />
        <Route path="/Run" component={Run} />
        <Route path="/StopWatch" component={StopWatch} />
      </Router>    
  );
}

export default App;
