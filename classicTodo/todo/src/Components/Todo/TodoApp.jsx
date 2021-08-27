import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Component Imports:
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListTodoComponent from './ListTodoComponent.jsx'

//Main function:
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
                            <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" exact component={ListTodoComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
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
/**
 * Displays error if url not defined
 */
function ErrorComponent() {
    return <div>An Error Occurred. Contact Admin</div>
}

export default TodoApp;
