import './App.css';
import React, { useState, useEffect } from 'react';

const Score = (props) => {


  return(
  <div className='scoreBoard'>

<table>
  <tr>
    <th> {props.scorep1}</th>
    <th>{props.scorep2}</th>
  </tr>
  {props.scorehistoryp1.map(function (item, i) {
            return (

              <tr>
              <td>{item}</td>
              <td>{props.scorehistoryp2[i]}</td>
  
            </tr>
          );
        })}
</table> 
<div>

<button className='button-normal' onClick={()=> props.setscoreboardvisibility('hidden')} >Back</button>

</div>

  </div>

  )}
  

export default Score;
