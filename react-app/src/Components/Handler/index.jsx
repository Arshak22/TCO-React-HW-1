import React, { Component } from "react";
import './style.css';

export class Handler extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            number: 0,
            value: 1
        }
    }

    Plus = () => {
        this.setState({number: +this.state.number + +this.state.value});
    }

    Minus = () => {
        if(this.state.number <= 0) {
            this.setState({number: 0});
            return;
        }
        this.setState({number: +this.state.number - +this.state.value});
    }

    HandleChange = (e) => {
        if(e.target.value === "") {
            this.setState({value: 1});
            return;
        }
        this.setState({value: e.target.value});
    }

    render() {
        const{text, image} = this.props;
        return (
            <div>
                <button className="btn" onClick={this.Plus}>+</button>
                <input className="inp" type="number" value={this.state.number}/>
                <button className="btn" onClick={this.Minus}>-</button>
                <h1>Change the Increment and Decrement Values</h1>
                <input className="inp" type="number" onChange={this.HandleChange}/>
                <p>{text}</p>
                {image ? <img src={image} alt="nkar"/>: null}
            </div>
        );
    }
}