import React, {Component} from "react";

// Lifecycle of componnent, it borns, lives and dies
export class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeBy: 1
        }
    }

    change = (e) => {
        this.setState({changeBy: e.target.value});
    }

    componentDidMount() {
        console.log("Component is born");
    } // calls itsel ones when the component is created first time

    // shouldComponentUpdate() {
    //     return false;
    // } // doesn't let you rerender state and props

    componentDidUpdate() {
        console.log("updated");
    } // calls itself when the state and props are changed

    componentWillUnmount() {
        console.log("Component is dead");
    } // calls itself when the component is dead

    render() {
        return <div>
            {/* {console.log("start")} */}
                <input type="text" onChange={this.change}/>
            </div>
    }
}