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

function Button({text, handleClick}) {
  return (
    <button onClick={handleClick}>{ text }</button>
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
      <Button text='plus' handleClick={ handlePlusClick } />
      <Button text='minus' handleClick={ handleMinusClick } />
      <Button text='zero' handleClick={ handleZeroClick } />
    </div>
  )
}

export default App;