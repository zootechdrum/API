const express = require("express")
const router = express.Router();

router.use(function(req, res, next)  {
    console.log("who the Fuck are you")
    next();
});

router.get("/", (req, res) => {
    res.send("Hello From TODOS routes")
});

module.exports = router;