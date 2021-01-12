import React from 'react';
import Task from './components/Task/Task.js';
import TaskInput from './components/TaskInput/TaskInput.js';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.doneTasks = this.doneTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
            tasks: [
                {id: 0, title: "First", done: false},
                {id: 1, title: "Second", done: true},
                {id: 2, title: "Third", done: false}
            ]
        }
    }

    addTask(task){
        this.setState(state => {
            let {tasks} = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length : 0,
                title: task,
                done: false
            })
            return tasks;
        });

    }
    doneTask(id){
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            return tasks;
        })
    }
    deleteTask(id){
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            delete tasks[index];
            return tasks;
        });
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
                <TaskInput addTask={this.addTask}/>
                
            </div>
        );
    }
}

export default App;