import {useState,useEffect } from "react";
import Mole from "./components/Mole";
import EmptySlot from "./components/EmptySlot";

export default function MoleContainer (props) {
    let [theMole,setTheMole]=useState(false)
    
    const handleClick=(e)=> {
        props.setScore(props.score +1)
        setTheMole(false)
    }
    let displayMole = theMole?<Mole setscore={props.setScore} handleClick={handleClick}/>:<EmptySlot toggle={setTheMole} />
    return(
        <div style={{'display':'inline-block', 'width':'15vw'}}>
           {displayMole}
        </div>
    )

}