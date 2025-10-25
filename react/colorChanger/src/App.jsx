import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
    <div className="vh-100 d-flex justify-content-center align-items-center pb-5" style={{backgroundColor:color}} >
        <div className=' h-auto position-fixed bottom-0 mb-5 bg-warning  d-flex justify-content-center align-items-center'>

          <button onClick={()=>{setColor("blue")}} className='btn btn-primary m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("grey")}} className='btn btn-secondary m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("red")}} className='btn btn-danger m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("green")}} className='btn btn-success m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("black")}} className='btn btn-dark m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("white")}} className='btn btn-light m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("yellow")}} className='btn btn-warning m-2 p-1 px-3 rounded-pill'>hi</button>
          <button onClick={()=>{setColor("aqua")}} className='btn btn-info m-2 p-1 px-3 rounded-pill'>hi</button>

        </div>
    </div>
    </>
  )
}

export default App
