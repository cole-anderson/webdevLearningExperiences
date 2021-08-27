import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

/**
 * Class: Login Component(prompts user for login information)
 */
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleUserPassChange = this.handleUserPassChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
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

    loginClicked() {
        //temp hard code:
        if (this.state.username === 'cole' && this.state.password === '1234') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            console.log("LOGIN SUCCESS");
            // this.setState({showSuccessMessage: true });
            // this.setState({hasLoginFailed: false });
        }
        else {
            console.log("LOGIN FAILED");
            this.setState({ showSuccessMessage: false });
            this.setState({ hasLoginFailed: true });
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Success </div>}
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowSuccess showSuccessMessage={this.state.showSuccessMessage} /> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserPassChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleUserPassChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}> Login </button>
                </div>
            </div >
        )
    };

}
export default LoginComponent;
