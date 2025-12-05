import {useState} from 'react'

export default function LudoPlayers2(){
    let [score, setScore] = useState({blue:0, green:0, red:0, yellow:0})

    function handleScore(color){
        setScore((prevScore)=>{
            return {...prevScore, [color]: prevScore[color] +1}
        })
    }
    return(
        <>
            <p>Score={score.blue}</p>
            <button onClick={()=>handleScore("blue")} style={{backgroundColor:'blue'}}>Blue+1</button>
            <p>Score={score.yellow}</p>
            <button onClick={()=>handleScore("yellow")} style={{backgroundColor:'yellow', color:'black'}}>Yellow+1</button>
            <p>Score={score.green}</p>
            <button onClick={()=>handleScore("green")} style={{backgroundColor:'green'}}>Green+1</button>
            <p>Score={score.red}</p>
            <button onClick={()=>handleScore("red")} style={{backgroundColor:'red'}}>Red+1</button>

        </>
    )
}