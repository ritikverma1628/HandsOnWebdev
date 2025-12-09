import { useState, useEffect } from "react";
export default function Counter(){
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)

    function increaseCount1(){
        setCount1((count)=>{
            return count+1;
        })
    }
    
    function increaseCount2(){
        setCount2((count)=>{
            return count+1;
        })
    }

    useEffect(()=>{
        console.log('button was clicked');
    },[count1])

    return(
        <>
        
        <button onClick={increaseCount1}>Increase Count1 {count1}</button>
        <button onClick={increaseCount2}>Increase Count2 {count2}</button>
        </>
    )
}