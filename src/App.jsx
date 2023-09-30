// Passing data from child to parent component
import React, { useState } from 'react';

function ChildComponent({onMessage}) {

  const message = `Hello from Child!`;

  return (
    <>
      <h2>Child Component</h2>
      <button onClick={() => onMessage(message)}>Send Message to the Parent</button>
    </>
  )
}

function App() {

  const [message, setMessage] = useState('');

  const handleMessage = (data) => {
    setMessage(data);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from the Child Component: { message }</p>
      <ChildComponent onMessage={ handleMessage } />
    </div>
  )
}

export default App;

/*
  Passing data from the parent component to child component:

  Parent component:
    const age = 25;

    <Child age = {age} name = {'sathish'} />

  Child component:
    props -> {
      age: 25,
      name: 'sathish'
    }

  Passing data from the child component to parent component:

    Parent component:

      const [childAge, setChildAge] = useState(0);

      const handleChildAge(age){
        setChildAge(age);
      }

      <Child handleChildAge = {handleChildAge} />

    Child component:

      const age = 25;

      props -> { handleChildAge: handleChildAge }

      handleChildAge(25);

*/

// day 21st task => after day 24th topics completion
// day 22nd task => after day 24th topics completion
// day 23rd & 24th task (same task) => after day 25th topics completion