const express = require("express");

// create webserver
const app = express();

const notesRouter = require("./routes/notesRouter");

// create route /
app.use("/notes/", notesRouter);



//start webserver on port 8000
app.listen(8000, () => {
    console.log("Express started");
})
