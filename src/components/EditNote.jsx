import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

function EditNote({ notes, setNotes }) {

    const [selectedOption, setSelectedOption] = useState('select an ID');

    const selectHandler = (event) => {
        // console.log(event.target.value);
        setSelectedOption(event.target.value);
    }

  return (
      <div>
          <h2>Edit Note</h2>
          <label>
              Select the Note ID to Edit/Update: &nbsp;&nbsp;
              <select onChange={selectHandler} value={selectedOption}>
                  <option disabled>{ 'select an ID' }</option>
                  {
                      notes.map(note => 
                          <option key={note.id}>{ note.id }</option>
                      )
                  }
              </select>
          </label>
        
          <div>
              {selectedOption !== 'select an ID' && <UpdateForm selectedOption={selectedOption} notes={notes} setNotes={ setNotes } /> }
          </div>
    </div>
  )
}

export default EditNote;