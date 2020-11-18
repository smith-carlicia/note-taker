const path = require("path");
const router = require ("express").Router();

module.exports = function() {
    router.get("notes", function(req, res){
        console.log("notes route hit");
        res.sendFile(path.join(__dirname, "/public/notes.html"))
    });
    
    router.get("*", function(req, res){
        console.log("default route hit");
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    };

