import {useState} from 'react'
export default function LudoPlayer1({color}){
    let [score, setScore] = useState(0)

    function handleScore(){
        setScore((prevScore)=>{
        return prevScore+1;
    })}

    return(
        <>
        
            <p>{color}={score}</p>
            <button onClick={handleScore} style={{backgroundColor: color, color: color=='Yellow'?"black":'white'}}>{color}+1</button>
        
        </>
    )
}