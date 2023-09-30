import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  // before all the functions
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  console.log(count);

  return (
    <div>
      <h1>Document Title Change</h1>
      <button onClick={handleIncrement}>Change Count</button>
    </div>
  )
}

export default App;