import React from 'react';
import './Btn.css'

export default function Btn(props){
    return(
        <button 
        className="btn"
        onClick={props.onClick}>
            {props.btnTitle}
        </button>
    );
}