const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        required: "Name cannot be blank!"
    },
    completed: {
        type:Boolean,
        default:false
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});

const Todo = mongoose.model("Todo", todoSchema) //compile to a model 
module.exports = Todo;
//name
//completed
//created_date