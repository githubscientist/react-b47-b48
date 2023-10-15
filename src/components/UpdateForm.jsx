import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateForm({ selectedOption, notes, setNotes }) {

    const [selectedNote, setSelectedNote] = useState(null);
    const [editedContent, setEditedContent] = useState('');
    const [editedImportant, setEditedImportant] = useState('');

    const fetchNote = async () => {
        try {
            if (selectedOption != 'select an ID') {
                const response = await axios.get(`http://localhost:3000/notes/${selectedOption}`);
                console.log(response.data);
                if (response.data) {
                    setSelectedNote(response.data);
                    setEditedContent(response.data.content);
                    setEditedImportant(response.data.important);
                }
            }
        } catch (error) {
            console.error('Error fetching the note:', error);
        }
    }

    useEffect(() => {
        fetchNote();
    }, [selectedOption]);

    const updateNote = (event) => {
        event.preventDefault();

        console.log('updating the note...');

        // prepare the object to update
        let note = {
            id: selectedNote.id,
            content: editedContent,
            important: editedImportant,
        }

        axios
            .put(`http://localhost:3000/notes/${selectedNote.id}`, note)
            .then(response => {
                console.log(response);
                console.log('Note updated successfully');

                // update the state
                let updatedNotes = notes.filter(n => n.id !== note.id);
                updatedNotes.concat(note);
                setNotes(updatedNotes);
            })
            .catch(error => {
                console.log('Error updating note:', error);
            })
    }

  return (
      <div>
          <h3>Update Form</h3>
          {
              !selectedNote ? (
                  <p>Loading Data...</p>
              ) : (
                      <form onSubmit={updateNote}>
                        <label>
                            Content: &nbsp;&nbsp;
                            <input 
                                  value={editedContent}
                                  onChange={(e) => setEditedContent(e.target.value)}
                            />
                          </label>
                          <br /><br />
                          <label>
                              Is Important: &nbsp;&nbsp;
                              <select
                                  value={editedImportant ? 'true' : 'false' }
                                  onChange={(e) => setEditedImportant(e.target.value == 'true' ? true : false)}
                              >
                                  <option>true</option>
                                  <option>false</option>
                              </select>
                          </label>

                          <br /><br />
                          <button type='submit'>Update Note</button>
                      </form>
                      
              )
          }
    </div>
  )
}

export default UpdateForm;