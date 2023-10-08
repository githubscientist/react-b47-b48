import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent(props) {

    const message = 'Hello, GrandChild!';

  return (
      <>
          <h2>Child Component</h2>
          <p>Message from Parent Component: <b>{props.message}</b></p>
          <GrandChildComponent message={ message } />
      </>
  )
}

export default ChildComponent;