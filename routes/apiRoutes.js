
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');





//GET request
router.get('/api/notes', (req, res) => {

  const notes = fs.readFileSync("./db/db.json");
  res.json(JSON.parse(notes));

})


//POST REQUEST

router.post('/api/notes', (req, res) => {
 
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
 
  const createNote = req.body;
  createNote.id = uuid.v4();
  notes.push(createNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(JSON.parse(notes));
 
   })


  //BONUS - DELETE REQUEST
  router.delete('/api/notes:id', (req, res) => {
 
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote = req.body;
  fs.writeFileSync("./db/db.json"), JSON.stringify(notes);
  res.json(deleteNote);
})

module.exports = router;
