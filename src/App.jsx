import React, { createContext, useState } from 'react';
import ChildComponent from './components/ChildComponent';

// create a context
const MessageContext = createContext();

function App() {

  const [message, setMessage] = useState('Hello from App');

  return (
    <div>
      <h1>Parent Component</h1>
      <MessageContext.Provider value={ [message, setMessage] }>
        <ChildComponent />
      </MessageContext.Provider>
    </div>
  )
}

export { App as default, MessageContext };