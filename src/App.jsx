/*
  Hooks: 
    - any function that starts with "use" is called a hook.
    - they are special functions that are only available while React is rendering
  
  To create a counter, where the value is increased as a function of time or at the click of a button.
*/
import React, { useState } from 'react';

function Display({counter}) {
  return (
    <div>{counter}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlusClick = () => {
    // console.log('button clicked');
    setCounter(counter + 1);
  }

  const handleMinusClick = () => {
    setCounter(counter - 1);
  }

  const handleZeroClick = () => {
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <button onClick={handlePlusClick}>plus</button>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handleZeroClick}>zero</button>
    </div>
  )
}

export default App;