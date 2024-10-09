const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://ankur7:vJ8Oo1aiYpppkTPW@cluster0.bmtrf.mongodb.net/kanban`).
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
