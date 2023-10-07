import React from 'react'
import { useParams } from 'react-router-dom';

function Note({ notes }) {
    const id = useParams().noteid;
    // console.log(id);

    // get the note object of that id
    const note = notes.find(n => n.id === Number(id));

  return (
      <div>
          <h2>{ note.content }</h2>
    </div>
  )
}

export default Note;