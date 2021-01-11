import React from 'react';
import Btn from '../Btn/Btn.js'
import './Add-bar.css';

class Addbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(e){
        this.setState({
            value: e.taget.value
        })
    }
    // handleInput(){
    //     this.props.add(() => )
    // }

    render(){
        return(
            <div>
                <input 
                value={this.state.value}
                onChange={this.handleChange()}/>
                <Btn 
                onClick={() => this.handleInput()}/>
            </div>
        )
    }
}