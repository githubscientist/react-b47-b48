import React from 'react';
import Notes from './components/Notes';
import NewNote from './components/NewNote';

function App() {

  const filterSelected = (value) => {
    console.log(value);
  }

  return (
    <div>
      <NewNote />
      <div>
        <input type='radio' name='filter' onChange={() => filterSelected('all')}/> all
        <input type='radio' name='filter' onChange={() => filterSelected('important')}/> important
        <input type='radio' name='filter' onChange={() => filterSelected('nonimportant')}/> nonimportant
      </div>
      <Notes />
    </div>
  )
}

export default App;