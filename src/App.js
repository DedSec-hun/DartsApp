import "./App.css";
import React, { useState, useEffect } from "react";
import dart from "./dart.png";
import Score from "./Score";
import Players from "./Players";

function App() {
  const [counter, setCounter] = React.useState(0); //hook jó lenne figyelni
  const [hidden, setHidden] = useState("hidden");
  const [hiddenBull, setHiddenBull] = useState("hidden");
  const [hiddenScore, setHiddenScore] = useState("hidden");
  const [hiddenPlayers, setHiddenPlayers] = useState("visible");
  const [dartX, setDartX] = useState(0);
  const intervalRef = React.useRef(null);

  const [dart1, setD1] = useState(0);
  const [dart2, setD2] = useState(0);
  const [dart3, setD3] = useState(0);

  const [turn, setTurn] = useState(0);
  const [turnSum, setTurnSum] = useState(0);

  const [p1, setP1] = useState(501);
  const [p1name, setP1name] = useState('Játékos1');
  const [roundsP1, setRoundsP1] = useState([]);
  const [p2, setP2] = useState(501);
  const [p2name, setP2name] = useState('Játékos2');
  const [roundsP2, setRoundsP2] = useState([]);

  let slices = [1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20];

  const endTurn = () => {
    if (turn % 2 === 0) {setP1(p1 - turnSum); setRoundsP1(roundsP1 => [...roundsP1,turnSum]);}
    if (turn % 2 !== 0) {setP2(p2 - turnSum); setRoundsP2(roundsP2 => [...roundsP2,turnSum]);}
    setTurn(turn + 1);
    setD1(0);
    setD2(0);
    setD3(0);
    navigator.vibrate(200);
  };

function hitCounter(dart, multiplier) {

  if (dart1 === 0) {
    setD1(dart * multiplier);
    return;
  }
  if (dart2 === 0) {
    setD2(dart * multiplier);
    return;
  }
  if (dart3 === 0) {
    setD3(dart * multiplier);
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
      }
      setCounter(0);
    }
  };

  function multiplier(dart) {
    setDartX(dart);
    setHidden("visible");
    console.log(dart);
  }

  const multiplierDouble = () => {
    let multiplier = 2;
    setHidden("hidden");
    hitCounter(dartX,multiplier);
  };

  const multiplierTriple = () => {
    let multiplier = 3;
    setHidden("hidden");
    hitCounter(dartX,multiplier);
  };

  const LoaderStyle = {
    width: `${counter}%`,
  };

  const MultiplierStyle = {
    visibility: `${hidden}`,
  };

  const BullStyle = {
    visibility: `${hiddenBull}`,
  };

  const ScoreStyle = {
    visibility: `${hiddenScore}`,
  };

  const PlayersStyle = {
    visibility: `${hiddenPlayers}`,
  };

  useEffect(() => {
    setTurnSum(dart1 + dart2 + dart3);
  }, [dart1, dart2, dart3]);

  const bullCount = () => {
    hitCounter(25,1);
    setHiddenBull("hidden");
  };

  const bullseyeCount = () => {
    hitCounter(50,1);
    setHiddenBull("hidden");
  };

  return (
    <div className="Appview">
      <div className="multiplier-counter" style={LoaderStyle}></div>
      <div className="dart-sum"> <h2 className="noselect"> Kör: {Math.floor(turn - turn / 2)} Szumma: {turnSum} Jelenleg: {turn % 2 === 0 ? p1 - turnSum : p2 - turnSum}   </h2> </div>
      <div className="darts">
        <button className="button-dart" onClick={() => setD1(0)}>
          {dart1}
          <img className="dart-img" src={dart} alt="dart" />
        </button>
        <button className="button-dart" onClick={() => setD2(0)}>
          {dart2}
          <img className="dart-img" src={dart} alt="dart" />
        </button>
        <button className="button-dart" onClick={() => setD3(0)}>
          {dart3}
          <img className="dart-img" src={dart} alt="dart" />
        </button>
      </div>
    
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
                <p className="p-slice" >{item}</p>
              </div>
            </li>
          );
        })}
        <span onClick={() => setHiddenBull("visible")} className={"bull"}>
        </span>
      </ul>
     
      <div className="bottom">
      <button className="button-normal" onClick={() =>  setHiddenScore('visible')} > <p className="noselect">Score </p> </button>
        <h1 className={turn % 2 === 0 ? "active" : "not-active"}>
        {p1name} <br></br>{p1}
        </h1>
        <h1 className={turn % 2 !== 0 ? "active" : "not-active"}>
        {p2name} <br></br> {p2}
        </h1>
        <button className="button-normal right" onClick={endTurn}>
      <p className="noselect">Next </p>
      </button>
      </div>

      <div className="multiplier-fullscreen" style={MultiplierStyle}>
        <button onClick={multiplierDouble} className="double">
          <h1 className="noselect">Double <br></br> {dartX}</h1>
        </button>
        <button onClick={multiplierTriple}  className="triple">
          <h1 className="noselect">Triple <br></br> {dartX}</h1>
        </button>
      </div>

      <div className="multiplier-fullscreen" style={BullStyle}>
        <button onClick={bullCount}  className="double">
          <h1 className="noselect">25</h1>
        </button>
        <button onClick={bullseyeCount}  className="triple">
          <h1 className="noselect">BULLSEYE</h1>
        </button>
      </div>

      <div style={ScoreStyle}> <Score scorep1={p1} scorep2={p2} scorehistoryp1={roundsP1}  scorehistoryp2={roundsP2} setscoreboardvisibility={setHiddenScore} scoreboardvisibility={hiddenScore} /></div>
      <div style={PlayersStyle}> <Players sethiddenplayers={setHiddenPlayers} p1name={p1name} p2name={p2name} setp1name={setP1name} setp2name={setP2name} /></div>
  
    </div>
  );
}

export default App;
