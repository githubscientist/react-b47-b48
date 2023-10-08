import React from 'react';

function Note({note}) {
  return (
      <li>{ note.content }</li>
  )
}

export default Note;