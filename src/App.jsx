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
    console.log('button clicked');
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { optionList }
      </ul>

      <form>
        <input name='note' />
        <button onClick={addNote}>Save Note</button>
      </form>
    </div>
  )
}

export default App;