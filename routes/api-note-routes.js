const express = require('express');
const {
  getNotes,
  addNote,
  getNote,
  deleteNote,
  editNote,
} = require('../controllers/api-note-controller');

const router = express.Router();

router.get('/api', getNotes);
router.post('/api/add-note', addNote);
router.get('/api/:id', getNote);
router.delete('/api/:id', deleteNote);
router.put('/api/edit/:id', editNote);

module.exports = router;


