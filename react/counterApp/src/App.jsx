import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let up = ()=>{
    if(count<20)
    setCount(count+1);
  }

  let down = ()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <>
      <h1>value of counter is: {count}</h1>
    <button onClick={up}>Level Up</button>
      <br /><br />
      <button onClick={down}>Level Down</button>
    </>
  )
}

export default App
