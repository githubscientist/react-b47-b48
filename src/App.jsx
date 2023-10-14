// useRef - hook: to create a mutable reference to an element or a value that persists across render cycles.

// Example: focus the input text element on click of a button

import React, { useRef } from 'react'

function App() {

  const inputRef = useRef(null);

  // const handleButtonClick = () => {
  //   // console.log(inputRef.current.value);
  //   inputRef.current.focus();
  // }

  function handleButtonClick() {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <div>
      <input 
        type='text'
        ref={inputRef}
      />

      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  )
}

export default App;