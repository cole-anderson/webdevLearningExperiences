// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// import FirstComponent from './Components/Examples/FirstComponent'
// import SecondComponent from './Components/Examples/SecondComponent'
// import ThirdComponent from './Components/Examples/ThirdComponent'

import Counter from './Components/Counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <LearningComponents /> */}
        <Counter />
        <Counter by={1} />
        <Counter by={5} />
        <Counter by={10} />
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
