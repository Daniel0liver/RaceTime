import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link 
} from 'react-router-dom';
import Layout from './Components/Layout';
import Sidebar from './Components/Sidebar';

import StopWatch from './Pages/StopWatch';
import Run from './Pages/Run';

import './App.css';

function App() {
  return (
    <Layout>
    <Router>
      <Sidebar>
        <Link to="/Run" >
          <i class="material-icons">directions_run</i>
        </Link>
        <Link to="/StopWatch">
            <i  class="material-icons">timer</i>
        </Link>
        <Link>
          <i class="material-icons">add_alarm</i>
        </Link>
      </Sidebar>
      <Route path="/Run" component={Run} />
      <Route path="/StopWatch" component={StopWatch} />
    </Router>
    </Layout>      
  );
}

export default App;
