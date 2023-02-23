import Dice from "./Dice";
import { useEffect, useState } from "react";

function App() {
const [diceList,setDiceList]=useState([])
const [Won,setWon]=useState(0)
useEffect(
  ()=>{
    restart()
  }
,[])
 useEffect(
  ()=>{
    const checkTheWin=()=>{
      let counter=0
      if(diceList.length)
      {
        if(diceList.every(d=>d.isOnHold===true))
        {
          let selectedDiceNumber=diceList[0].number
          //i just discovered the function which called every if i had learned it earlier i would change the next funcrion
          diceList.forEach((d)=>d.number===selectedDiceNumber?counter++:"")
        }
      }
      return counter===10?true:false
    }
    setWon(checkTheWin())
  }
,[diceList]) 
const roll=()=>{
  setDiceList(prev=>
    prev.map(
        (d)=> d.isOnHold===false?{...d,number:Math.ceil(Math.random()*6)}:{...d}
      )
    )
    
}
const restart=()=>{
  setDiceList([])
    for(let i=0;i<10;i++)
    {
      let diceFace=Math.ceil(Math.random()*6)
      setDiceList(prev=>([...prev,{
        id:prev.length,
        number:diceFace,
        isOnHold:false
      }]))
    }
}
  return (
      <div>
        <h1 style={{color:"white",marginLeft:"40%"}}>
          Tenzies
        </h1>
        <h2 style={{color:"white",marginBottom:"50px"}}>
          roll untill all dice are the same , click on the dice to frezee it 
        </h2>
        <div className="dice_container">
          {
            diceList.map(
                (dice)=>{
                  return <Dice  dice={dice} key={dice.id} setdice={setDiceList} />
                }
            )
          }
        </div>
        <button className="rollBtn" onClick={!Won?roll:restart}>
                {!Won?"roll":"Congratz !! wanna play again ?"}
        </button>
      </div>
  );
}

export default App;
