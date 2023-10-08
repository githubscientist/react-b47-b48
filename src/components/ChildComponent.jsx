import React, { createContext, useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

// create a childMessageContext
const ChildMessageContext = createContext();

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
            <ChildMessageContext.Provider value={childMessage}>
                <GrandChildComponent />
            </ChildMessageContext.Provider>
        </div>
    )
}

export {ChildComponent as default, ChildMessageContext};