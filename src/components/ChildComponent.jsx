import React, { useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

function ChildComponent() {

    const message = useContext(MessageContext);
    const childMessage = 'Hello from Child';
    return (
        <>
            <h2>Child Component</h2>
            <p>Message from Parent Component: <b>{message}</b></p>
            <GrandChildComponent />
        </>
    )
}

export default ChildComponent;