import React from 'react';

function Note({ note }) {

  // const note = props.note;

  return (
    <li>{ note.content }</li>
  )
}

function App(props) {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map((note) => {
            return <Note key={ note.id } note={ note } />
          })
        }
      </ul>
    </div>
  )
}

export default App;