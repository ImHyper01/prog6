// notes router
const express = require("express");

const router = express.Router();

let items = [
    {
        title: "test"
    },
    {
        title: "test"
    },
    {
        title: "test"
    },
]

// create route /
router.get("/", (req, res) => {
    console.log("GET");
    res.json(items)
})

// create route for detail
router.get("/:id", (req, res) => {
    console.log("GET");
    res.send(`request for item ${req.params.id}`);
})


// create route /
router.post("/", (req, res) => {
    console.log("POST");
    res.send("hello express!!!")
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
