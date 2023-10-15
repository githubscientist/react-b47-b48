import React from 'react';

function ReadNotes({ showStatus, handleStatusChange, notes }) {

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
    </div>
  )
}

export default ReadNotes;