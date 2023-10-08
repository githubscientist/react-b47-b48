import React, { useContext } from 'react';
import { MessageContext } from '../App';

function GrandChildComponent() {
    const message = useContext(MessageContext);
    // use the context childMessageContext, get the data

    return (
      <div>
            <h2>GrandChild Component</h2>
            {/* print the data received from the childMessageContext */}
          <p>Message from Parent Component: <b>{ message }</b></p>
    </div>
  )
}

export default GrandChildComponent;