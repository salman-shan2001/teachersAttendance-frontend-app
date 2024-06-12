const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "name":String,
        "department":String,
        "subject":String,
        "password":String
        
    
    }
)

const teachermodel=mongoose.model("teachers",Schema);
module.exports={teachermodel}