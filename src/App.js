import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = React.useState(0); //hook jó lenne figyelni
  const intervalRef = React.useRef(null);
  const [dart1, setD1] = useState(0);
  const [dart2, setD2] = useState(0);
  const [dart3, setD3] = useState(0);

  const [turn, setTurn] = useState(0);
  const [turnSum, setTurnSum] = useState(0);

  const [p1, setP1] = useState(0);
  const [roundsP1, setRoundsP1] = useState([]);
  const [p2, setP2] = useState(0);
  const [roundsP2, setRoundsP2] = useState([]);

  let slices = [1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5,20];
  const [bull, setBull] = useState(0);

 
const endTurn = () => {
if (turn % 2 == 0) setP1(p1 + turnSum);
if (turn % 2 != 0) setP2(p2 + turnSum);
roundsP1.push(turnSum);
setTurn(turn + 1);
}


  const hit = event => { 
  hit_counter(event.target.id, 0);
  };

const dart1_zero = () => {
setD2(1111);
}
const dart2_zero = () => {
  setD2(0);
  }
  const dart3_zero = () => {
    setD3(0);
    }


  const bully = event => {
setBull(bull + 25) 
if (bull == 50) setBull(0);
  };

  const startCounter = (event) => {

    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);
  };  

  const stopCounter = (event) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      hit_counter(event.target.id, counter)
      setCounter(0);
    }
  };

function hit_counter(dart, multiplier_counter)
{
let multiplier = 0;
if (multiplier_counter > 20 && multiplier_counter < 100) {
  multiplier = 2;
}
else if (multiplier_counter >= 100){
  multiplier = 3;
}
else if (multiplier_counter == 0) {
multiplier = 1;
}



  if (dart1 == 0) {
    setD1(dart * multiplier);
    return;
  }
  if (dart2 == 0) {
    setD2(dart * multiplier);
    return;
  }
  if (dart3 == 0) {
    setD3(dart * multiplier);
    return;
  }
}

  const elementStyle = {
    width: `${counter}%`, 
  };
  
  return (
      <div className="Appview">


         <h1> Kör:  { Math.floor(turn - turn/2)}</h1>
        <h1> Kör szumma:  {turnSum}</h1>
        <h1>{dart1}</h1>
        <h1>{dart2}</h1>
        <h1>{dart3}</h1>
        <button className='multiplier-counter' style={elementStyle}>{counter}</button>
    
<ul className='board'>
{
slices.map(function(item, i){
  let design_slice = i % 2 ? "slice-contents" : "slice-contents-wheat";
  
 return <li className='slice'>
    <div className={design_slice} id={item} onClick={hit} onTouchStart={startCounter}
        onTouchEnd={stopCounter}
       > <p>{item}</p> </div>
    </li>
})

}
<span className={'bull'} onClick={bully}> <h3>{ bull == 0 ?  '' : bull}</h3>  </span>
</ul>

<button>Score</button>
<button onClick={endTurn}> Next</button>

<div> <h1 className={turn % 2 == 0 ? 'active' : 'not-active'} >Jatekos1: {p1}</h1><h1 className={turn % 2 != 0 ? 'active' : 'not-active'}>Jatekos2: {p2}</h1></div>

<div>


</div>
{/* <Score scorep1={p1} scorep2={p2} scorehistoryp1={roundsP1}  scorehistoryp2={roundsP2}/> */}
      </div>
      
  );
}

export default App;
