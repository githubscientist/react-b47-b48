function Note({ note }) {

    // const note = props.note;
    // conditional rendering
    if (note.important) {
        return (
            <li>{ note.content } ★</li>
        )
    }

    return (
        <li>{ note.content }</li>
    )
}

export default Note;