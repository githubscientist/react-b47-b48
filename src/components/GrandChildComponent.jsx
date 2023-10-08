import React, { useContext } from 'react';
import { MessageContext } from '../App';

function GrandChildComponent() {
    const message = useContext(MessageContext);

  return (
      <div>
          <h2>GrandChild Component</h2>
          <p>Message from Parent Component: <b>{ message }</b></p>
    </div>
  )
}

export default GrandChildComponent;