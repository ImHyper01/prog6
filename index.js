const express = require("express");

// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/notes";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}


// create webserver
const app = express();

const notesRouter = require("./routes/sneakerRouter");

// create route /
app.use("/notes/", notesRouter);


//start webserver on port 8000
app.listen(8000, () => {
    console.log("Express started");
})
