import { useState , useEffect} from "react"

export default function  Jokes(){
    
    let [joke, setJoke] = useState({})
    async function getJoke(){
       let response = await fetch('https://official-joke-api.appspot.com/random_joke');
       let {setup, punchline} = await response.json();

       setJoke({setup, punchline})   
    }

    useEffect(()=>{
        getJoke()
    }, [])

    return(
        <>
            <div>{joke.setup}</div>
            <div>{joke.punchline}</div>
            <button onClick={getJoke}>Get another joke</button>
        </>
    )
}