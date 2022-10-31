import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = React.useState(100); //hook jó lenne figyelni
  const intervalRef = React.useRef(null);
  const [dart1, setD1] = useState(10);
  const [dart2, setD2] = useState('X');
  const [dart3, setD3] = useState(30);

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
 console.log(event.target.id);
  };

  const multiplier = event => {
    console.log(event.target.id * 2);
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

  const startCounter = () => {

   

    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      
      setCounter(0);
    }
  };


  useEffect(() => {
    if(counter < 0 && counter < 20) {
      setD2('Simple');
          }
          else if (counter > 20 && counter < 100) {
            setD2('Double');
          }
          else if (counter > 100) {
            setD2('Triple');
          }
          else if (counter == 0) {
            
          }
  }, [counter]);

  const elementStyle = {

    width: 1 + `${counter}px`,
  };
  
  return (
      <div className="Appview">


         <h1> Kör:  { Math.floor(turn - turn/2)}</h1>
        <h1> Kör szumma:  {turnSum}</h1>
        
        <button
        style={elementStyle}>BtnPress- {dart2}</button>
    
<ul className='board'>
{
slices.map(function(item, i){
  let design_slice = i % 2 ? "slice-contents" : "slice-contents-wheat";
  
 return <li className='slice'>
    <div className={design_slice} id={item} onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={stopCounter}> <p>{item}</p> </div>
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
