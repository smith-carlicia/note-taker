const fs = require("fs");

const readData = function () {
    readFileAsync("./db/db.json", "utf8")
        .then((result, err)=>{
        if(err) console.log(err);
        return Promise.resolve(JSON.parse(result))
    })
};

const writeData = function () {
    writeFileAsync("./db/db.json", JSON.stringify(data));
        res.json(newNote);
};
  

module.exports = {readData, writeData};