import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/**
 * Class: Welcome Component
 */
class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}
class WelcomeComponent extends Component {
    render() {
        return <div>Welcome Cole</div>
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
            console.log("LOGIN SUCCESS");
            this.setState({ showSuccessMessage: true });
            this.setState({ hasLoginFailed: false });
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
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Success </div>}
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowSuccess showSuccessMessage={this.state.showSuccessMessage} /> */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserPassChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleUserPassChange} />
                <button onClick={this.loginClicked}> Login </button>
            </div>
        )
    };

}
// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return (<div>Invalid Credentials</div>)
//     }
//     else
//         return null;

// }
// function ShowSuccess(props) {
//     if (props.showSuccessMessage) {
//         return (<div>Login Successful</div>)
//     }
//     else
//         return null;
// }



export default TodoApp;
