import { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

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
            <div className="counter" >
                <button onClick={this.increment}> +{this.props.by}</button>
                <span className="count" >{this.state.counter} </span>
            </div >
        );
    }
    increment() {
        //update state counter ++
        console.log('increment');
        this.setState({
            counter: this.state.counter + this.props.by

        });
    }
}

Counter.defaultProps = {
    by: 1
}
Counter.propTypes = {
    by: PropTypes
}
export default Counter;


//no need for this.bind:
// increment = () => {
//     //update state counter ++
//     console.log('increment');
//     this.setState({
//         counter: this.state.counter + 1

//     });
// }
