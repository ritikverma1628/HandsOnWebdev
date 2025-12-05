import TodoApp from './TodoApp'
import './App.css'

function App() {


  return (
    <>
      <h1>Create your ToDo List:</h1>
      <form action="">
        <input type="text" placeholder='Add task' style={{height:'32px', borderRadius:'10px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;
        <button>ADD</button>
      </form>
      <br /><br />
      <hr />
      <TodoApp></TodoApp>
    </>
  )
}

export default App
