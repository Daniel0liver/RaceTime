import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Link 
  } from 'react-router-dom';

import Container from '../Container';
import './Layout.css';

export default ({ children }) => {
   return(
      <div>
         <Container>
            { children }
         </Container>
      </div>
   )
}