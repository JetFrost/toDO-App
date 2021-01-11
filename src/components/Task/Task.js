import React from 'react';
import Btn from '../Btn/Btn.js'
import './Task.css';

export default function Task(props){
    return(
        <div className='task-body'>
            <p>{ props.title }</p>
            <Btn
            onClick={props.onClick}
            btnTitle='Delete' />
        </div>
    );
}