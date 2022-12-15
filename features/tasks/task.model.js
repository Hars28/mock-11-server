// - Title
// - Quantity
// - Priority
// - Time stamp (IST) (24 hour format)

const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
   title:{type: String},
   quantity:{type:Number},
   priority:{type:String},
   desc:{type:String},
   timestamp:{type:Date}

})

const Task = mongoose.model("task",taskSchema)
module.exports = Task;
