const router = require("express").Router();
const store = require("../public/assets/js/index");
const uuid = require("uuid");

router.get("/api/notes", function(res, req) {
    return res.json(store.readData());
});

router.post("/api/notes", (req, res) => {
    const note = req.body;
    note.id = uuid.v1();
    db.push(note);
    writeToDB(db);
    return res.json(db);
});

router.delete("/api/notes:id", (res, req) => {
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

module.exports = router;