import React from 'react';
import './Button.css';

export default (props) => {
  return(
    <button onClick={props.onClick}>
      { props.children }
    </button>
  )
}