// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './bootstrap.css';

// import FirstComponent from './Components/Examples/FirstComponent'
// import SecondComponent from './Components/Examples/SecondComponent'
// import ThirdComponent from './Components/Examples/ThirdComponent'

// import CounterButton from './Components/Counter/Counter'
// import Counter from './Components/Counter/Counter'

import TodoApp from './Components/Todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <LearningComponents /> */}
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}


// class LearningComponents extends Component {

//   render() {
//     return (
//       <div className="Learning Components" >
//         <header>Hello World</header>
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     );
//   }

// }

export default App;
