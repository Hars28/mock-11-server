const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
   company:{type: String},
   city:{type:String},
   loc:{type:String},
   role:{type:String},
   level:{tpye:String},
   pos:{type:String},
   contract:{type:String},
   language:{type:String},
   postedAt:{type:String},

})

const Job = mongoose.model("job",jobSchema)
module.exports = Job;