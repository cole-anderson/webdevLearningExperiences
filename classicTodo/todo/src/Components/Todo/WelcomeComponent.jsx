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
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.state = {
            welcomeMessage: '',
            error: '',
        }
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
                <div className="container">
                    {this.state.welcomeMessage}
                </div>

            </>
        )
    };

    retreiveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessfulResponse(response))
        // //.catch()

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulResponse(response))
        // //.catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleErrorResponse(error.response.data.message))
    }

    handleSuccessfulResponse(response) {
        console.log(response);
        this.setState({ welcomeMessage: response.data.message });
    }

    handleErrorResponse(error) {
        console.log(error);
        this.setState({ welcomeMessage: 'error occurred' });
    }
}
export default WelcomeComponent;
