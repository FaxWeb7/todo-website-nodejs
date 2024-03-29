const {createPath, handleError} = require('../helpers/helper');
const Note = require('../models/notes');

const getNotes = (req, res) => {
  const title = 'Home';
  Note
    .find()
    .sort({ createdAt: -1 })
    .then((notes) => res.render(createPath('index'), {title, notes}))
    .catch((err) => handleError(res, err))
};

const getAddNote = (req, res) => {
  const title = 'New Note';
  res.render(createPath('add-note'), {title}); 
};

const addNote = (req, res) => {
  const {title, text} = req.body;
  const note = new Note({title, text})
  note
    .save()
    .then((result) => res.redirect('/'))
    .catch((error) => handleError(res, error))
};

const getNote = (req, res) => {
  const title = 'Note'
  Note
    .findById(req.params.id)
    .then((note) => res.render(createPath('note'), {note, title}))
    .catch((err) => handleError(res, err))
};

const deleteNote = (req, res) => {
  Note
    .findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((err) => handleError(res, err))
};

const getEditNote = (req, res) => {
  Note
    .findById(req.params.id)
    .then((note) => res.render(createPath('edit-note'), {note, title: 'Edit'}))
    .catch((err) => handleError(res, err))
};

const editNote = (req, res) => {
  const {title, text} = req.body;
  const id = req.params.id;
  Note
    .findByIdAndUpdate(id, {title, text})
    .then((result) => res.redirect(`/${id}`))
    .catch((err) => handleError(res, err))
};


module.exports = {
  getNotes,
  getAddNote,
  addNote,
  getNote,
  deleteNote,
  getEditNote,
  editNote,
};


