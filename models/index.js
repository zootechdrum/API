const mongoose = require('mongoose');
const db = mongoose.connection;


mongoose.set('debug', true); //Instead of silently failing it will give you a better understanding
mongoose.connect('mongodb://localhost/todo-api'); //connects and/or creates the database

db.on('error', console.error.bind(console, "connection error:"));

mongoose.Promise = Promise; //Allows us to use promise syntax

module.exports.Todo = require("./todo");