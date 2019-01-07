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
      
app.get("/", (req, res) => 
    res.json("Hello from express") //Makes sure it responds with JSON
    )

app.use("/api/todos", todoRoutes)



app.listen(port, () => console.log(`Running on port ${port}`))