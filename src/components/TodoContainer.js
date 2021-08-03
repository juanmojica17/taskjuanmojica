import React from 'react';
import TodoItem from './TodoItem'

function TodoContainer(props){
    return(
        <div className="task">
            {props.tasks.map(task=>
                <TodoItem
                    task={task}
                    key={task.id}
                    deleteTask={props.deleteTask}
                    checkBox={props.Done}
                    complete={props.complete}
                    pendings={props.pendings}/>

            )}
        </div>


    )
}
export default TodoContainer