import "./App.css";
import React, { useState, useEffect } from "react";
import dart from "./dart.png";
import dartboard from "./dartboard.png";
import Score from "./Score";
import Players from "./Players";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [hidden, setHidden] = useState("none");
  const [hiddenBull, setHiddenBull] = useState("none");
  const [hiddenScore, setHiddenScore] = useState("none");
  const [hiddenPlayers, setHiddenPlayers] = useState("block");

  const [dartX, setDartX] = useState(0);
  const intervalRef = React.useRef(null);

  const [dart1, setD1] = useState(0);
  const [dart2, setD2] = useState(0);
  const [dart3, setD3] = useState(0);
  const [dart1x, setD1x] = useState(0);
  const [dart2x, setD2x] = useState(0);
  const [dart3x, setD3x] = useState(0);

  const [turn, setTurn] = useState(0);
  const [turnSum, setTurnSum] = useState(0);

  const [p1, setP1] = useState(501);
  const [p1name, setP1name] = useState('Játékos1');
  const [roundsP1, setRoundsP1] = useState([]);
  const [p2, setP2] = useState(501);
  const [p2name, setP2name] = useState('Játékos2');
  const [roundsP2, setRoundsP2] = useState([]);

  let slices = [ 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20];

  const endTurn = () => {
    if (turn % 2 === 0) {setP1(p1 - turnSum); setRoundsP1(roundsP1 => [...roundsP1,turnSum]);}
    if (turn % 2 !== 0) {setP2(p2 - turnSum); setRoundsP2(roundsP2 => [...roundsP2,turnSum]);}
    setTurn(turn + 1);
    setD1(0);
    setD2(0);
    setD3(0);
    setD1x(0);
    setD2x(0);
    setD3x(0);
    navigator.vibrate(100);
  };

    window.onbeforeunload = function() {
        return "Az oldal újratöltésével új játékot kezdesz. Folyatatod?";
    }

function hitCounter(dart, multiplier) {
let multiplier_text = '';
if (multiplier === 2) multiplier_text = 'D ';
if (multiplier === 3) multiplier_text = 'T ';
  if (dart1 === 0) {
    setD1(dart * multiplier);
    setD1x(multiplier_text+dart);
    return;
  }
  if (dart2 === 0) {
    setD2(dart * multiplier);
    setD2x(multiplier_text+dart);
    return;
  }
  if (dart3 === 0) {
    setD3(dart * multiplier);
    setD3x(multiplier_text+dart);
    return;
  }
}

const hit = (event) => {
let hitvalue = parseInt(event.target.id);
hitCounter(hitvalue,1);
  };

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 2);
    }, 10);
  };

  const stopCounter = (event) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      if (counter > 100) {
        multiplier(event.target.id);
        navigator.vibrate(50);
      }
      setCounter(0);
    }
  };

  function multiplier(dart) {
    setDartX(dart);
    setHidden("block");
    console.log(dart);
  }

  const multiplierDouble = () => {
    let multiplier = 2;
    setHidden("none");
    hitCounter(dartX,multiplier);
  };

  const multiplierTriple = () => {
    let multiplier = 3;
    setHidden("none");
    hitCounter(dartX,multiplier);
  };

  const LoaderStyle = {
    width: `${counter}%`,
  };

  const MultiplierStyle = {
    display: `${hidden}`,
  };

  const BullStyle = {
    display: `${hiddenBull}`,
  };

  const ScoreStyle = {
    display: `${hiddenScore}`,
  };

  const PlayersStyle = {
    display: `${hiddenPlayers}`,
  };

  useEffect(() => {
    setTurnSum(dart1 + dart2 + dart3);
    navigator.vibrate(100);
  }, [dart1, dart2, dart3]);

  const bullCount = () => {
    hitCounter(25,1);
    setHiddenBull("none");
  };

  const bullseyeCount = () => {
    hitCounter(50,1);
    setHiddenBull("none");
  };

  return (
    <div className="Appview">
      <div className="multiplier-counter" style={LoaderStyle}></div>
      <div className="turn"> {Math.floor(turn - turn / 2) + 1}</div>
      <div className="header">
        <div className="p1">
        <h1 className={turn % 2 === 0 ? "active" : "not-active"}>
        {p1name} <br></br>{p1} <br></br>  <div className="smally">{turn % 2 === 0 ? p1 - turnSum : ''}</div>
        </h1>
        </div>

        <div className="p2">
        <div className="p2float">
        <h1 className={turn % 2 !== 0 ? "active" : "not-active"}>
        {p2name} <br></br> {p2} <br></br>  <div className="smally">{turn % 2 === 0 ? '' : p2 - turnSum}</div>
        </h1>
        </div>
        </div>      
       </div>
      <div onClick={() =>  setHiddenScore('block')} className="dart-sum"> <h2 className="noselect"> Szumma: {turnSum}   </h2> </div>
   
      <div className="darts">
        <button className="button-dart" onClick={() => setD1(0)}>
          {dart1x}
          <img className={dart1 === 0 ? "dart-img-0" : "dart-img"} src={dart} alt="dart" />
        </button>
        <button className="button-dart" onClick={() => setD2(0)}>
          {dart2x}
          <img className={dart2 === 0 ? "dart-img-0" : "dart-img"} src={dart} alt="dart" />
        </button>
        <button className="button-dart" onClick={() => setD3(0)}>
          {dart3x}
          <img className={dart3 === 0 ? "dart-img-0" : "dart-img"} src={dart} alt="dart" />
        </button>
      </div>
   
      <div className="board-holder">     
       <ul className="board">
        {slices.map(function (item, i) {
          let design_slice = i % 2 ? "slice-contents" : "slice-contents-wheat";
          return (
            <li className="slice">
              <div
                className={design_slice}
                id={item}
                onClick={hit}
                onTouchStart={startCounter}
                onTouchEnd={stopCounter}>
              </div>
            </li>

          );
        })}
          
      <span onClick={() => setHiddenBull("block")} className={"bull"}></span>
      </ul> 
      <img className="dartboard-img" src={dartboard} alt="" />
  
      </div>
  
    
        <button className="button-normal" onClick={endTurn}>      <p className="noselect">Tovább </p>      </button>
   

      <div className="multiplier-fullscreen" style={MultiplierStyle}>
        <button onClick={multiplierDouble} className="double">
          <h1 className="noselect">Dupla <br></br> {dartX}</h1>
        </button>
        <button onClick={multiplierTriple}  className="triple">
          <h1 className="noselect">Tripla <br></br> {dartX}</h1>
        </button>

        <button className="button-normal" onClick={() =>  setHidden('none')} > <p className="noselect"> Mégse  </p> </button>
 
      </div>

      <div className="multiplier-fullscreen" style={BullStyle}>
        <button onClick={bullCount}  className="double">
          <h1 className="noselect">25</h1>
        </button>
        <button onClick={bullseyeCount}  className="triple">
          <h1 className="noselect">BULLSEYE</h1>
        </button>

        <button className="button-normal" onClick={() =>  setHiddenBull('none')} > <p className="noselect"> Mégse  </p> </button>
 
      </div>

      <div style={ScoreStyle}> <Score scorep1={p1} scorep2={p2} scorehistoryp1={roundsP1}  scorehistoryp2={roundsP2} setscoreboardvisibility={setHiddenScore} scoreboardvisibility={hiddenScore} p1name={p1name} p2name={p2name}/></div>
      <div style={PlayersStyle}> <Players sethiddenplayers={setHiddenPlayers} p1name={p1name} p2name={p2name} setp1name={setP1name} setp2name={setP2name} /></div>
  
    </div>
  );
}

export default App;
