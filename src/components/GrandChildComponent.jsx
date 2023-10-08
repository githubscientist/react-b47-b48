import React from 'react';

function GrandChildComponent({message}) {
  return (
      <div>
          <h2>GrandChild Component</h2>
          <p>Message from Parent Component: <b>{ message }</b></p>
    </div>
  )
}

export default GrandChildComponent;