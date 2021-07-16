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
    }

    render() {
        return (
            <div className="counter" >
                {/* <LearningComponents /> */}
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <span className="count" >{this.state.counter} </span>
            </div>
        );
    }
    increment(by) {
        //update state counter ++
        console.log(`increment from parent - ${by}`);
        this.setState({
            counter: this.state.counter + by
        });
    }

}


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
    }


    render() {
        return (
            <div className="counter" >
                < button onClick={this.increment} > +{this.props.by}</button >
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
}

CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
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
