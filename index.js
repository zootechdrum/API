const express = require('express')
const app = express()
const port  = 3000;

const todoRoutes = require("./routes/todos")

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