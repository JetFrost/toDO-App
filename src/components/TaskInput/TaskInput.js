import React from 'react';
import './TaskInput.css';

class TaskInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
            input: ''
        };
    }

    addTask(){
        const {input} = this.state;
        if(input){
            this.props.addTask(input);
            this.setState({input: ''});
        }
    }

    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }
    handleEnter(e){
        if(e.key === "Enter"){
            this.addTask();
        }
    }

    render(){
        const {input} = this.state;
        return(
            <div className="ti-body">
                <input 
                    className="inp"
                    onChange={this.handleChange} 
                    onKeyPress={this.handleEnter}
                    value={input}/>
                <button className="b" onClick={this.addTask}>ADD</button>
            </div>
        );
    }
}

export default TaskInput;