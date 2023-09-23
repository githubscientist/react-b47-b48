import React from 'react';

function App(props) {
  // console.log(props.notes);
  const { notes } = props;

  // console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map((note) => {
            return <li key={note.id}>{ note.content }</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;