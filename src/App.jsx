import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function App() {

  // define states
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all');
  
  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');


  const newNoteContentRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes/');
      setNotes(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  }

  useEffect(() => {
    newNoteContentRef.current.focus();
  }, []);

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = (event) => {
    event.preventDefault();

    // create a new note object
    let noteObject = {
      content: newNoteContent,
      important: newNoteImportant === 'true',
    }

    // setNotes(notes.concat(noteObject));
    console.log('adding new note...');
    axios
      .post('http://localhost:3000/notes/', noteObject)
      .then(response => {
        console.log('note added successfully...');
      })

    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();

    fetchNotes();
  }

  const handleStatusChange = (event) => {
    // console.log(event.target.value);
    setShowStatus(event.target.value);
  }

  let filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);

  return (
    <div>
      <h1>Notes</h1>

      <label>
        <input 
          type='radio'
          name='filter'
          onChange={handleStatusChange}
          value='all'
          checked={showStatus === 'all'}
        />
        All Notes
      </label>

      <label>
        <input 
          type='radio'
          name='filter'
          onChange={handleStatusChange}
          value='imp'
          
        />
        Important Notes
      </label>

      <label>
        <input 
          type='radio'
          name='filter'
          onChange={handleStatusChange}
          value='nonimp'
          
        />
        Non-Important Notes
      </label>

      <ul>
        {
          notesFiltered.map(note => 
            <li key={note.id}>{ note.content }</li>
          )
        }
      </ul>
      <hr></hr>
      <h2>Add a New Note</h2>
      <form onSubmit={addNote}>
        <label>
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
            onChange={(e) => setNewNoteContent(e.target.value)}
            value={newNoteContent}
            ref={newNoteContentRef}
            required
          />
        </label>
        <br /><br />
        <label>
          Is Important: &nbsp;&nbsp;  
          <select
            onChange={(e) => setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
            required
          >
            <option disabled>--select--</option>
            <option>true</option>
            <option>false</option>
          </select>
        </label>

        <br /><br />

        <button type='submit'>Add New Note</button>

      </form>

    </div>
  )
}

export default App;