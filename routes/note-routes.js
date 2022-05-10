const express = require('express');
const {
  getNotes,
  getAddNote,
  addNote,
  getNote,
  deleteNote
} = require('../controllers/note-controller');

const router = express.Router();

router.get('/', getNotes);
router.get('/add-note', getAddNote);
router.post('/add-note', addNote);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);

module.exports = router;


