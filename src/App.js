import './App.css';
import React, { useState } from 'react';

function App() {
const nohits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  const [turn, setTurn] = useState(true);

  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  let alignHits = [1,17,2,10,2,5,9,-5,9,-6,9,-4,4,-5,-3,-1,-7,-5,-13,1];
  const [bull, setBull] = useState(0);
  const [hits, setHit] = useState(nohits);

 
const endTurn = () => {
  let sum = 0; 
  hits.map(( multiplier, index) => ( sum = sum + (multiplier * (index + alignHits[index] ))));
  sum += bull;

  console.log(sum);

setHit(nohits);
setBull(0);
}


  const hit = event => {
    let x = event.currentTarget.id -1;
    const newhits = hits.map((k, i) => {
      if (i == x) {
        if (k == 3) return 0;
        return k + 1;
      } else {
        return k;
      }
    });
    setHit(newhits);
  };

  const bully = event => {
setBull(bull + 25) 
if (bull == 50) setBull(0);
  };


  return (
      <div className="Appview">
<ul className='board'>
{
hits.map(function(item, i){
  let multiplier = '';
  switch(item) {
    case 1:
       multiplier = 'S';
      break;
    case 2:
       multiplier = 'D';
      break;
      case 3:
         multiplier = 'T';
        break;
    default:
      multiplier = '';
  }
 let design_slice = i % 2 ? "slice-contents" : "slice-contents-wheat";
  return <li className='slice'>
          <div className={design_slice + '-' + item} onClick={hit} id={i +1}> <p> {multiplier}{i + alignHits[i]}</p> </div>
          </li>
})
}
<span className={"bull" + bull } onClick={bully}> <h3>{ bull == 0 ?  '' : bull}</h3>  </span>
</ul>

<button>Score</button>
<button onClick={endTurn}> Next</button>
      </div>
      
  );
}

export default App;
