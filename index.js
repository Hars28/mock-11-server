const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const taskRouter = require("./features/tasks/task.router")
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())

app.use("/tasks", taskRouter)
mongoose.connect("mongodb+srv://harsh:harsh@cluster0.mflch7u.mongodb.net/mock-11?retryWrites=true&w=majority").then(()=>{
    app.listen(8080, () => {
        console.log("Server started")
    })
})
