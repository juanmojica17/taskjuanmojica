import React from 'react';

function TodoItem(props) {


    return(

        <div className="nose"  >
            <input className="check" type={"checkbox"} onChange={props.Done}/>
            <button className="delete" onClick={props.deleteTask.bind(this, props.task.id)}>
                X
            </button>

            <div className="taskway"> {props.task.person}</div>
            <div className="taskway">{props.task.todo}</div>
            <div className="taskway">{props.task.id}</div>

            <br/>

        </div>
    )
}
export default TodoItem