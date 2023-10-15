import React, { useEffect } from 'react';

function CreateNote({ addNote, newNoteContent, newNoteImportant, newNoteContentRef, setNewNoteContent, setNewNoteImportant }) {
    
    useEffect(() => {
    newNoteContentRef.current.focus();
  }, []);

  return (
      <div>
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

export default CreateNote;