import React, { useState } from 'react';
import Button from './Components/Button';
import ShowLap from './Components/ShowLap';
import './App.css';

function App() {
  const [numLaps, setNumLaps] = useState(0);
  
  const increment = () => {
    setNumLaps(numLaps + 1)
  }

  const decrement = () => {
    setNumLaps(numLaps - 1)
  }

  return (
    <div>
      <ShowLap laps={numLaps} />
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}

export default App;
