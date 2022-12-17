const express = require("express")
const jwt = require("jsonwebtoken")
const Job = require("./jobs,model")
const app = express.Router();
const axios  = require("axios")

app.get("/", async(req,res)=>{
    let lim = req.query.limit || 10
    let skipVal = req.query.skip || 0
    try{
        let resp = await Job.find().limit(lim).skip(skipVal)
        return res.status(200).send(resp)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})
app.get("/filter", async(req,res)=>{
    let {filter} = req.query;
    try{
        let resp = await Job.find({role:filter})
        res.send(resp)
    }catch(e){
        res.status(500).send(e.message)
    }
    
})
app.get("/srt", async(req,res) => {
    let {srt} = req.query

    try{
        let resp = await Job.find().sort({postedAt:srt})
        res.status(200).send(resp)
    }catch(e){
        res.status(500).send(e.message)
    }
})
app.get("/search", async(req,res)=>{
    try{
        let {job} = req.query;
        let resp = await Job.find({language:job})
        res.send(resp)
    }catch(e){
        res(e.message)
    }
})
app.post("/", async(req,res) => {
  

    let { company,city,loc,role,level,pos,contract,language } = req.body;
    try{
        
        let newJob= {company,city,loc,role,level,pos,contract,language,postedAt:new Date().toLocaleDateString()}
        console.log(newJob)
        await Job.create(newJob)
        return res.send({message:"Job created succesfully",newJob})
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