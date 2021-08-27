import React, { Component } from 'react'
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
                                <th>Description</th>
                                <th>Completion Status</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    to =>
                                        <tr key={to.id} >
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
export default ListTodoComponent;
