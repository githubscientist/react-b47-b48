import React, { useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

// create a childMessageContext

function ChildComponent() {

    const [message, setMessage] = useContext(MessageContext);
    const childMessage = 'Hello from Child';

    const updateMessage = () => {
        setMessage('Hello from Parent');
    }
    
    return (
        <div>
            <h2>Child Component</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
            <button onClick={updateMessage}>Update Message</button>
            {/* provide the childMessageContext to GrandChildComponent */}
            <GrandChildComponent />
        </div>
    )
}

export default ChildComponent;