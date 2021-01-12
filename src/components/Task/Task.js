import React from 'react';
import './Task.css';

export default function Task(props){
    const className = 'task-body' + (props.task.done ? '-done' : '');
    const Action = () => {
        return <div>{props.task.done ? <p onClick={props.deleteTask} className="action-button">Delete</p> : <p onClick={props.doneTask} className="action-button">Complete</p>}</div>
    }
    return(
        <div className={className}>
            <p className="task-title">{props.task.title}</p>
            <Action />
        </div>
    );
}