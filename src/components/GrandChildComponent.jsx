import React, { useContext } from 'react';
import { MessageContext } from '../App';
import { ChildMessageContext } from './ChildComponent';

function GrandChildComponent() {
    const message = useContext(MessageContext);
    // use the context childMessageContext, get the data
    const childMessage = useContext(ChildMessageContext);
    return (
      <div>
            <h2>GrandChild Component</h2>
            {/* print the data received from the childMessageContext */}
          <p>Message from Parent Component: <b>{ childMessage }</b></p>
    </div>
  )
}

export default GrandChildComponent;