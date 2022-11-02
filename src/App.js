import "./App.css";
import React, { useState, useEffect } from "react";
import dart from "./dart.png";
function App() {
  const [counter, setCounter] = React.useState(0); //hook jó lenne figyelni
  const [hidden, setHidden] = useState("hidden");
  const [hiddenBull, setHiddenBull] = useState("hidden");
  const [dartX, setDartX] = useState(0);
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

  let slices = [
    1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20,
  ];

  const endTurn = () => {
    if (turn % 2 == 0) setP1(p1 + turnSum);
    if (turn % 2 != 0) setP2(p2 + turnSum);
    roundsP1.push(turnSum);
    setTurn(turn + 1);
    setD1(0);
    setD2(0);
    setD3(0);
  };

  const hit = (event) => {
let hitvalue = parseInt(event.target.id);
    if (dart1 == 0) {
      setD1(hitvalue);
      return;
    }
    if (dart2 == 0) {
      setD2(hitvalue);
      return;
    }
    if (dart3 == 0) {
      setD3(hitvalue);
      return;
    }
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
    if (dart1 == 0) {
      setD1(dartX * multiplier);
      return;
    }
    if (dart2 == 0) {
      setD2(dartX * multiplier);
      return;
    }
    if (dart3 == 0) {
      setD3(dartX * multiplier);
      return;
    }
  };

  const multiplierTriple = () => {
    let multiplier = 3;
    setHidden("hidden");
    if (dart1 == 0) {
      setD1(dartX * multiplier);
      return;
    }
    if (dart2 == 0) {
      setD2(dartX * multiplier);
      return;
    }
    if (dart3 == 0) {
      setD3(dartX * multiplier);
      return;
    }
  };

  const Loader = {
    width: `${counter}%`,
  };

  const Multiplier = {
    visibility: `${hidden}`,
  };

  const Bully = {
    visibility: `${hiddenBull}`,
  };

  useEffect(() => {
    setTurnSum(dart1 + dart2 + dart3);
  }, [dart1, dart2, dart3]);

  const bullCount = (event) => {
    if (dart1 == 0) {
      setD1(25);
      setHiddenBull("hidden");
      return;
    }
    if (dart2 == 0) {
      setD2(25);
      setHiddenBull("hidden");
      return;
    }
    if (dart3 == 0) {
      setD3(25);
      setHiddenBull("hidden");
      return;
    }

    setHiddenBull("hidden");
  };

  
  const bullseyeCount = (event) => {
    if (dart1 == 0) {
      setD1(50);
      setHiddenBull("hidden");
      return;
    }
    if (dart2 == 0) {
      setD2(50);
      setHiddenBull("hidden");
      return;
    }
    if (dart3 == 0) {
      setD3(50);
      setHiddenBull("hidden");
      return;
    }

    setHiddenBull("hidden");
  };

  return (
    <div className="Appview">
      <h1> Kör: {Math.floor(turn - turn / 2)}</h1>
      <h1> Kör szumma: {turnSum}</h1>
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
      <button className="multiplier-counter" style={Loader}>
        {counter}
      </button>

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

      <button className="button-normal"> <p className="noselect">Score </p> </button>
      <button className="button-normal" onClick={endTurn}>
      <p className="noselect">next </p>
      </button>

      <div>
        
        <h1 className={turn % 2 == 0 ? "active" : "not-active"}>
          Jatekos1: {p1}
        </h1>
        <h1 className={turn % 2 != 0 ? "active" : "not-active"}>
          Jatekos2: {p2}
        </h1>
      </div>

      <div className="multiplier-fullscreen" style={Multiplier}>
        <button onClick={multiplierDouble} className="double">
          
          <h1 className="noselect">Double <br></br> {dartX}</h1>
        </button>
        <button onClick={multiplierTriple}  className="triple">
          <h1 className="noselect">Triple <br></br> {dartX}</h1>
        </button>
      </div>

      <div className="multiplier-fullscreen" style={Bully}>
        <button onClick={bullCount}  className="double">
          
          <h1 className="noselect">25</h1>
        </button>
        <button onClick={bullseyeCount}  className="triple">
          <h1 className="noselect">BULLSEYE</h1>
        </button>
      </div>
      {/* <Score scorep1={p1} scorep2={p2} scorehistoryp1={roundsP1}  scorehistoryp2={roundsP2}/> */}
    </div>
  );
}

export default App;
