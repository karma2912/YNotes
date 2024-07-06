import React from "react";
import NoteContext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const [notes, setNotes] = useState([]);
  const host = "http://localhost:5000";

  //Fetching Notes
  const getNote = async () => {
    //Fetch API
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":`${localStorage.getItem("Token")}`,
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    //Fetch API
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          `${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  };

  //Updating a Note
  const editNote = async (id, title, description, tag) => {
    //Fetch APi
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          `${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          `${localStorage.getItem("Token")}`,
      },
    });
    const json = response.json();
    //Deleting a Note
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default Notestate;
