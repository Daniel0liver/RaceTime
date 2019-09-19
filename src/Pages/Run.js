import React, { useState, useEffect} from 'react';

import Layout from '../Components/Layout';
import Button from '../Components/Button';
import ShowLap from '../Components/ShowLap';
import ShowTime from '../Components/ShowTime';
import ShowTimeLaps from '../Components/ShowTimeLaps';

export default () => {
    const [numLaps, setNumLaps] = useState(0);
    const [runnig, setRunnig] = useState(false);
    const [timeLaps, setTimeLaps] = useState(0)
    const [time, setTime] = useState(0);
  
    useEffect(() => { // Dica: quando passamos um array no useEffect, ele so dispara quando o props muda
      let realTime
  
      if (runnig) {
        realTime = setInterval(() => {
          setTime(old => old + 1)
          if(time === timeLaps){
            DecrementLaps()
          }
        }, 1000);
      }
      
      return () => {
        if(realTime) { // truthy valor que é convertido para verdadeiro
          clearInterval(realTime) // Interrompe o tempo
        }
      }
      
    }, )
  
    const DecrementLaps = () => {
      setNumLaps(numLaps - 1)
    }
  
    const IncrementTimeLaps = () => {
      setTimeLaps(timeLaps + 30);
    }
  
    const DecrementTimeLaps = () => {
      setTimeLaps(timeLaps - 30);
    }
    
    const Increment = () => {
      setNumLaps(numLaps + 1)
      IncrementTimeLaps()
    }
  
    const Decrement = () => {
      if(numLaps > '0'){
        setNumLaps(numLaps - 1)
        DecrementTimeLaps()
      }
    }
  
    const Runnig = () => {
      if(numLaps > '0'){ // Somente inicia se o numero de voltas for maior que 0
        setRunnig(true) // Iniciando o contador 
      }
      
    }
  
    const StopRunnig = () => {
      setRunnig(false) // Pausando o contador
      
    }
  
    const Reset = () => {
      // setRunnig(false)
      setTime(0) // Setando tempo para 0
      setNumLaps(0) // Setando o número de voltas para 0
      setTimeLaps(0) // Setando tempo por volta para 0
      StopRunnig() // Parando o contador
      
    }


    return(
        <Layout>
        <div className="box">
          <h1 className="title">Corrida</h1>
          <div className="laps">
            <ShowLap laps={numLaps} />
          </div>
          <div className="span">
            <Button onClick={Decrement}>
              <i className="material-icons">remove</i>
            </Button>
            <Button onClick={Increment}>
              <i className="material-icons">add</i>
            </Button>
          </div>
          <div className="time">
            <ShowTime time={Math.round(time)} /> /  <ShowTimeLaps timeLaps={timeLaps} />
            <span>
              <p>Tempo médio por voltas</p>
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