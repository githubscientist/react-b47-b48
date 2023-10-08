import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent({ message }) {
  return (
      <>
          <h2>Child Component</h2>
          <p>Message from Parent Component: <b>{message}</b></p>
          <GrandChildComponent message={ message } />
      </>
  )
}

export default ChildComponent;