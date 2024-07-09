const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

//Route 1 to Add a new note http://localhost:3000/api/notes/addnotes
router.post(
  "/addnotes",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send({ "errors": "Enter Valid Inputs" });
    }
    try {
      const note = new Notes({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

// Route 2 to Fetch all the saved notes http://localhost:3000/api/notes/getnotes
router.get("/getnotes", fetchUser, async (req, res) => {
  try {
    const note = await Notes.find({ user: req.user.id });
  res.json(note);
  } catch (error) {
    console.error(error.message);
        res.status(500).send("Internal Server Error")
  } 
});

//Route 3 to Update an existing notes http://localhost:3000/api/notes/updatenotes/:id
router.put("/updatenotes/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  //Find a note to be updated
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(400).send("Note not Found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(400).send("Not Allowed");
  }
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json(note);
});

//Delete a note from the saved notes
router.delete("/deletenotes/:id", fetchUser, async (req, res) => {
  //Find a note to be deleted
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(400).send({"Note":"Note not Found"});
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(400).send({"Validation":"Not Allowed"});
  }
  note = await Notes.findByIdAndDelete(req.params.id);
  res.send({"Success" : "Deleted Successfully"});
});

module.exports = router;
