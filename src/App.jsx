import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state);

  return (
    <div>
      <div>
        { counter }
      </div>

      <button onClick={e => dispatch({ type: 'INCR' })}>incr</button>
      <button onClick={e => dispatch({ type: 'DECR' })}>decr</button>
      <button onClick={e => dispatch({ type: 'ZERO' })}>zero</button>
    </div>
  )
}

export default App;