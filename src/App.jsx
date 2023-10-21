import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, toggleImportanceOf } from './reducers/noteReducer';

function App() {

  const dispatch = useDispatch();
  const notes = useSelector(state => state);


  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNote(content));
  }

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input 
          placeholder='type a new note...'
          name='note'
        />
        <button type='submit'>save</button>
      </form>
      <ul>
        {
          notes.map(note => 
            <li
              key={note.id}
              onClick={() => toggleImportance(note.id)}
            >
              {note.content} <strong>{ note.important ?  '★' : ''}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App;