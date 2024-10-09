const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI).
then(()=>{
    console.log("Connected")
})
.catch((error)=>{
    console.error("Not connected",error.message)
})

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('kanban', todoSchema);

module.exports ={
    todo:todo
}
