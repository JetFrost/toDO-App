import React from 'react';
import './Task.css';

const Action = (props) => {
    return  <div>
                {props.task.done ? 
                    <p onClick={props.deleteTask} className="action-button">Delete</p> : 
                    <p onClick={props.doneTask} className="action-button">Complete</p>
                }
            </div>
}

export default function Task(props){
    const className = 'task-body' + (props.task.done ? '-done' : '');
    return(
        <div className={className}>
            <p className="task-title">{props.task.title}</p>
            <Action onClick={props.task.done ? props.deleteTask : props.doneTask} 
                    task={props.task} />
        </div>
    );
}