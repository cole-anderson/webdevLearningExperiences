import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        {/* Routes */}
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/welcome/:name" exact component={WelcomeComponent} />
                            <Route path="/todos" exact component={ListTodoComponent} />
                            <Route path="/logout" exact component={LogoutComponent} />
                            <Route path="" component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}
class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/sinpulse" className="navbar-brand">Github</a></div>
                    <ul class="navbar-nav">
                        <li> <Link className="nav-link" to="/welcome/cole">Home</Link> </li>
                        <li> <Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    };
}
class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">
                    All Rights Reserved Cole Anderson 2021
                </span>
            </footer>
        )
    };
}
/**
 * Displays error if url not defined
 */
function ErrorComponent() {
    return <div>An Error Occurred. Contact Admin</div>
}
/**
 * Class:list Todo Component(displays if login correct)
 */
class ListTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
                [
                    { id: 1, description: 'learn react', done: false, targetDate: new Date() },
                    { id: 2, description: 'learn unity', done: false, targetDate: new Date() },
                    { id: 3, description: 'learn scala', done: false, targetDate: new Date() }
                ]
        };
    }


    render() {
        return (
            <div>
                <h1>List Todos:</h1>

                <div className="container">

                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>Description</th>
                                <th>Completion Status</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    to =>

                                        <tr>
                                            {/* <td>{to.id}</td> */}
                                            <td>{to.description}</td>
                                            <td>{to.done.toString()}</td>
                                            <td>{to.targetDate.toString()}</td>
                                        </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
/**
 * Class: Welcome Component(displays if login correct)
 */
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div clasName="container">
                    Welcome {this.props.match.params.name}.You can manage todos < Link to="/todos" > here </Link >.
                </div>
            </>
        )
    };
}

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

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You Have Logged Out</h1>
                <div className="container">
                    Thanks for your patronage!
                </div>
            </div>
        )
    }
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
