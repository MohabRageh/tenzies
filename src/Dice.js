import React from 'react'

export default function Dice({dice,setdice}) {
    const hold=()=>{
        
        setdice(prev=>prev.map(
            (d)=>{
            return d.id===dice.id? {...dice,isOnHold:!dice.isOnHold}:d
        }))
        console.log(dice)
    }
  return (
    <div className='dice'  >
        <button className={dice.isOnHold? "onHold" :""} onClick={hold}>
            {dice.number}
        </button>
    </div>
  )
}
