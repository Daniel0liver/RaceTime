import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link 
} from 'react-router-dom';

import Container from './Components/Container';
import Button from './Components/Button';
import Sidebar from './Components/Sidebar';

import StopWatch from './Pages/StopWatch';
import Run from './Pages/Run';
import Layout from './Components/Layout';

import './App.css';

function App() {

  return (
    <Layout>
      <Router>
        <Sidebar>
          <Button>
              <Link to="/Run" >
                <i class="material-icons">access_alarms</i>
              </Link>
          </Button>
          <Button>
          <Link to="/StopWatch">
              <i  class="material-icons">add_alarm</i>
          </Link>
          </Button>
          <Button>
                <i class="material-icons">timer</i>
          </Button>
        </Sidebar>
        <Route path="/Run" component={Run} />
        <Route path="/StopWatch" component={StopWatch} />
      </Router>
    </Layout>
      
  );
}

export default App;
