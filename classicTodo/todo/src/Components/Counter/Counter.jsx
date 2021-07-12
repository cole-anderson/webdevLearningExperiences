import { Component } from 'react';
import './Counter.css'

class Counter extends Component {
    //Define inital state in constructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            //js obj
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }


    render() {
        return (
            <div className="Counter" >
                <button onClick={this.increment}> +1</button>
                <span className="count" >{this.state.counter} </span>
            </div >
        );
    }
    increment() {
        //update state counter ++
        console.log('increment');
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

export default Counter;
