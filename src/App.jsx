import React from 'react';
import Note from './components/Note';

function App(props) {
  const { notes } = props;
  const optionList = [];

  notes.forEach((note) => {
    optionList.push(<Note key={note.id} note={note} />);
  });

  // console.log(optionList);

  const addNote = (event) => {
    event.preventDefault();
    // console.log('button clicked');
    // console.log(event.target);

    // console.log(event.target.elements.note.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { optionList }
      </ul>

      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>Save Note</button>
      </form>
    </div>
  )
}

export default App;