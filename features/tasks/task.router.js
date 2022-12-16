const express = require("express")
const jwt = require("jsonwebtoken")
const Task = require("./task.model")
const app = express.Router();
const axios  = require("axios")

app.get("/", async(req,res)=>{
    try{
        let resp = await Task.find()
        return res.status(200).send(resp)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})
app.post("/", async(req,res) => {
    let { title, quantity ,priority, desc } = req.body;
    try{
        
        let newTask= {title,quantity,priority,desc,timestamp:new Date().getTime()}
        console.log(newTask)
        await Task.create(newTask)
        return res.send({message:"Task created succesfully",newTask})
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

app.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        await Task.findByIdAndDelete(id)
        res.status(200).send("Deleted")
    }
    catch(e){
        res.status(500).send("Unauthorised")
    }
})


module.exports = app;