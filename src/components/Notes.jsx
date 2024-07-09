import React, { useEffect } from "react";
import { useContext, useState } from "react";
import NoteContext from "../context/notes/Notecontext";
import NewsItem from "./NewsItem";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom"

const Notes = () => {
  const navigate = useNavigate()
  const context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });
  useEffect(() => {
    if(localStorage.getItem("Token")){
      getNote();
    }
    else{
    navigate("/login")
    }

  }, []);
  const updateNote = (currentNote) => {
    document.getElementById("my_modal_1").showModal();

    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      eid: currentNote._id
    });
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
  const handleSubmitBtn=(e)=>{
    editNote(note.eid,note.etitle,note.edescription,note.etag)
  }

  return (
    <div>
      <dialog
        id="my_modal_1"
        className="modal border-2 border-indigo-600 rounded-3xl shadow-2xl"
      >
        <div className="modal-box h-[30rem] w-[30rem]">
          <h3 className="font-bold text-lg text-center pt-10">Edit Note</h3>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="etitle"
                className="leading-7 text-sm text-gray-600"
              >
                Title
              </label>
              <textarea
                id="etitle"
                name="etitle"
                value={note.etitle}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={onchange}
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="edescription"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                id="edescription"
                name="edescription"
                value={note.edescription}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={onchange}
              ></textarea>
            </div>
          </div>
          <div className="modal-action text-white ">
            <form method="dialog" className=" flex justify-around pt-5">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn border-1 bg-indigo-600 pt-1 pb-1 pl-5 pr-5 rounded">
                Close
              </button>
              <button
                className="btn border-1 bg-indigo-600 pt-1 pb-1 pl-5 pr-5 rounded"
                onClick={handleSubmitBtn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <AddNotes />
      <div>
        <p className="flex justify-center items-center text-2xl font-medium mb-8">
          Saved Notes
        </p>
        <div className="flex justify-center items-center text-2xl font-medium mb-8">
        {notes.length===0 && "No Notes Saved Yet!"}
        </div>
        {notes.map((notes, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <NewsItem notes={notes} updateNote={updateNote} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
