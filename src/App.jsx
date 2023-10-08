import React, { useState } from 'react';
import Note from './components/Note';

function App(props) {
  // console.log(props);

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    // console.log(event.target);
    event.preventDefault();

    // console.log('button clicked');
    // console.log(newNote);
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.value);
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => 
            <Note key={note.id} note={note} />
          )
        }
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          placeholder='a new note...' 
          onChange={handleNoteChange}
          />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App;