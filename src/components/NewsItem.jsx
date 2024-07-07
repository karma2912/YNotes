import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/Notecontext";

const NewsItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { notes,updateNote } = props;
  const handleDeleteClick =()=>{
    deleteNote(notes._id)
  }
  const handleEditClick=()=>{
    updateNote(notes)
  }
  return (
    <>
      <div className="component h-90 w-3/4 text-black p-3 m-5 flex flex-col sm:flex-row  border-2  border-indigo-500 rounded-2xl hover:w-5/6 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-500">
        <div className="font-bold p-3 text-2xl flex flex-col">
          {notes.title}
          <div className="font-normal text-xl pt-3 pb-3">{notes.description}</div>
          <div>
          <i className="fa-solid fa-pen-to-square mr-8" onClick={handleEditClick}></i>
          <i className="fa-solid fa-trash ml-8" onClick={handleDeleteClick}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
