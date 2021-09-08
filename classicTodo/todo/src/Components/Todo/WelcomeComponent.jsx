/**
 * Class: Welcome Component(displays if login correct)
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this);
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage todos < Link to="/todos" > here </Link >.
                </div>

                <div className="container">
                    <button onClick={this.retreiveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>

            </>
        )
    };

    retreiveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => console.log(response))
        //.catch()
    }
}
export default WelcomeComponent;
