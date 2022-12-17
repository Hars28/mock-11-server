const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const jobsRouter = require("./features/jobs/jobs.router.js")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
app.use("/jobs", jobsRouter)
mongoose.connect("mongodb+srv://harsh:harsh@cluster0.mflch7u.mongodb.net/mock-12?retryWrites=true&w=majority").then(()=>{
    app.listen(8080, () => {
        console.log("Server started")
    })
})
