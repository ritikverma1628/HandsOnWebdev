import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoPlayers1 from './LudoPlayers1'
import LudoPlayers2 from './LudoPlayers2'
import './App.css'

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <LikeButton/> */}

{/* 1 in the name of the files and functions denote that this approach simply used separate integer state variables for each ludo player, and doesn't use a single object type state variable for all the ludo players */}
      {/* <LudoPlayers1></LudoPlayers1>    */}


{/* this approach uses the concept of state variables as Objects */}
      <LudoPlayers2></LudoPlayers2>

    </>
  )
}

export default App
