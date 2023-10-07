import React from 'react'
import { Link } from 'react-router-dom';

function Notes({ notes }) {
    console.log(notes);
  return (
      <div>
          <h2>Notes</h2>
          <ul>
              {
                  notes.map(note => {
                      return <li key={note.id}><Link to={`/notes/${note.id}`}>{ note.content }</Link></li>
                  })
              }
          </ul>
    </div>
  )
}

export default Notes;