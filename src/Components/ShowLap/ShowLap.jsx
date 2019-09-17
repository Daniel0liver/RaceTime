import React from 'react';
import './ShowLap.css'

export default (props) => {
  return(
    <div className="header">
      <h1> {props.laps} </h1>
      <p>Voltas</p>
    </div>
  )
}