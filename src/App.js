import {useState} from "react";
import './App.css';
import CreateTodo from "./components/CreateTodo";
import todoinfo from './tareas.json'
import TodoContainer from "./components/TodoContainer";
import TodoItem from "./components/TodoItem";

console.log(todoinfo);

function App() {

  const[completetasks,setCompletetasks] = useState('')
  const[pendingstasks,setPendingstasks] = useState('')
  const[tasks, setTasks] = useState(todoinfo)

  const addTask = (student,task) =>{
    const newtask = {
      person: student, todo: task, id:tasks.length
    }

    setTasks([...tasks, newtask])
  }
  const deleteTask=(id)=>{
    const newtasks =  tasks.filter(task =>task.id !== id)
    setTasks(newtasks)
  }

  const Done=(id)=>{
    const newTasks= tasks.map(task =>{
      if (task.id === id){
        task.ready =!task.ready
      }
      return task;
    })
    setTasks({newTasks})
  }

  const complete=(id)=>{
    const  newTasks= tasks.map(task =>{
      if(task.id === true){
        setCompletetasks(newTasks)
      }
    })

  }

  const pendings=(id)=>{
    const  newTasks= tasks.map(task =>{
      if(task.id === false){
        setCompletetasks(newTasks)
      }
    })
  }
  return (



      <div className="app">
        <CreateTodo addTask={addTask}/>

        <div className="organice">
          <div className="or">STUDENT</div><div className= "or">TASK</div><div className= "or">ID</div>
        </div>
        <TodoContainer tasks={tasks} deleteTask={deleteTask} Done={Done} complete={complete} pendings={pendings}/>
        <br/>
        <div className="pending">COMPLETE TASKS</div>
        <div>

        </div>


      </div>

  );
}

export default App;

