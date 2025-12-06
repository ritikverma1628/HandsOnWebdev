import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoApp(){

    let [todoTasks, settodoTasks] = useState([])
    let [task, setTask] = useState('')

    function handletodoTasks(event){
        event.preventDefault();
        settodoTasks((todoTasks)=>[...todoTasks, {taskName:task, id:uuidv4()}]);
        setTask('')
        
    }

    function handleTask(event){
        setTask(event.target.value)
    }

    function deleteTask(id){
        settodoTasks((todoTasks)=>todoTasks.filter((todoTask)=>{
            if(todoTask.id!=id){
                return todoTask;
            }
        }))
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
            <div>
            
                {todoTasks.map((todoTask)=>
                    <div key={todoTask.id}>
                        <span key={todoTask.id}>{todoTask.taskName}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTask(todoTask.id)} >Delete</button>
                    </div>)
                }

            </div>
        </>
    )
}