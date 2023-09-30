import React from 'react';

function GrandChildComponent({ parentData }) {
  
  console.log(`from grand child component: ${parentData}`);

  return (
    <div>
      <h3>Grand Child Comonent</h3>
    </div>
  )
}


function ChildComponent({parentData}) {

  console.log(`from child component: ${parentData}`);

  return (
    <div>
      <h2>Child Component</h2>
      <GrandChildComponent parentData={ parentData } />
    </div>
  )
}

function App() {

  const parentData = `Hello from Parent`;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent parentData={ parentData } />
    </div>
  )
}

export default App;