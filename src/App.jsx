import React, { useRef } from 'react'
import SetInputFocus from './components/SetInputFocus';

function App() {

  const inputRef = useRef(null);

  function handleButtonClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input 
        type='text'
        ref={inputRef}
      />

      <input 
        type='text'
        ref={inputRef}
      />


      <button onClick={handleButtonClick}>Focus Input</button>
      <SetInputFocus inputRef={ inputRef } />
    </div>
  )
}

export default App;