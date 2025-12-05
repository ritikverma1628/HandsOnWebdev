import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoApp(){

    let [todoTasks, settodoTasks] = useState([{taskName:'', id:''}])
    let [task, setTask] = useState('')

    function handletodoTasks(event){
        event.preventDefault();
        settodoTasks([...todoTasks, {taskName:task, id:uuidv4()}]);
        setTask('')
        
    }

    function handleTask(event){
        setTask(event.target.value)
    }

    return(
        <>
            <form action="">
                <input type="text" placeholder='Add task' value={task} onChange={handleTask} style={{height:'36px', borderRadius:'8px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handletodoTasks}>ADD</button>
            </form>
            <br /><br />
            <hr />
            <p>----------ToDo List----------</p>
            <div>{todoTasks.map((todoTask)=><p key={todoTask.id}>{todoTask.taskName}</p>)}</div>
        </>
    )
}