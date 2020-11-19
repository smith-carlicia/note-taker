const router = require("express").Router();
const uuid = require("uuid");
const db = require("../db/db.json");
const fs = require('fs');
console.log(db)


router.get("/api/notes", function(req, res) {
    return res.json(db);
});

router.post("/api/notes", (req, res) => {
    let note = req.body;
    note.id = uuid.v1();
    db.push(note);
    writeToDB(db);
    return res.json(db);
});

router.delete("/api/notes:id", (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < db.length; i++) {
      if (db[i].id == id) {
        db.splice(i, 1);
        writeToDB(db);
        res.json(db);
        break;
        };
    };
});

function writeToDB(array) {
    fs.writeFileSync("./db/db.json", JSON.stringify(array));
  };

module.exports = router;