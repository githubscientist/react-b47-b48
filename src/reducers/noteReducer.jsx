const initialState = [
    {
        content: 'reducer defines how redux store works',
        important: true,
        id: 1,
    },
    {
        content: 'state of store can contain any data',
        important: false,
        id: 2,
    }
]

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload);
    case 'TOGGLE_IMPORTANCE':
      const id = action.payload.id;
      const noteToChange = state.find(n => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      return state.map(note => 
        note.id !== id ? note: changedNote
      )
  }

  return state;
}

export const toggleImportanceOf = (id) => {
    // console.log('clicked', id);
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id: id,
        }
    }
}

const generateId = () => {
    return ((Math.random() * 1000000).toFixed(0));
}

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export default noteReducer;