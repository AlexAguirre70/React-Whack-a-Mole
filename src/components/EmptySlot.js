import {useEffect} from 'react'

export default function EmptySlot(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.setTheMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '15vw'}}
            src='../../molehill.png'
            onClick={props.handleClick} />
        </div>
    )
}