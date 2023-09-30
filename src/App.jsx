import React, { useEffect, useState } from 'react';

function App() {
  // create a state to store the data fetched from the API
  const [data, setData] = useState(null);

  // use the useEffect hook to run the function to call the api only one time
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  // console.log(data);

  return (
    <div>
      <h1>API DATA</h1>
      {
        data ? (
          <ul>
            {
              data.map(item => {
                return <li key={item.id}>{ item.title }</li>
              })
            }
          </ul>
        ) : (
            <p>Loading data...</p>
        )
      }
    </div>
  )
}

export default App;