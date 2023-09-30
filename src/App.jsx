/*
  Hooks: 
    - any function that starts with "use" is called a hook.
    - they are special functions that are only available while React is rendering
  
  To create a counter, where the value is increased as a function of time or at the click of a button.
*/
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // console.log('button clicked');
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>
    
  )
}

export default App;