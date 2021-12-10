
const path = require('path');
const fs = require('fs');

const router = require('express').Router();



router.get('/notes', (req, res) => {

  const data = fs.readFileSync("./db/db.json");
  res.json(JSON.parse(data));

})



router.post('/notes', (req, res) => {
 
  const notes = fs.readFileSync("./db/db.json");
  const createNewNote = req.body;
  // notes.push(createNewNote)
  res.json(JSON.parse(notes));

  })


  router.delete('/notes:id', (req, res) => {
  
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote = req.body;
  fs.writeFileSync("./db/db.json"), JSON.stringify(notes);
  res.json(deleteNote);
})

module.exports = router;
