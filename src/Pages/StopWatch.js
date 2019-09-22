import React, { useState, useEffect } from 'react';

import Button from '../Components/Button';
import ShowTime from '../Components/ShowTime';
import Layout from '../Components/Layout';

export default () => {
  const [runnig, setRunnig] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => { // Dica: quando passamos um array no useEffect, ele so dispara quando o props muda
    let realTime

    if (runnig) {
      realTime = setInterval(() => {
        setTime(old => old + 1)
      }, 1000);
    }
    
    return () => {
      if(realTime) { // truthy valor que é convertido para verdadeiro
        clearInterval(realTime) // Interrompe o tempo
      }
    }
    
  }, )

  const Runnig = () => {
    setRunnig(true) // Iniciando o contador 
    
  }

  const StopRunnig = () => {
    setRunnig(false) // Pausando o contador
    
  }

  const Reset = () => {
    // setRunnig(false)
    setTime(0) // Setando tempo para 0  
    StopRunnig() // Parando o contador
    
  }


	return(
    <Layout>
      <div className="box-stopwatch">
        <h1 className="title">Cronômetro</h1>
        <div className="time stopwatch">
          <ShowTime time={Math.round(time)} />
          <span>
            <p>Tempo médio</p>
          </span>
        </div>
        <div className="footer">
          <Button  onClick={Runnig}>
            <i className="material-icons">play_arrow</i>
          </Button> 
          <Button onClick={StopRunnig}>
            <i className="material-icons">pause</i>
          </Button>
          <Button onClick={Reset}>
            <i className="material-icons">replay</i>
          </Button>
        </div>
        </div>
    </Layout>
	)
}

