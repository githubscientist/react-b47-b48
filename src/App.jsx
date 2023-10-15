import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReadNotes from './components/ReadNotes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';

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
    let isMounted = true;

    if (isMounted) {
      fetchNotes();
    }

    return () => {
      isMounted = false;
    }

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

  const padding = {
    paddingRight: 15,
  };

  return (
    <Router>

      <div>
        <Link to="/" style={padding}>Dashboard</Link>
        <Link to="/read" style={padding}>Read Notes</Link>
        <Link to="/create" style={padding}>Create Note</Link>
        <Link to="/editNote" style={padding}>Edit Note</Link>
        <Link to="/deleteNote" style={padding}>Delete Note</Link>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes} />} />
        <Route path='/create' element={<CreateNote addNote={addNote} newNoteContent={newNoteContent} newNoteImportant={newNoteImportant} newNoteContentRef={newNoteContentRef} setNewNoteContent={setNewNoteContent} setNewNoteImportant={setNewNoteImportant} />} />
        <Route path='/editNote' element={<EditNote notes={notes} setNotes={ setNotes } />} />
        <Route path='/deleteNote' element={<DeleteNote notes={notes} setNotes={setNotes}/>} />
      </Routes>

    </Router>
  )
}

export default App;