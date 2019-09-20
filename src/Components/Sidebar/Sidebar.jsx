import React from 'react';
import './Sidebar.css';

export default (props, { children }) => {
  return(
    <div className="sidebar menu">
      <ul>
        <li>{props.children}</li>
      </ul>
    </div>
  )
} 