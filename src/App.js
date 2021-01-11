import React from 'react';
import Head from './components/Head/Head.js';
import Task from './components/Task/Task.js';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            tasks: [
                { title: 'first'}
            ]
        };
    }

    handleDelete(i){
        let newTasks = this.state.tasks.slice();
        delete newTasks[i];
        this.setState({
            tasks: newTasks
        }) 
    }

    handleAdd(value){
        let newTasks = this.state.tasks.slice();
        newTasks.push({title: value});
        this.setState({
            tasks: newTasks
        }) 
    }

    render(){
        let tasks = this.state.tasks.map((task, i) => {
            return (
                <Task key={i} onClick={() => this.handleDelete(i)} title={this.state.tasks[i].title}/>
            )
        });
        return(
            <div className='app-body'>
                <Head tasks={this.state.tasks.length}/>
                {tasks}
            </div>
        );
    }
}

export default App;