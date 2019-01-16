const express = require('express')
const app = express()
const port  = 3000;
const bodyParser = require('body-parser')

const todoRoutes = require("./routes/todos")

//Allow us to access the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Middleware function
app.use("/",(req, res, next) =>  {
    console.log("who the Fuck are you")
    next();
});

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));
app.get("/", (req, res) => 
    // res.sendFile("index.html") //Makes sure it responds with JSON
    {res.sendFile("index.html")}
    )

app.use("/api/todos", todoRoutes)



app.listen(port, () => console.log(`Running on port ${port}`))