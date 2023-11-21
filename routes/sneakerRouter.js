// notes router
const express = require("express");

const router = express.Router();

const Note = require("../models/sneakerModel");

// create route /
router.get("/", async (req, res) => {
    console.log("GET");
    try {
        let notes = await Note.find();
        res.json(notes)
    } catch {
        res.status(500).send()
    }
})

// create route for detail
router.get("/:id", (req, res) => {
    console.log("GET");
    res.send(`request for item ${req.params.id}`);
})


// create route /
router.post("/", async (req, res) => {
    console.log("POST");

    // this need to be an request to work
    let note = new Note({
        title: "new shoe",
        body: "sneaker",
        author: "Nike"
    })
    try {
        await note.save();
        res.json(note)
    } catch {
        res.status(500).send()
    }


})

// create route /
router.delete("/", (req, res) => {
    console.log("DELETE");
    res.send("hello express!!!")
})

// create route /
router.options("/", (req, res) => {
    console.log("OPTIONS");
    res.send("hello express!!!")
})

module.exports = router;
