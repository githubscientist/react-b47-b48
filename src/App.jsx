/*
  Hooks: 
    - any function that starts with "use" is called a hook.
    - they are special functions that are only available while React is rendering
  
  To create a counter, where the value is increased as a function of time or at the click of a button.
*/
import React from 'react';

function App(props) {
  // console.log(props);
  let { counter } = props;
  console.log(counter);
  return (
    <div>{ counter }</div>
  )
}

export default App;