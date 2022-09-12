import {useEffect} from 'react'

export default function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.setTheMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '15vw'}}
            src='../../mole.png'
            onClick={props.handleClick} />
        </div>
    )
}
