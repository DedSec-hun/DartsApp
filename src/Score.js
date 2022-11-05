import './App.css';

const Score = (props) => {


  return(
<div className='scoreBoard'>
<table className='table-dark'>
<tr>
<th></th>
    <th> {props.scorep1}</th>
    <th>{props.scorep2}</th>
</tr>
<tr>
<th>#</th>
    <th> {props.p1name}</th>
    <th>{props.p2name}</th>
</tr>
  {props.scorehistoryp1.map(function (item, i) {
            return (
              <tr key={i}>
              <td>{i}</td>
              <td>{item}</td>
              <td>{props.scorehistoryp2[i]}</td>
            </tr>
          );
        })}

<tr>
  <td>Átlag kör:</td>
  <td>{ props.scorehistoryp1.length > 0 ?  Math.floor(props.scorehistoryp1.reduce((a,v) =>  a = a + v) / props.scorehistoryp1.length): '' }</td>
  <td>{ props.scorehistoryp2.length > 0 ? Math.floor(props.scorehistoryp2.reduce((a,v) =>  a = a + v ) / props.scorehistoryp2.length): '' }</td>
</tr>
</table> 
<div>
<button className='button-normal' onClick={()=> props.setscoreboardvisibility('none')} >Vissza</button>
</div>

</div>

  )}
  

export default Score;
