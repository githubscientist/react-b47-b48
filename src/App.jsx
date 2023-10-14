import React, { useEffect, useRef } from 'react';

function App() {

  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log('Count:', countRef.current);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, [countRef]);

  return (
    <div>
      <p>Counter: { countRef.current }</p>
    </div>
  )
}

export default App;