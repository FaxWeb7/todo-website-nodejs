const {createPath, handleError} = require('../helpers/helper');
const Note = require('../models/notes');

const getNotes = (req, res) => {
  const title = 'Home';
  Note
    .find()
    .sort({ createdAt: -1 })
    .then((notes) => res.status(200).json(notes))
    .catch((err) => handleErrorJSON(req, err))
};

const addNote = (req, res) => {
  const {title, text} = req.body;
  const note = new Note({title, text})
  note
    .save()
    .then((result) => res.status(200).json(result))
    .catch((error) => handleErrorJSON(req, err))
};

const getNote = (req, res) => {
  const title = 'Note'
  Note
    .findById(req.params.id)
    .then((note) => res.status(200).json(note))
    .catch((err) => handleErrorJSON(req, err))
};

const deleteNote = (req, res) => {
  Note
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err) => handleErrorJSON(req, err))
};

const editNote = (req, res) => {
  const {title, text} = req.body;
  const id = req.params.id;
  Note
    .findByIdAndUpdate(id, {title, text})
    .then((result) => res.status(200).json(result))
    .catch((err) => handleErrorJSON(req, err))
};


module.exports = {
  getNotes,
  addNote,
  getNote,
  deleteNote,
  editNote
};


