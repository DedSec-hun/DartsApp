import './App.css';

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
              <td>{i}</td>
              <td>{item}</td>
              <td>{props.scorehistoryp2[i]}</td>
            </tr>
          );
        })}

<tr>
  <td>AVG</td>
  <td>{ props.scorehistoryp1.length > 0 ?  Math.floor(props.scorehistoryp1.reduce((a,v) =>  a = a + v) / props.scorehistoryp1.length): '' }</td>
  <td>{ props.scorehistoryp2.length > 0 ? Math.floor(props.scorehistoryp2.reduce((a,v) =>  a = a + v ) / props.scorehistoryp2.length): '' }</td>
</tr>
</table> 
<div>
<button className='button-normal' onClick={()=> props.setscoreboardvisibility('hidden')} >Back</button>
</div>

</div>

  )}
  

export default Score;
