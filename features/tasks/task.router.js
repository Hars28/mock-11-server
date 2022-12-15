const express = require("express")
const jwt = require("jsonwebtoken")
const Task = require("./task.model")
const app = express.Router();
const axios  = require("axios")

app.post("/", async(req,res) => {
    let { title, quantity ,priority, desc } = req.body;
    try{
        
        let newTask= await Task.create({title,quantity,priority,desc,timeStamp:Date.now()})
        
        return res.send("Task created succesfully",newTask)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

app.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        await Task.findByIdAndDelete(id)
        res.status(200).send("Deleted")
    }
    catch(e){
        res.status(500).send("Unauthorised")
    }
})


module.exports = app;