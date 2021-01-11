import React from 'react';
import './Head.css'

export default function Head(props){
    return (
        <div className='head'>
            <h1>Незавершённых задач: { props.tasks }</h1>
        </div>
    )
}

