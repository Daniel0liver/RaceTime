import React from 'react';
import './ShowTime.css';

export default (props) => {
  const time = props.time;
  const minutes = parseInt(time/60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;

  return (
    <div className="footer">
      <h1>
        {`${minutesStr}:${secondsStr}`}
      </h1>
    </div>
  )
}