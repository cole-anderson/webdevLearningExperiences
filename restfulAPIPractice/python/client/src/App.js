import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}]);



  //Base Implementation:
  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // })
  // return (
  //   <div>
  //     {(typeof data.members === "undefined") ? (
  //       <p>Searching...</p>
  //     ) : (
  //       data.members.map((member, i) => (
  //         <p key={i}>{member}</p>
  //       ))
  //     )}
  //   </div>
  // );

  //Re-Implementation

  useEffect(() => {
    fetch("/portfolio").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  })
  return (
    <div>
      {(typeof data.coins === "undefined") ? (
        <p>Searching...</p>
      ) : (
        data.coins.map((coins, i) => (
          <p key={i}>{coins}</p>
        ))
      )}
    </div>
  );


};


export default App;
