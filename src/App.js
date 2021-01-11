import React from 'react';
import Task from './components/Task/Task.js';
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.doneTasks = this.doneTask.bind(this);
        this.state = {
            tasks: [
                {id: 0, title: "First", done: false},
                {id: 1, title: "Second", done: true},
                {id: 2, title: "Third", done: false}
            ]
        }
    }

    doneTask(id){
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            return tasks;
        })
    }

    render(){
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);

        return(
            <div className="app-body">
                <h1 className="title">Количество невыполненых задач: { activeTasks.length }</h1>
                {[...activeTasks, ...doneTasks].map(task => {
                    return <Task 
                            doneTask={() => this.doneTask(task.id)} 
                            deleteTask={() => this.deleteTask(task.id)} 
                            task={task} 
                            key={task.id} />
                })}
            </div>
        );
    }
}

export default App;