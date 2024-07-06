import React, { useState } from 'react'
import { useContext } from "react";
import NoteContext from "../context/notes/Notecontext";


const AddNotes = () => {
    const context = useContext(NoteContext);
    const { addNote} = context;
    const [note,setNote] = useState({title:"",description:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
    }
    const onchange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
  return (
     <section className="text-gray-600 body-font relative p-3 sm:p-0">
  <div className="container sm:py-24 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a New Note</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Save your added note in a database which is highly secured</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <textarea id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={onchange}></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="description" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={onchange}></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Button</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default AddNotes
