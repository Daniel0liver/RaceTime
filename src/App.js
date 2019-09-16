import React, { useState } from 'react';
import Button from './Components/Button';
import ShowLap from './Components/ShowLap';
import Container from './Components/Container';
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
    <Container>
      <div className="box">
        <div className="laps">
          <ShowLap laps={numLaps} />
        </div>
        <div className="span">
          <Button onClick={decrement}>
            <i class="material-icons">remove</i>
          </Button>
          <Button onClick={increment}>
            <i class="material-icons">add</i>
          </Button>
        </div>
      </div>
      <div>

      </div>
    </Container>
      
  );
}

export default App;
