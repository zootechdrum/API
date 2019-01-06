const express = require("express")
const router = express.Router();
const db = require("../models")



router.get("/", (req, res) => {
    db.Todo.find()
        .then(todos => {res.json(todos)})
        .catch(err => {re.send(err)})
});


router.post("/",(req,res) => {
    res.send("This is the post route")
});

module.exports = router;