const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var database = require('./db/db.json')

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.route("/api/notes")
    .get(function (req, res) {
        res.json(database);
    })

    .post(function (req, res) {



        let newNote = req.body;
        console.log('new notes')
        console.log(newNote)
        database.push(newNote)
        res.end()
        // let highestId = 99;

        // for (let i = 0; i < database.length; i++) {
        //     let individualNote = database[i];

        //     if (individualNote.id > highestId) {
        //         highestId = individualNote.id;
        //     }
        // }
    })
// require('./routes/routes')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});