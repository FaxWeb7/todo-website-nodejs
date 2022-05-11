const express = require('express');
const {
  getNotes,
  getAddNote,
  addNote,
  getNote,
  deleteNote,
  getEditNote,
  editNote,
} = require('../controllers/note-controller');

const router = express.Router();

router.get('/', getNotes);
router.get('/add-note', getAddNote);
router.post('/add-note', addNote);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);
router.get('/edit/:id', getEditNote);
router.put('/edit/:id', editNote);

module.exports = router;


