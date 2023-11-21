// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title: String,
    body: String,
    author: String
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("Note", NotesSchema);