import './App.css';
import { Deploy } from './Components/Deploy/Deploy';
import { useState, useEffect } from 'react';

function App() {

  const [state, setState] = useState({})

  useEffect(() => {
    fetch("/api").then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).then(data => setState(data))

  }, [])

  return (
    <div>
      <Deploy prop={state} />
    </div>
  );
}

export default App;
