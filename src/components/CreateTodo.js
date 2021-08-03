import React, {useState} from 'react';

function CreateTodo(props) {

    const [studentform, setStudentform] = useState('')
    const [taskform, setTaskform] = useState('')


    const Addmethod = e => {
        props.addTask(studentform,taskform);
        e.preventDefault()

    }

    const Inputcontrol = e => {
        setStudentform(e.target.value)

    }
    const Textcontrol = e => {
        setTaskform(e.target.value)

    }



    return (
        <div className="formulario">
            <h1 className="tittle">TASKS MOJICAPP</h1>
            <form  onSubmit={Addmethod}>
                <input
                    className="input"
                    type="text"
                    name="student"
                    placeholder="student name"
                    onChange={Inputcontrol}
                    value={studentform}/>
                <br/>

                <textarea
                    className="text"
                    name="task"
                    placeholder="write a task"
                    onChange={Textcontrol}
                    value={taskform}/>
                <br/>
                <button className="add" type="submit"> ADD THIS TASK</button>
            </form>
        </div>
    )

}
export default CreateTodo