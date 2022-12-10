import React, { Component } from "react";
import './style.css';

class FirstComponent extends Component {
    
    constructor(props) {
        super(props) 
        this.state = {
            number: 1
        }
    }

    changeValue = (event) => {
        let first_inp = document.getElementById('first-inp');
        if(event.target.innerHTML === "+") {
            first_inp.value = first_inp.value * 1 + this.state.number;
        } else {
            if((first_inp.value - this.state.number) < 0) {
                alert("The value can't be less then 0!");
                return;
            }
            first_inp.value -= this.state.number;
        }
    }

    updateState = () => {
        let second_inp = document.getElementById('second-inp');
        this.setState({number: second_inp.value * 1});
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.changeValue}>+</button>
                <input className="inp" id="first-inp" type="number" defaultValue={0}/>
                <button className="btn" onClick={this.changeValue}>-</button>
                <h1>Change the Increment and Decrement Values</h1>
                <input className="inp" id="second-inp" type="number" onChange={this.updateState}/>
            </div>
        );
    }
}

export default FirstComponent;
