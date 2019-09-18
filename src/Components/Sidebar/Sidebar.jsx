import React from 'react';
import './Sidebar.css';

export default (props) => {
  return(
    <div className="sidebar menu">
      <ul>
        <li>{props.children}</li>
      </ul>
    </div>
  )
}