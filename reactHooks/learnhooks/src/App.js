import './App.css';
import { createContext, useContext, useEffect, useState, useRef, useReducer } from 'react';

// useState, useEffect
function App1() {

  const [count, setCount] = useState(0);
  // const [loaded, setLoaded] = useEffect(false);

  useEffect(() => {
    alert('hello side effect!')

  })

  //THIS IS BROKEN BUT EXPLAINER HELPS:
  /*
  useEffect(
    () => {
      fetch('foo').then(() => setLoaded(true))
      console.log(loaded)
    }, [loaded, setLoaded])
    */
  //the above array means this will only run once when the component is intialized
  //but adding a value means its called when the given data variable is updated

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
//----------------------------------------------
//useContext: 

const moods = {
  happy: ':)',
  sad: ':('
}
const MoodContext = createContext(moods);


function App2(props) {
  return (
    <MoodContext.Provider value={moods.happy}>

      <MoodEmoji />

    </MoodContext.Provider>
  );
}

function MoodEmoji() {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>

}
//----------------------------------------------
//useRef:
function App3() {


  //mutable value does not trigger re render
  const count = useRef(0);

  return (
    <button onClick={() => count.current++}>
      {count.current}
    </button>
  );

}
//----------------------------------------------
// useReducer**** this is game changing
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      if (state - 1 >= 0)
        return state - 1;
      else
        return state;
    default:
      throw new Error("invalid")
  }
}
function App4() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>

  )
}
//useMemo, useCallback, useImperativeHandle.....

//Custom Hook:
//broken
function App() {

  return (
    <Route><Play /></Route>
  )
  // const car = { displayName: "Fiat" }
  // const displayName = useDisplayName(car);

  // return <button>{displayName}</button>
}

function useDisplayName(val) {
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    const data = fetchFromDataBase(val);
    setDisplayName(data.displayName);

  }, [val]);
}
function fetchFromDataBase(val) {

  return val
}

export default App;
