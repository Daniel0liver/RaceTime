import React from 'react';
import Container from '../Container';

import './Layout.css';

export default  ({ children }) => {
  return (
    <Container>
      <div className="box">
        {children}
      </div>
    </Container>
  )
}