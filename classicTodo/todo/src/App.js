import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" >
        my hello world
        <FirstCompenent />
      </div>
    );
  }
}

class FirstCompenent extends Component {
  render() {
    return (
      <div className="FirstComponent" >
        First Component
      </div>
    );
  }
}


export default App;
