import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector(state => {
        if (state.filter === 'all') {
            return state.notes;
        } 
        return state.filter === 'important'
            ? state.notes.filter(note => note.important) : state.notes.filter(note => !note.important);
    });

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id));
    }
    
  return (
      <div>
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

export default Notes;