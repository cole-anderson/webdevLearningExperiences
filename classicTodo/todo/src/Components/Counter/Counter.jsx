import { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            //js obj
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter" >
                {/* <LearningComponents /> */}
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count" >{this.state.counter} </span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    reset() {
        this.setState(
            { counter: 0 }
        );
    }

    increment(by) {
        //update state counter ++
        console.log(`increment from parent - ${by}`);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by) {
        //update state counter ++
        console.log(`increment from parent - ${by}`);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }

}

/**
 * CounterButton
 */
class CounterButton extends Component {
    //Define inital state in constructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            //js obj
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    render() {
        return (
            <div className="counter" >
                < button className="pos" onClick={this.increment} > +{this.props.by}</button >
                < button className="neg" onClick={this.decrement} > -{this.props.by}</button >
                {/* <span className="count" >{this.state.counter} </span> */}
            </div >
        );
    }
    increment() {
        //update state counter ++
        console.log('increment');
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }
    decrement() {
        //update state counter ++
        console.log('decrement');
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by: 1,
    dir: true
}
CounterButton.propTypes = {
    by: PropTypes.number,
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
