const express = require("express");
const router = express();
const { todo } = require('./db');
router.use(express.json());

router.post("/todo",async(req,res)=>{
    const createPayload = req.body;
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed: false
    })
    res.json({
        msg :"Todo created"
    })
})
router.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todo:todos
    })
})
router.listen(3000)
