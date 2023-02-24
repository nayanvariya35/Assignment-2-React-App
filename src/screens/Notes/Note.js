import "./Note.css"
import React, { useState } from "react";


function Note({ note, index, deleteNote }) {
  return (
    <div
      className="note"
      style={{ textDecoration: note.isCompleted ? "line-through" : "" }}
    >
      {note.text}

      <div>
        <button onClick={() => deleteNote(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addnote }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addnote(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Notes() {
  const [notes, setnotes] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool note app",
      isCompleted: false
    }
  ]);

  const addnote = text => {
    const newnotes = [...notes, { text }];
    setnotes(newnotes);
  };

  const deleteNote = index => {
    const newnotes = [...notes];
    newnotes.splice(index, 1);
    setnotes(newnotes);
  };

  return (
    <div className="app">
      <div className="note-list">
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
           
            deleteNote={deleteNote}
          />
        ))}
        <TodoForm addnote={addnote} />
      </div>
    </div>
  );
}

export default Notes;
