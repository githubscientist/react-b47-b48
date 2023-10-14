import React, { useReducer } from 'react';

const initialState = {
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { isActive: !state.isActive };
    case 'toActive':
      return { isActive: true };
    case 'toInActive':
      return { isActive: false };
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Account Active: { state.isActive ? 'Yes' : 'No' }</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Profile</button>
      <button onClick={() => dispatch({ type: 'toActive' })}>Active</button>
      <button onClick={() => dispatch({ type: 'toInActive' })}>In Active</button>
    </div>
  )
}

export default App;