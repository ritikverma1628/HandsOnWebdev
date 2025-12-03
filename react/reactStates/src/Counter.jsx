import {useState} from 'react'

export default function Counter(){
    let [count, setCount] = useState(0)  //count is a state variable and can be changed using the setCount function , the component re-renders only after the setCount funciton is invoked
    
    function increaseCount(){
        setCount(count+1);
        console.log(count)
    }

    return(
        <>
            <p onClick={increaseCount}>Count={count}</p>
        </>
    )
}