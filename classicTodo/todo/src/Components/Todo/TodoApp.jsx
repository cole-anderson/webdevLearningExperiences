import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo
                <LoginComponent />
            </div>
        )
    }
}
/**
 * Class: Login Component
 */
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserPassChange = this.handleUserPassChange.bind(this);
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    // handleUsernameChange(event) {
    //     this.setState({ username: event.target.value });
    // }

    // handlePasswordChange(event) {
    //     this.setState({ password: event.target.value });
    // }
    handleUserPassChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserPassChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleUserPassChange} />
                <button> Login </button>
            </div>
        )
    };
}


export default TodoApp;
