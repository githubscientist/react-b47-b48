import React from 'react';
import Note from './components/Note';

function App(props) {
  const { notes } = props;
  const optionList = [];

  notes.forEach((note) => {
    optionList.push(<Note key={note.id} note={note} />);
  });

  // console.log(optionList);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { optionList }
      </ul>
    </div>
  )
}

export default App;